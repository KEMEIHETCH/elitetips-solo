# Client Payment Setup Guide – EliteTips Solo

## Overview

As a buyer, you need to set up your own payment accounts. All payments from YOUR clients go directly to YOUR accounts.

## Step 1: Set Up IntaSend (M-PESA)

1. Go to [intasend.com](https://intasend.com)
2. Sign up and log in
3. Go to **Developer** → **API Keys**
4. Generate API keys
5. Copy Publishable Key and Secret Key
6. Add to your `.env` file

## Step 2: Set Up PayPal

1. Go to [developer.paypal.com](https://developer.paypal.com)
2. Log in with your PayPal account
3. Go to **My Apps & Credentials**
4. Create an app
5. Copy Client ID and Secret Key
6. Add to your `.env` file

## Step 3: Set Up Paystack

1. Go to [paystack.com](https://paystack.com)
2. Sign up and log in
3. Go to **Settings** → **API Keys**
4. Copy Public Key and Secret Key
5. Add to your `.env` file

## Step 4: Test Payments

1. Set environment to `SANDBOX` for testing
2. Test with test cards/phone numbers
3. Switch to `PRODUCTION` when ready

---

## Money Flow

YOUR CLIENT pays → IntaSend/PayPal/Paystack → Money goes to YOUR account → You withdraw to YOUR bank/M-PESA

**The system creator never touches your money.**
