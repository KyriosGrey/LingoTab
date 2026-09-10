import type { Manifest } from 'webextension-polyfill'
import type PkgType from '../package.json'
import fs from 'fs-extra'

import { isDev, port, r } from '../scripts/utils'

export async function getManifest() {
  const pkg = (await fs.readJSON(r('package.json'))) as typeof PkgType

  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    description: pkg.description,
    version: pkg.version,

    chrome_url_overrides: {
      newtab: './dist/newTab/index.html',
    },

    options_ui: {
      page: './dist/options/index.html',
      open_in_tab: true,
    },

    icons: {
      16: './assets/16.png',
      32: './assets/32.png',
      48: './assets/48.png',
      128: './assets/128.png',
    },

    permissions: [
      'storage',
    ],

    host_permissions: [
      'https://translate.googleapis.com/*',
      'https://api.dictionaryapi.dev/*',
      'https://en.wiktionary.org/*',
      'https://commons.wikimedia.org/*',
      'https://upload.wikimedia.org/*',
      'https://api.wiktapi.dev/*',
      'https://api.mymemory.translated.net/*',
    ],

    content_security_policy: {
      extension_pages: [
        // icons.duckduckgo.com serves the favicons of the user's site shortcuts
        'img-src \'self\' data: https://icons.duckduckgo.com https://www.google.com https://api.faviconkit.com',
        'object-src \'self\'',
        // localhost is required in dev only: the Vite server serves the scripts
        `script-src 'self' ${isDev ? `http://localhost:${port}` : ''}`.trim(),
      ].join(';'),
    },

    // required by addons.mozilla.org: a Firefox build is rejected without an
    // explicit extension id, and MV3 needs Firefox 109+. Chrome ignores this key.
    browser_specific_settings: {
      // the cast is only because `data_collection_permissions` is newer than
      // @types/webextension-polyfill — the key itself is valid for Firefox MV3
      gecko: {
        id: 'new-word-tab@graydesign',
        strict_min_version: '109.0',
        data_collection_permissions: {
          required: ['none'],
        },
      } as Manifest.FirefoxSpecificProperties,
    },
  }

  return manifest
}
