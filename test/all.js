const lib = require('../lib')

const assert = require('assert')

describe('lib', () => {
    describe('#getPreferences()', () => {
        it('must not error', (done) => {
            lib.getPreferences('test', (err, prefs) => {
                assert.ok(!err)
                assert.ok(prefs)

                done()
            })
        })

        it('must not error (async/await)', async () => {
            let prefs

            try {
                prefs = lib.getPreferences('test')
            } catch (err) {
                async.ok(!err)

                return
            }

            assert.ok(prefs)
        })
    })
})
