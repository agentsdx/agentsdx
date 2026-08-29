# agents DX: MakersHost Static Deployment Guide

Since your MakersHost shared hosting does not support Node.js, we will deploy the **agents DX** website as a **static marketing site**. This preserves the premium design, all public pages, the Live Chat chooser, and Cal.com booking functionality.

## Backend Limitations

In this static configuration, the following features are unavailable:
- **Built-in Login**: The "Login" link in the header already points to `https://app.agentsdx.com/` (external), so it remains functional.
- **Dynamic Database Features**: Any feature requiring a live server-side database will not operate.
- **tRPC API**: The internal API layer is disabled.

## Step 1: Generate the Static Build

1.  I have already configured the project for a static build.
2.  The production files are located in the `dist/public` folder after running the build command.

## Step 2: Upload to MakersHost

1.  **Login to cPanel**: Access your MakersHost control panel.
2.  **Open File Manager**: Navigate to the `public_html` directory (or the folder for your domain `www.agentsdx.com`).
3.  **Upload Files**: Upload the **entire contents** of the `dist/public` folder.
    - Ensure the `.htaccess` file is included; it handles the website routing.
    - Ensure the `assets` folder is uploaded correctly.

## Step 3: Verify Routing

The included `.htaccess` file ensures that when a visitor goes to `www.agentsdx.com/features`, the server correctly loads the main application to handle the route.

## Step 4: Finalize SSL

Use the **Let's Encrypt** or **AutoSSL** feature in your MakersHost cPanel to issue a free SSL certificate for `www.agentsdx.com`.

---
*Prepared by Manus AI for agents DX.*
