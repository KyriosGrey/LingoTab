import { fetchWithTimeout, isTimeoutError } from './fetchWithTimeout'

// Growing delays between attempts avoid hammering an already-struggling service.
const RETRY_DELAYS_MS = [400, 800, 1200]

/**
 * Fetches a URL, retrying on failure with growing backoff. Stops early - without
 * using up the remaining attempts - when `isFinal` says the response shouldn't be
 * retried (e.g. success, or a definitive "not found" that a retry can't fix), or
 * when a request timed out (a hung connection is unlikely to succeed on an
 * immediate retry, so it's better to give up and let the caller fall back to
 * another source right away).
 */
export async function fetchWithRetry(url: string, isFinal: (response: Response) => boolean): Promise<Response> {
  let response: Response | null = null
  let lastError: unknown = null

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      response = await fetchWithTimeout(url)
      lastError = null
      if (isFinal(response))
        break
    }
    catch (e) {
      response = null
      lastError = e

      if (isTimeoutError(e))
        break
    }

    if (attempt < RETRY_DELAYS_MS.length) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAYS_MS[attempt]))
    }
  }

  if (lastError) {
    throw lastError
  }

  if (!response) {
    throw new Error('Failed due to network response.')
  }

  return response
}
