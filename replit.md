# Product Price Comparison Platform

## Overview

This is a full-stack web application for comparing product prices across multiple e-commerce platforms (Amazon, Flipkart, Myntra, and Meesho). The system allows users to search for products, view pricing information, compare deals, and read reviews from different platforms in a unified interface. The application provides a comprehensive comparison view showing best prices, fastest delivery options, and highest ratings across all supported platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript, using Vite as the build tool and development server. The frontend follows a component-based architecture with a clean separation of concerns.

**UI Framework**: Built with shadcn/ui components on top of Radix UI primitives, providing a consistent design system. Uses Tailwind CSS for styling with a custom theme configuration supporting both light and dark modes.

**State Management**: React Query (@tanstack/react-query) handles server state management, caching, and API interactions. Local component state is managed with React hooks.

**Routing**: Uses Wouter for client-side routing, providing a lightweight alternative to React Router.

**Component Structure**: 
- Layout components (Header, Footer) provide consistent page structure
- Product components handle display and interaction logic
- UI components from shadcn/ui provide reusable interface elements
- Custom hooks manage cross-cutting concerns like mobile detection and toast notifications

### Backend Architecture

**Server Framework**: Express.js with TypeScript, providing RESTful API endpoints for product search and retrieval.

**Development Setup**: Custom Vite integration for seamless development experience with hot module replacement and error handling.

**Storage Layer**: Now uses static data stored in client/src/data/products.ts for GitHub Pages deployment. Previously implemented in-memory storage solution (MemStorage) for full-stack development.

**API Design**: RESTful endpoints following consistent patterns:
- GET /api/products/search - Search products with optional platform filtering
- GET /api/products - Retrieve all products
- GET /api/products/:id - Get specific product with listings

### Database Schema Design

**Products Table**: Stores core product information including name, description, image, and category.

**Platform Listings Table**: Contains platform-specific data like pricing, availability, shipping options, ratings, and features. Prices are stored in paisa (smallest currency unit) for precision.

**Reviews Table**: Stores customer reviews linked to specific platform listings, including ratings and comments.

**Database Technology**: Configured for PostgreSQL with Drizzle ORM, providing type-safe database operations and schema migrations.

### Data Models

**Product Relationships**: Products have one-to-many relationships with platform listings, and listings have one-to-many relationships with reviews.

**Price Handling**: All monetary values are stored as integers in paisa to avoid floating-point precision issues.

**Rating System**: Ratings use a 50-point scale (allowing half-point ratings) for granular comparison.

**Platform Support**: Supports Amazon, Flipkart, Myntra, and Meesho with platform-specific styling and icons.

### Key Features

**Search and Filtering**: Real-time product search with platform filtering capabilities.

**Price Comparison**: Side-by-side comparison of prices, discounts, and shipping costs across all platforms.

**Smart Recommendations**: Identifies best price, fastest delivery, and highest-rated options for each product.

**Review Aggregation**: Displays reviews from all platforms in a unified interface.

**Responsive Design**: Mobile-first approach with adaptive layouts for different screen sizes.

**Theme Support**: Built-in dark/light mode switching with persistent user preferences.

## External Dependencies

**Database**: PostgreSQL with Neon serverless driver for cloud database connectivity.

**ORM**: Drizzle ORM for type-safe database operations and schema management.

**UI Components**: Radix UI primitives for accessible, unstyled components with shadcn/ui styling layer.

**Styling**: Tailwind CSS for utility-first styling with custom theme configuration.

**State Management**: TanStack React Query for server state management and caching.

**Development Tools**: Vite for build tooling, TypeScript for type safety, and custom Replit integration plugins.

**Form Handling**: React Hook Form with Zod for form validation and type-safe schemas.

**Icons**: Lucide React for consistent iconography across the application.

**Date Handling**: date-fns library for date manipulation and formatting.

**Session Management**: Connect-pg-simple for PostgreSQL-based session storage.