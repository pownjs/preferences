const os = require('os')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const existsAsync = promisify(fs.exists)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const callbackify = (func) => {
    return (tool, callback) => {
        const promise = func(tool)

        if (callback) {
            promise
                .then((result) => callback(null, result))
                .catch((error) => callback(error, null))

            return
        }

        return promise
    }
}

const getPreferencesFilename = (tool) => {
    return path.join(os.homedir(), '.pown', tool, `preferences.json`)
}

const getPreferences = callbackify(async (tool) => {
    const filename = getPreferencesFilename(tool)

    if (await existsAsync(filename)) {
        const data = await readFileAsync(filename)

        return JSON.parse(data.toString() || '{}')
    } else {
        return {}
    }
})

const setPreferences = callbackify(async (tool, preferences) => {
    const filename = getPreferencesFilename(tool)

    await writeFileAsync(filename, JSON.stringify(preferences))
})

module.exports = { getPreferencesFilename, getPreferences, setPreferences }
