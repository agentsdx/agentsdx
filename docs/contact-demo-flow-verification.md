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

## Form-free contact directory revision — 18 August 2026

The original inquiry form has been replaced with an explicit contact directory. It presents `cs@AgentsDX.com` as a mailto destination, communicates that live chat is available 24/7 through the agents DX application, and presents two independent booking paths: **Agents DX Platform** and **Agents DX + Dedicated Manager**.

Both booking actions use the supplied Cal.com in-frame trigger metadata—`data-cal-link`, `data-cal-namespace`, and month-view configuration—with direct Cal.com URLs retained as graceful fallbacks. The dedicated-manager fallback was opened successfully and showed the `Agents DX + Dedicated Manager` calendar. The local preview environment did not download the external Cal.com script (the browser performance entry returned a zero-byte cross-origin result), so its native popup interception cannot be confirmed inside the sandbox. The implementation follows the supplied loader pattern and preserves the direct booking fallback for this case.

Each consultation card also provides an accessible native disclosure labelled **Open calendar in this page**. It mounts the corresponding lazily loaded Cal.com frame when expanded and includes a clear new-tab fallback. The fallback frames, direct URLs, and native disclosure controls were confirmed to be present in the contact-page DOM.
