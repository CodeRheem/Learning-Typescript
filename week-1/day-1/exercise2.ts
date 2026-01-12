// Create an interface for a Product with:
// - id (number)
// - name (string)
// - price (number)
// - inStock (boolean)
// - category (string)
// - description (optional string)

// Create 3 different products using your interface

// Create a function displayProduct(product) that:
// - Takes a Product as parameter
// - Returns a formatted string with all product info
// - Handles the optional description properly

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    category: string;
    description?: string;
}

const product1: Product = {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    inStock: true,
    category: "Electronics",
    description: "A high-precision wireless mouse."
};

const product2: Product = {
    id: 2,
    name: "Water Bottle",
    price: 15.49,
    inStock: false,
    category: "Accessories",
    description: "A stainless steel water bottle."
};

const product3: Product = {
    id: 3,
    name: "Notebook",
    price: 5.99,
    inStock: true,
    category: "Stationery",
    description: "A ruled notebook for daily notes."
};

function displayProduct(product: Product): string {
    let productInfo = `Product ID: ${product.id}\n` +
                      `Name: ${product.name}\n` +
                      `Price: $${product.price.toFixed(2)}\n` +
                      `In Stock: ${product.inStock ? "Yes" : "No"}\n` +
                      `Category: ${product.category}\n`;
    if (product.description) {
        productInfo += `Description: ${product.description}\n`;
    }
    return productInfo;
}



// Create interfaces for:

// 1. SocialMedia interface:
//    - platform (string)
//    - username (string)
//    - followers (number)

// 2. UserProfile interface:
//    - readonly userId (string)
//    - firstName (string)
//    - lastName (string)
//    - age (number)
//    - email (string)
//    - socialMedia (array of SocialMedia)
//    - bio (optional string)

// Create 2 user profiles with at least 2 social media accounts each

// Create a function getFullProfile(user) that:
//    - Takes a UserProfile
//    - Returns a summary string including social media info

interface SocialMedia {
    platform: string;
    userName: string;
    followers: number;
}


interface UserProfile {
    readonly userId: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    media: SocialMedia[];
    bio?: string;
}

const profile1: UserProfile = {
  userId: 'user1',
  firstName: 'Ibraheem',
  lastName: 'nnecuncr',
  age: 23,
  email: 'dcufurencjsndcu@8448ngmail.com',
  media: [
    {
      platform: 'Facebook',
      userName: 'cuncecn',
      followers: 23444
    },
    {
      platform: 'Twitter',
      userName: 'ibrah_codes',
      followers: 1200
    }
  ]
};


const profile2: UserProfile = {
    userId:'user2', 
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'vxwegxdyebwhbxdqh@hsnxwne',
    media: [
    {
      platform: 'Facebook',
      userName: 'cuncecn',
      followers: 23444
    },
    {
      platform: 'Twitter',
      userName: 'ibrah_codes',
      followers: 1200
    }
  ],
    bio: 'Just a regular guy.'      
}

function getFullProfile(user: UserProfile): string {
    let profileSummary = `User ID: ${user.userId}\n` +
                         `Name: ${user.firstName} ${user.lastName}\n` +
                         `Age: ${user.age}\n` +
                         `Email: ${user.email}\n` +
                         `Social Media Accounts:\n`;
    user.media.forEach((account) => {
        profileSummary += `  - Platform: ${account.platform}, Username: ${account.userName}, Followers: ${account.followers}\n`;
    });
    if (user.bio) {
        profileSummary += `Bio: ${user.bio}\n`;
    }   
    return profileSummary;
}



// Create type aliases for:
// 1. UserRole - can be "admin", "user", or "guest"
// 2. PaymentMethod - can be "credit_card", "debit_card", "paypal", or "crypto"

// Create an Order interface:
//    - orderId (readonly string)
//    - userId (string)
//    - amount (number)
//    - paymentMethod (use your PaymentMethod type)
//    - status (can be "pending", "completed", or "cancelled")

// Create a function processOrder(order, userRole) that:
//    - Takes an Order and a UserRole
//    - Returns a string message based on the order status and user role
//    - Example: "Admin processing order ORD123 - Status: completed"

type UserRole = "admin" | "user" | "guest";

type PaymentMethod = "credit_card" | "debit_card" | "paypal" | "crypto";

interface Order {
   readonly orderId: string;
   userId: string;
   amount: number;
   paymentMethod: PaymentMethod;
   status: "pending" | "completed" | "cancelled";
}

function processOrder(order: Order, userRole: UserRole): string {
    return `${userRole.charAt(0).toUpperCase() + userRole.slice(1)} processing order ${order.orderId} - Status: ${order.status}`;
}

console.log(processOrder({orderId: "ORD123", userId: "user1", amount: 150.00, paymentMethod: "credit_card", status: "completed"}, "admin"));