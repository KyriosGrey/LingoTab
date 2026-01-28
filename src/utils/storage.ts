// LocalStorage-only storage with the same async API as previous utils/storage.
// API: get(keys), set(obj), remove(keys)
// get accepts: array of keys, single key string, or object (defaults)

type Keys = string[] | string | Record<string, any>

export async function get(keys: Keys) {
  const result: Record<string, any> = {}

  if (Array.isArray(keys)) {
    for (const k of keys) {
      const v = localStorage.getItem(k)
      try { result[k] = v !== null ? JSON.parse(v) : undefined }
      catch { result[k] = v }
    }
    return result
  }

  if (typeof keys === 'string') {
    const v = localStorage.getItem(keys)
    try { return { [keys]: v !== null ? JSON.parse(v) : undefined } }
    catch { return { [keys]: v } }
  }

  if (typeof keys === 'object' && keys !== null) {
    for (const k of Object.keys(keys)) {
      const v = localStorage.getItem(k)
      if (v !== null) {
        try { result[k] = JSON.parse(v) }
        catch { result[k] = v }
      }
      else {
        result[k] = (keys as Record<string, any>)[k]
      }
    }
    return result
  }

  return {}
}

export async function set(obj: Record<string, any>) {
  for (const k of Object.keys(obj)) {
    try {
      localStorage.setItem(k, JSON.stringify(obj[k]))
    }
    catch {
      localStorage.setItem(k, String(obj[k]))
    }
  }
}

export async function remove(keys: string | string[]) {
  if (Array.isArray(keys)) {
    for (const k of keys) localStorage.removeItem(k)
  }
  else {
    localStorage.removeItem(keys)
  }
}
