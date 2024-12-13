import assert from 'node:assert';
import { describe, it } from 'node:test';
import { sampleSum } from "./my-test-function.ts"


describe('sampleSum', () => {
    it('1+1 should be 2', () => {
        const result = sampleSum(1, 1)
        assert.strictEqual(result, 2)
    })

    it('1+6 should be 7', () => {
        const result = sampleSum(1, 6)
        assert.strictEqual(result, 7)
    })
})
