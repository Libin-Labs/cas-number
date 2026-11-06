# @lp-labs/cas-number

Canonical CAS Registry Number checksum arithmetic.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/cas-number
```

## Working example

```js
import { validateCas, casCheckDigit } from '@lp-labs/cas-number';
if (!validateCas('7732-18-5') || casCheckDigit('7732-18') !== '5') throw new Error('CAS');
```

CommonJS: `const api = require('@lp-labs/cas-number')`.

## Behavior, customization and limits

casCheckDigit(body) accepts first group2..7digits, no leading zero, hyphen, exactly2digits (e.g.7732-18), computes reversed weighted mod10. validateCas accepts body-checkdigit, returns false checksum mismatch, throws malformed syntax; no normalization or chemical registry lookup. Body<=10 chars,full<=12. O(digits), no substance identity, hazards or chemistry guidance.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function casCheckDigit(body: string): string;
export declare function validateCas(value: string): boolean;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
