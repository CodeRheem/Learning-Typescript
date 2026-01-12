// Create a UserRole enum with: Admin, Moderator, User, Guest

// Create a Permission enum with: Read, Write, Delete, Manage

// Create a User interface:
//   - id (string)
//   - username (string)
//   - role (UserRole enum)
//   - permissions (array of Permission enum)

// Create 3 users with different roles and permissions

// Create a function canPerformAction(user, requiredPermission) that:
//   - Takes a User and a Permission
//   - Returns true if user has that permission
//   - Returns false otherwise


enum UserRole {
    Admin = 'ADMIN',
    Moderator = 'MODERATOR',
    User = 'USER',
    Guest = 'GUEST',
}

enum Permission {
    Read = "READ",
    Write = "WRITE",
    Delete = "DELETE",
    Manage = "MANAGE",
}

interface User {
    id: string;
    username: string;
    role: UserRole;
    permissions: Permission[];  // Array of permissions
}

const user1: User = {
    id: "no1",
    username: 'CodeRheem',
    role: UserRole.User,
    permissions: [Permission.Read, Permission.Write]  // Multiple permissions
}

const user2: User = {
    id: "no2",
    username: 'AdminUser',
    role: UserRole.Admin,
    permissions: [Permission.Read, Permission.Write, Permission.Delete, Permission.Manage]
}

const user3: User = {
    id: "no3",
    username: 'GuestUser',
    role: UserRole.Guest,
    permissions: [Permission.Read]  // Guests can only read
}

function canPerformAction(user: User, requiredPermission: Permission): boolean {
    // Check if the required permission exists in the user's permissions array
    return user.permissions.includes(requiredPermission);
}

// Testing
console.log(canPerformAction(user1, Permission.Write));   // true
console.log(canPerformAction(user1, Permission.Delete));  // false - user1 doesn't have Delete
console.log(canPerformAction(user2, Permission.Manage));  // true - admin has all

// Create an OrderStatus enum: Draft, Confirmed, Shipped, Delivered, Cancelled

// Create a ShippingMethod enum: Standard, Express, Overnight

// Create an Order interface:
//   - orderId (string)
//   - customerName (string)
//   - status (OrderStatus)
//   - shippingMethod (ShippingMethod)
//   - totalAmount (number)

// Create a function getOrderMessage(order) that:
//   - Uses a switch statement with the order status
//   - Returns appropriate messages for each status
//   - Include shipping method in the message

enum OrderStatus {
    Draft = "DRAFT",
    Confirmed = "CONFIRMED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
}

enum ShippingMethod {
    Standard = "STANDARD", 
    Express = "EXPRESS",
    Overnight = "OVERNIGHT",
} 

interface Order {
    orderId: string;
    customerName: string;
    status: OrderStatus;
    shippingMethod: ShippingMethod;
    totalAmount: number;
}

function getOrderMessage(order: Order): string {
    let message: string; 
    switch(order.status) {
        case OrderStatus.Draft:
            message = `Order ${order.orderId} is in draft status.`;
            break;
        case OrderStatus.Confirmed:
            message = `Order ${order.orderId} has been confirmed and will be shipped via ${order.shippingMethod}.`;
            break;
        case OrderStatus.Shipped:
            message = `Order ${order.orderId} has been shipped using ${order.shippingMethod}.`;
            break;
        case OrderStatus.Delivered:
            message = `Order ${order.orderId} has been delivered. Enjoy your purchase!`;
            break;
        case OrderStatus.Cancelled:
            message = `Order ${order.orderId} has been cancelled.`;
            break;
        default:
            message = `Unknown status for order ${order.orderId}.`;
    }
    return message;
}


