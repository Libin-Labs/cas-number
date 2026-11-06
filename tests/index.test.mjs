import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('water known', () => {
  assert.ok(api.validateCas('7732-18-5'));
  assert.equal(api.casCheckDigit('7732-18'), '5');
});
test('ethanol known', () => {
  assert.ok(api.validateCas('64-17-5'));
});
test('caffeine known', () => {
  assert.ok(api.validateCas('58-08-2'));
});
test('mismatch predicate', () => {
  assert.equal(api.validateCas('7732-18-6'), false);
});
test('malformed canonical', () => {
  for (const t of ['07732-18-5', '7732-1-5', '7732-18-5\n', '7732185'])
    assert.throws(() => api.validateCas(t));
});
test('weighted oracle', () => {
  for (let i = 10; i < 200; i++) {
    const body = i + '-12',
      digits = String(i) + '12',
      expected = [...digits].reverse().reduce((s, d, j) => s + Number(d) * (j + 1), 0) % 10;
    assert.equal(api.casCheckDigit(body), String(expected));
  }
});
