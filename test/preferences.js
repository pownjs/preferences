const assert = require('assert')

const { getPreferences } = require('../lib')

describe('getPreferences', () => {
    it('must not error', (done) => {
        getPreferences('test', (err, prefs) => {
            assert.ok(!err)
            assert.ok(prefs)

            done()
        })
    })

    it('must not error (async/await)', async() => {
        let prefs

        try {
            prefs = getPreferences('test')
        } catch (err) {
            async.ok(!err)

            return
        }

        assert.ok(prefs)
    })
})
