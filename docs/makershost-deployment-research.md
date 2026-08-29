# MakersHost deployment research

Research date: 29 August 2026

## Verified provider information

Source: https://www.makershost.io/

MakersHost advertises shared web hosting with free wildcard SSL, a global CDN, SSD storage, managed WordPress support, and a public pricing page. The page lists Single Web Hosting with 1 website, 1 database, 50 GB bandwidth, and 10 GB SSD storage; Professional Web Hosting with 10 websites and 10 databases; and Unlimited Web Hosting with unlimited websites and databases. The public page does not clearly state that the shared plans provide a Node.js application runtime, SSH access, or cPanel's Node.js application manager.

The provider also advertises a separate VPS product, which may be a more appropriate target if shared plans do not provide Node.js process support.

Source: https://my.makershost.io/basket-summary-login?r=%2Fsupport-database

The public Knowledge Base link redirected to a MakersHost account/login flow, so provider-specific Node.js instructions could not be verified without an authenticated customer account.

## Deployment implication

The agents DX project is a React + Express + tRPC full-stack application. It requires a Node.js runtime for the Express server and a MySQL-compatible database for the existing Drizzle/mysql2 data layer. A PHP-only shared plan cannot run the project as-is. The first required customer-side check is whether the MakersHost control panel includes "Setup Node.js App", "Node.js Selector", or an equivalent Application Manager, and whether the plan permits a persistent Node.js process and environment variables.

If Node.js is unavailable on the shared plan, the static Vite output can be separated from the server application, but application-backed functionality such as OAuth, tRPC, and database access would not operate without a separately hosted backend. A VPS or another Node-capable service would therefore be required for the complete site.

## Related official runtime reference

Render and cPanel documentation are useful deployment-pattern references, but they do not establish what the user's MakersHost plan includes. Provider plan support must be confirmed from the user's control panel or MakersHost support team before making a production deployment change.

References:

1. MakersHost — The Web Host for Makers and Doers: https://www.makershost.io/
2. MakersHost Knowledge Base entry point: https://my.makershost.io/basket-summary-login?r=%2Fsupport-database
3. cPanel — How to Host a Node.js Application With cPanel: https://www.cpanel.net/blog/tips-and-tricks/how-to-host-a-node-js-application-with-cpanel/
4. Render — Web Services: https://render.com/docs/web-services
5. Render — Deploy MySQL: https://render.com/docs/deploy-mysql
6. Render — Platforms with a real free tier for developers in 2026: https://render.com/articles/platforms-with-a-real-free-tier-for-developers-in-2026

This document records research only. It does not claim that MakersHost shared hosting supports Node.js without plan-specific confirmation.

