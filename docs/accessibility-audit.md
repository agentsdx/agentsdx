# Keyboard Accessibility Audit

This audit records the public interface review completed on 18 August 2026. It combines rendered route inspection with an implementation contract test that protects the key semantic and focus requirements.

| Route or component | Keyboard path audited | Result |
| --- | --- | --- |
| Global header | Home link, desktop navigation, primary Book a Demo action, and the mobile-menu button are semantic links or a native button. The mobile trigger exposes its expanded state and switches its accessible label. | Pass |
| Mobile navigation | The disclosed navigation is contained in a labelled navigation landmark and uses standard links. Selecting a route also closes the open menu state. | Pass |
| Home, Features, Pricing, About | Primary and secondary conversion actions are standard internal links; the billing option uses native buttons. | Pass |
| Resources and article detail | Resource cards, back navigation, and article conversion actions use standard internal links. | Pass |
| FAQ | Questions use native `details` and `summary` elements, which provide keyboard toggle behaviour without scripted focus handling. | Pass |
| Contact | Every visible input is wrapped by a textual label; the submit control is a native button; validation messages expose alert and status semantics. | Pass |
| Footer and legal routes | Footer navigation is standard internal navigation. Decorative social identifiers are non-link visual markers until approved URLs are supplied, preventing dead keyboard targets. | Pass |
| Focus visibility | Links, buttons, fields, textareas, and summaries receive a Coral `:focus-visible` outline. | Pass |

The accessibility contract test at `client/src/components/marketing/accessibility.contract.test.ts` protects these requirements in the automated suite. The remaining content dependencies—official logo asset, legal copy, authorised social proof, and production social destinations—do not block keyboard operation but must be supplied before a production publish.
