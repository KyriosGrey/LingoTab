// A request that never resolves at all (rather than failing fast with an error status)
// would otherwise hang forever, since plain fetch() has no built-in timeout - this caps
// how long any single outgoing request is allowed to hang before it's treated as failed.
export const DEFAULT_FETCH_TIMEOUT_MS = 3000

// init covers the one caller that isn't a plain GET (the batched translation POST); the
// signal is applied last so it can't be overwritten by whatever the caller passed.
export async function fetchWithTimeout(url: string, timeoutMs: number = DEFAULT_FETCH_TIMEOUT_MS, init?: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await fetch(url, { ...init, signal: controller.signal })
  }
  finally {
    clearTimeout(timeoutId)
  }
}

export function isTimeoutError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}
