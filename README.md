Full-stack grocery delivery app with authentication, payments, and admin dashboard with add or remove products control and orders data.

About the Project:

Green-Cart is a MERN-stack grocery delivery platform that allows users to browse products,
add them to a cart, place orders with secure payment, and manage purchases through an intuitive dashboard.

The Seller which is only one at the time, can add the product and can toggle the avalability of the product.
There is also a section where he can see the orders placed by the users.


Tech Stack:

Backend: Node.js, Express.js, MongoDB, Mongoose
Frontend: React.js, Tailwind CSS 
Tools & Services: JWT, Stripe API, Postman, mogoDB atlas

Features:

User authentication with JWT (access + refresh tokens)
Role-based access (Admin / User)
Product catalog with search, filter, and pagination
Secure checkout with Stripe / COD
Order management system (view status, cancel, track)
Admin dashboard for product and order management
API documentation with Postman


Getting Started
Prerequisites
Node.js >= 18

npm or yarn

MongoDB (local or Atlas)

Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/RizwanAli2001/Green-Cart.git

# Install dependencies
cd Green-Cart
npm install

# Add environment variables
Backend ENV:

#Admin Credientals
SELLER_EMAIL="admin@exapmle.com"
SELLER_PASSWORD="rizwan123"

#cloudinary 
CLOUDINARY_CLOUD_NAME = 'dnsemfxbz'
CLOUDINARY_API_KEY = '276498547978911'
CLOUDINARY_API_SECRET = 'uXVu5vQrOh07OlXwiuQevxZ8Ocg'

# Stripe Setup
STRIPE_PUBLISHABLE_KEY = 'pk_test_51RsdrfCnhyEd4EN5prgQ3ZImqR7RrFuGpZEBUgw9k5CLWq
DbBL9iexEIItoLQ1XxXcGu8llqty6pTguzoQsVI0MC00WzBs4d6a'
STRIPE_SECRET_KEY = 'sk_test_51RsdrfCnhyEd4EN5AK0ofKEGcHCDAJ7qNFByJjXtPshkq72fh
DZwfzYDPbNemQmH3zNfF1C6ITJAQn9YwWt0p8h900TKruS6YE'


Frontend ENV:

VITE_CURRENCY = '$'
VITE_BACKEND_URL = http://localhost:4000

# Fill in values for MongoDB URI, JWT_SECRET, Stripe keys, etc.

# Run backend
npm run server

# Run frontend
npm run client

Screen Shots:

[Home Page] "https://github.com/user-attachments/assets/a68a05da-b55f-47b5-a2d8-55f7844a6e58" 
[All Products]"https://github.com/user-attachments/assets/8c000ebc-55e9-40ca-9302-e0b371bf755b" 
[Cart] "https://github.com/user-attachments/assets/6531595a-d450-484a-a399-2d18df19948e" 
[Login] "https://github.com/user-attachments/assets/1214d750-7f5b-4c6b-9d54-f5052883ebb8" 
