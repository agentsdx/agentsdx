# agents DX: MakersHost Deployment Guide

This document provides the technical requirements and step-by-step instructions for deploying the **agents DX** website to your **MakersHost** shared hosting account at **www.agentsdx.com**.

## Critical Prerequisites

The agents DX website is built as a modern full-stack application using **React 19** and **Express 4**. It requires a persistent Node.js runtime and a database to operate. Before proceeding, you must confirm that your MakersHost plan includes the following capabilities:

| Requirement | Description |
| --- | --- |
| **Node.js Support** | Your control panel (cPanel) must include the **"Setup Node.js App"** or **"Node.js Selector"** icon under the *Software* section. |
| **Database** | Access to a **MySQL** or **MariaDB** database with at least one available database and user. |
| **File Storage** | Sufficient disk space (approx. 200MB for the application and dependencies). |
| **SSH Access** | Recommended for running build commands and managing files, though not strictly required if the Node.js selector is available. |

> [!WARNING]
> If your MakersHost plan only supports static files (HTML/CSS/JS) and PHP, this application cannot be hosted there as-is. The backend (Express/tRPC) and database (MySQL) require a Node.js environment.

## Step 1: Prepare the MakersHost Environment

1.  **Create the Database**: In your control panel, navigate to **MySQL Databases**. Create a new database (e.g., `agentsdx_db`) and a new user with all privileges. Save the **Database Name**, **Username**, and **Password**.
2.  **Initialize the Node.js App**:
    *   Open **Setup Node.js App** in the *Software* section.
    *   Click **Create Application**.
    *   Set the **Node.js Version** (v20 or higher recommended).
    *   Set the **Application Root** (e.g., `agentsdx-app`).
    *   Set the **Application URL** to your domain: `www.agentsdx.com`.
    *   Set the **Application Startup File** to `dist/index.js`.
    *   Click **Create**.

## Step 2: Upload and Configure

1.  **Upload Files**: Use the **File Manager** or **FTP** to upload the contents of the agents DX project ZIP to the `Application Root` directory you created (e.g., `/home/username/agentsdx-app`).
2.  **Configure Environment Variables**: In the **Setup Node.js App** interface, add the following variables under **Environment Variables**:

| Variable Name | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `PORT` | The port provided by your host (or leave default if managed by cPanel) |
| `DATABASE_URL` | `mysql://username:password@localhost:3306/database_name` |
| `JWT_SECRET` | A long, random string for session security |

## Step 3: Install Dependencies and Build

1.  **Install Dependencies**: In the **Setup Node.js App** interface, click the **Run npm install** button. This will download the required libraries.
2.  **Run the Build**: If you are using SSH, navigate to the application root and run `npm run build`. If you do not have SSH access, ensure the `dist` folder is included in your ZIP upload.

## Step 4: Finalize Domain and SSL

1.  **DNS**: Ensure your domain `www.agentsdx.com` points to your MakersHost server's IP address.
2.  **SSL**: Use the **Let's Encrypt** or **AutoSSL** feature in your control panel to issue a free SSL certificate for your domain.

## References

1. cPanel — How to Host a Node.js Application With cPanel: https://www.cpanel.net/blog/tips-and-tricks/how-to-host-a-node-js-application-with-cpanel/ [1]
2. MakersHost — Official Site: https://www.makershost.io/ [2]
3. Node.js Official Documentation: https://nodejs.org/docs/ [3]

[1] [cPanel Node.js Hosting Guide](https://www.cpanel.net/blog/tips-and-tricks/how-to-host-a-node-js-application-with-cpanel/)
[2] [MakersHost Official Website](https://www.makershost.io/)
[3] [Node.js Documentation](https://nodejs.org/docs/)

---
*Prepared by Manus AI for agents DX.*
