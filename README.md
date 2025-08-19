# 🏥 LifeCare Backend (Hospital & Medical System)

This is the backend for **LifeCare Hospital** & **Suman Medihub**.  
It provides REST APIs for patients, doctors, pharmacy, billing, and admin management.

---

## 🚀 Deployment (Free Hosting on Render)

Click below to deploy directly to Render 👇

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Manual Steps
1. Fork or upload this repo to your GitHub.
2. Go to [https://render.com](https://render.com) → Create a **Web Service**.
3. Select this repo, set environment variables:
   ```env
   PORT=4000
   JWT_SECRET=supersecretkey
   DB_PATH=./database.sqlite
   ```
4. Click **Deploy** → Backend live at:
   ```
   https://your-backend.onrender.com
   ```

---

## 🔑 Demo Accounts
- **Admin**: `admin@lifecare.test / admin123`
- **Doctor**: `dr@lifecare.test / doctor123`
- **Pharmacist**: `pharm@medihub.test / pharm123`
- **Patient**: `patient@demo.test / patient123`
