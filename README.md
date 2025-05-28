# 🚀 Flash Email Tool – Flash Boost Campaign

A Node.js + HTML project built for Alatree Ventures' Tech Assessment (Phase 1) to power a Flash Boost Campaign for [Top216.com](https://top216.com). This includes a promo email sender, preview UI, landing page, and backend API.

---

## 📦 Folder Structure

```plaintext
Flash-Email/
├── backend/
│   ├── app.js             # Express server with email API
│   └── .env               # Email credentials (not committed)
├── frontend/
│   ├── index.html         # Preview UI to test email delivery
│   ├── raw-email.html     # Raw email template
│   └── flash-boost.html   # Campaign landing page
├── README.md              # Project documentation
└── package.json           # Backend dependencies and entry
```

---

## 📄 Backend API

### POST `/api/send-flash-email`

**Description:** Send marketing emails to a list of recipients.

**Request Body:**

```json
{
  "emails": ["user1@example.com", "user2@example.com"]
}
```

**Response:**

```json
{
  "sent": true,
  "count": 2
}
```

---

## 🌐 Pages Overview

| Page                      | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `/`                       | Email preview + tester form                |
| `/flash-boost?tier=boost` | Landing page showing perks + subscribe CTA |

---

## 💻 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/IbrahimKhan7208/Flash-Email.git
cd Flash-Email
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Create a `.env` file in `backend/`

```ini
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=yourapppassword
```

⚠️ Make sure you [enable App Passwords](https://support.google.com/accounts/answer/185833) in your Gmail settings with 2FA enabled.

### 4. Run the server

```bash
npx nodemon app.js
```

Then go to [http://localhost:3000](http://localhost:3000) to view the UI.

---

## ⚠️ Gmail Timer Limitation

Gmail **does not support JavaScript** inside email clients for security reasons. Therefore, any dynamic countdown timers (`<script>`) will not work in the email.

✅ You can use static GIF countdowns or visually styled graphics to simulate timers instead.

---

## 📬 Render Deployment

**Live App:** [https://flash-email.onrender.com](https://flash-email.onrender.com)

* Preview UI: `https://flash-email.onrender.com`
* Flash Boost Page: `https://flash-email.onrender.com/flash-boost?tier=boost`

---

## 👨‍💻 Author

Created by [Ibrahim Khan](https://github.com/IbrahimKhan7208) — Open to feedback and collaboration.