[![Follow on Twitter](https://img.shields.io/twitter/follow/pownjs.svg?logo=twitter)](https://twitter.com/pownjs)
![NPM](https://img.shields.io/npm/v/@pown/preferences.svg)
[![Fury](https://img.shields.io/badge/version-2x%20Fury-red.svg)](https://github.com/pownjs/lobby)
![default workflow](https://github.com/pownjs/git/actions/workflows/default.yaml/badge.svg)
[![SecApps](https://img.shields.io/badge/credits-SecApps-black.svg)](https://secapps.com)

# Pown Preferences

Utility library for working with Pown.js preferences.

## Quickstart

Install this module from the root of your project:

```sh
$ npm install @pown/preferences --save
```

Once done, list all installed pown preferences like this:

```js
const pownPreferences = require('@pown/preferences')

pownPreferences.getPreferences('something', (err, preferences) => {
	// do something with preferences
})
```

You can also use promises with async/await like this:

```js
const pownPreferences = require('@pown/preferences')

const preferences = async pownPreferences.getPreferences('something')

// do something with preferences
```
