function strictText(value: string, max = 16384): void {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  if (value.length > max) throw new RangeError('Text length budget exceeded');
}
function casBody(body: string): string {
  strictText(body, 10);
  if (/[^0-9-]/.test(body) || !/^[1-9][0-9]{1,6}-[0-9]{2}$/.test(body))
    throw new RangeError('CAS body syntax');
  return body.replace('-', '');
}
export function casCheckDigit(body: string): string {
  const digits = casBody(body);
  let sum = 0;
  for (let i = digits.length - 1, weight = 1; i >= 0; i--, weight++)
    sum += Number(digits[i]) * weight;
  return String(sum % 10);
}
export function validateCas(value: string): boolean {
  strictText(value, 12);
  const parts = value.split('-');
  if (parts.length !== 3 || parts[2]!.length !== 1 || /[^0-9]/.test(parts[2]!))
    throw new RangeError('CAS number syntax');
  return casCheckDigit(parts[0] + '-' + parts[1]) === parts[2];
}
