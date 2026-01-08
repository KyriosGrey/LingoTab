// Safe storage wrapper: uses chrome.storage.local when available, otherwise falls back to window.localStorage.
// API: get(keys), set(obj), remove(keys)
// get accepts: array of keys, single key string, or object (defaults)

type Keys = string[] | string | Record<string, any>

function getChromeLocal() {
  return (globalThis as any).chrome?.storage?.local ?? null
}

function getChromeRuntime() {
  return (globalThis as any).chrome?.runtime ?? null
}

export async function get(keys: Keys) {
  const chromeLocal = getChromeLocal()
  if (chromeLocal) {
    // chrome.storage.local.get may return a Promise in some environments or use callback API
    try {
      const maybe = chromeLocal.get(keys as any)
      if (maybe && typeof maybe.then === 'function') {
        // Promise-style
        return await maybe
      } else {
        // Callback-style
        return await new Promise((resolve, reject) => {
          try {
            chromeLocal.get(keys as any, (res: any) => {
              const lastError = getChromeRuntime()?.lastError
              if (lastError) reject(lastError)
              else resolve(res)
            })
          } catch (err) {
            reject(err)
          }
        })
      }
    } catch (err) {
      // In case something unexpected happens, fallback to localStorage below
      console.warn('chrome.storage.local.get failed, falling back to localStorage:', err)
    }
  }

  // Fallback to localStorage
  const result: Record<string, any> = {}
  if (Array.isArray(keys)) {
    for (const k of keys) {
      const v = localStorage.getItem(k)
      try { result[k] = v !== null ? JSON.parse(v) : undefined } catch { result[k] = v }
    }
    return result
  } else if (typeof keys === 'string') {
    const v = localStorage.getItem(keys)
    try { return { [keys]: v !== null ? JSON.parse(v) : undefined } } catch { return { [keys]: v } }
  } else if (typeof keys === 'object' && keys !== null) {
    for (const k of Object.keys(keys)) {
      const v = localStorage.getItem(k)
      if (v !== null) {
        try { result[k] = JSON.parse(v) } catch { result[k] = v }
      } else {
        result[k] = (keys as Record<string, any>)[k]
      }
    }
    return result
  }
  return {}
}

export async function set(obj: Record<string, any>) {
  const chromeLocal = getChromeLocal()
  if (chromeLocal) {
    try {
      const maybe = chromeLocal.set(obj)
      if (maybe && typeof maybe.then === 'function') {
        return await maybe
      } else {
        return await new Promise((resolve, reject) => {
          try {
            chromeLocal.set(obj, () => {
              const lastError = getChromeRuntime()?.lastError
              if (lastError) reject(lastError)
              else resolve(undefined)
            })
          } catch (err) {
            reject(err)
          }
        })
      }
    } catch (err) {
      console.warn('chrome.storage.local.set failed, falling back to localStorage:', err)
    }
  }

  // Fallback to localStorage
  for (const k of Object.keys(obj)) {
    try { localStorage.setItem(k, JSON.stringify(obj[k])) } catch { localStorage.setItem(k, String(obj[k])) }
  }
}

export async function remove(keys: string | string[]) {
  const chromeLocal = getChromeLocal()
  if (chromeLocal) {
    try {
      const maybe = chromeLocal.remove(keys as any)
      if (maybe && typeof maybe.then === 'function') {
        return await maybe
      } else {
        return await new Promise((resolve, reject) => {
          try {
            chromeLocal.remove(keys as any, () => {
              const lastError = getChromeRuntime()?.lastError
              if (lastError) reject(lastError)
              else resolve(undefined)
            })
          } catch (err) {
            reject(err)
          }
        })
      }
    } catch (err) {
      console.warn('chrome.storage.local.remove failed, falling back to localStorage:', err)
    }
  }

  // Fallback to localStorage
  if (Array.isArray(keys)) {
    for (const k of keys) localStorage.removeItem(k)
  } else {
    localStorage.removeItem(keys)
  }
}