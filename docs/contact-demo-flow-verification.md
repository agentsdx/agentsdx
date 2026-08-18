# Contact and Demo Flow Verification

The revised Contact / Book a Demo experience was reviewed on 18 August 2026 after applying the supplied agents DX Cal.com details.

| Flow step | Verification evidence | Result |
| --- | --- | --- |
| Inquiry field requirements | The unit suite checks that name, email, company, and message are all required. | Passed |
| Email validation | The unit suite checks that an invalid email is rejected and a complete valid inquiry is accepted. | Passed |
| Prepared inquiry state | On a complete valid inquiry, the local form displays a success status directing the visitor to open the booking calendar. | Passed |
| Booking CTA | The Contact calendar panel and every Book a Demo action carry the supplied `data-cal-link="agentsdx/platform"` metadata and a direct `https://cal.com/agentsdx/platform` fallback. | Passed |
| Cal.com destination | The fallback opened as `Agents DX Platform | agents DX | Cal.com` during the public reachability check. | Passed |
| Narrow-screen presentation | The revised contact form and live-booking panel were reviewed at 390px width and remained readable and tappable. | Passed |

The contact form currently prepares the inquiry client-side; no outbound lead-delivery service was requested or configured. The booking action opens the approved Cal.com platform flow.
