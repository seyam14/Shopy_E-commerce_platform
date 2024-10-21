# Shopy - E-commerce Platform

**Shopy** is a simple e-commerce platform built with React, where users can browse and buy products. The platform uses **local storage** to manage the cart, ensuring persistence of the cart items even after refreshing the page.

## Features

- Product listing page with multiple items.
- Add to cart functionality using local storage.
- Add search and filter functionality for products.
- Cart persistence across browser sessions.
- Dynamic product quantity and price calculation in the cart.
- Payment form to Order
- Responsive design for a seamless experience across devices.

## Tech Stack

- **Frontend**: React (useState, useEffect, React Router)
- **Styling**: Tailwind CSS (optional, or you can replace it with your preferred CSS framework)
- **Data Persistence**: Local storage for cart management
- **Authentication (Future)**: Firebase for user authentication

## Installation

1. Clone the repository:

   ```bash
   git clone .....
   or Download 
   cd shopy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```
## Usage

1. **Browse Products**: On the homepage, users can view all available products.
2. **Add to Cart**: Click on the "Add to Cart" button for any product, and it will be added to the cart.
3. **View Cart**: Navigate to the cart page to view selected products, adjust quantities, and see the total price.
4. **Checkout**: You can integrate a payment system or continue expanding the platform.

## Future Enhancements

- Firebase Authentication for user login, registration, and session management.
- Payment Gateway Integration for secure transactions.
- Implement a backend for order management ( Node.js ,Express.js and MongoDB).
- Dynamic admin Management and monitoring everything
- Integrate payment processing using Stripe  API.

