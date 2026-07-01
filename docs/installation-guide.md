# EliteTips Solo – Installation Guide

## System Requirements

- Node.js 18+ installed
- PostgreSQL database
- A domain name (optional)

---

## Step 1: Set Up Your Database

### Option A: Neon (Free & Recommended)

1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Click "Create Project"
4. Name it `elitetips`
5. Copy the connection string (starts with `postgresql://`)

### Option B: HostAfrica / cPanel

1. Log in to cPanel
2. Find "PostgreSQL Databases"
3. Create a new database and user
4. Copy the connection string

---

## Step 2: Upload Files

### Option A: cPanel (HostAfrica)

1. Log in to cPanel
2. Open File Manager
3. Upload the ZIP file
4. Extract to the public folder

### Option B: VPS

1. SSH into your server
2. Clone the repository
3. Navigate to the folder

---

## Step 3: Install Dependencies

Run: `npm install`

---

## Step 4: Set Up Environment

1. Copy `.env.example` to `.env`
2. Edit `.env` with your database URL and API keys

---

## Step 5: Run Database Migrations

Run: `npx prisma migrate deploy`

---

## Step 6: Build and Start

Run: `npm run build && npm start`

---

## Step 7: Access Your Site

- Open your browser
- Visit `https://your-domain.com`
- Admin login: `admin@example.com` / `password123!`
- Change password immediately

---

## Support

Email: support@elitetips.com
