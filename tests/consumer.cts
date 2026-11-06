import { validateCas, casCheckDigit } from '@lp-labs/cas-number';
if (!validateCas('7732-18-5') || casCheckDigit('7732-18') !== '5') throw new Error('CAS');
// @ts-expect-error invalid argument must be rejected by declarations
validateCas(7732185);
