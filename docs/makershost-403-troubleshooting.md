# Troubleshooting: MakersHost 403 Permission Error

If you see **"You don't have permission to access this resource"** after uploading the ZIP, please follow these steps in your MakersHost cPanel:

## 1. Check the File Location
The files must be in the **Document Root** for `www.agentsdx.com`. 
- In cPanel, go to **Domains**.
- Find `www.agentsdx.com` and look at the **Document Root** column (usually `public_html`).
- Ensure the `index.html` and `.htaccess` files are directly inside that folder, **not** inside a subfolder like `dist/public`.

## 2. Show Hidden Files
The `.htaccess` file is critical for the website to work, but it is often hidden by default.
- In **File Manager**, click **Settings** (top right).
- Check **"Show Hidden Files (dotfiles)"** and click **Save**.
- Verify that `.htaccess` is present in your domain's folder. If not, upload it separately.

## 3. Fix File Permissions
Shared hosting requires specific permissions to allow public access.
- In **File Manager**, select all uploaded files and folders.
- Ensure **Folders** are set to **755**.
- Ensure **Files** (like `index.html`) are set to **644**.
- If they are set to `000` or `600`, you will get a 403 error.

## 4. Check for an Index File
Apache servers look for `index.html` or `index.php`. 
- Ensure your main file is named exactly **`index.html`** (all lowercase).
- If you have an existing `index.php` or `default.php` from MakersHost, delete or rename it so it doesn't conflict.

## 5. Directory Indexing
If you still have issues, add this line to the very top of your `.htaccess` file:
```apache
Options -Indexes
DirectoryIndex index.html
```

---
*Prepared by Manus AI for agents DX.*
