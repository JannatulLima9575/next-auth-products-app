# Next.js 15 + NextAuth Product App

## Project Overview

This project is a simple product management application built using **Next.js 15 (App Router)** and **NextAuth.js** for authentication. It includes public and protected pages, allowing users to view products and, after logging in, add new products.

---

## Features

### Public Pages

* **Landing Page (`/`)**: Includes Navbar, Hero, Product Highlights, and Footer. No authentication required.
* **Products List (`/products`)**: Displays a list of products fetched from a JSON file.
* **Product Details (`/products/[id]`)**: Shows details of a single product.

### Protected Pages

* **Add Product (`/dashboard/add-product`)**: Only accessible to logged-in users. Users can add new products which are saved in the backend (file-based JSON).

### Authentication

* **NextAuth.js** used for authentication.
* Supports **Google login** (credential login can be added if needed).
* Redirects users to `/products` after login.

### Optional Enhancements

* Loading spinner while fetching or submitting data.
* Toast messages on successful product addition.
* Light/Dark theme toggle.

---

## Technologies Used

* **Next.js 15 (App Router)**
* **React**
* **NextAuth.js**
* **Tailwind CSS**
* **React Hot Toast**
* **File-based JSON storage** for products
* ESLint for code linting

---

## Folder Structure

```
next-auth-products-app/
│
├─ app/
│   ├─ api/
│   │   └─ auth/[...nextauth]/route.js
│   │   └─ products/route.js
│   │   └─ products/[id]/route.js
│   ├─ dashboard/add-product/page.jsx
│   ├─ products/page.jsx
│   ├─ products/[id]/page.jsx
│   ├─ login/page.jsx
│   └─ page.jsx
│
├─ components/
│   ├─ Navbar.jsx
│   ├─ ThemeToggle.jsx
│   └─ ClientToaster.jsx
│
├─ lib/
│   └─ products.js
│
├─ data/
│   └─ products.json
│
├─ auth.js
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-auth-products-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with the following:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_super_secret_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

* Browse products on the public `/products` page.
* Click a product for detailed view.
* Login using Google to access `/dashboard/add-product` and add new products.
* Toggle between light/dark themes using the theme button.

---

## Notes

* The project uses file-based JSON for product storage. In production, it is recommended to use a proper database (e.g., MongoDB, PostgreSQL).
* ESLint is configured to maintain code quality.
* The project can be enhanced with more authentication providers, advanced styling, or connecting to a real backend.

---

## License

This project is for learning purposes and can be used freely.