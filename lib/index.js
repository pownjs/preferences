const os = require('os')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const existsAsync = promisify(fs.exists)
const readFileAsync = promisify(fs.readFile)

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

exports.getPreferencesFilename = (tool) => {
    return path.join(os.homedir(), '.pown', tool, `preferences.json`)
}

exports.getPreferences = callbackify(async (tool) => {
    const filename = exports.getPreferencesFilename(tool)

    if (await existsAsync(filename)) {
        return JSON.parse(await readFileAsync(filename))
    } else {
        return {}
    }
})
