# ShopCompare - Product Price Comparison Platform

A responsive web application for comparing product prices across major e-commerce platforms including Amazon, Flipkart, Myntra, and Meesho.

## Features

- **Multi-Platform Comparison**: Compare prices across Amazon, Flipkart, Myntra, and Meesho
- **Smart Search**: Search for products with real-time filtering
- **Price Analysis**: View best prices, fastest delivery, and highest ratings
- **Mobile Responsive**: Optimized for all screen sizes
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Customer Reviews**: View aggregated reviews from all platforms
- **Intuitive UI**: Clean, organized layout for quick comparison

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: React Hooks + TanStack Query
- **Icons**: Lucide React
- **Theme**: Custom dark/light mode implementation

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/product-comparison-platform.git
cd product-comparison-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or Clone** this repository to your GitHub account

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Push to Main Branch**:
   - Any push to the `main` branch will automatically trigger the deployment
   - The site will be available at: `https://yourusername.github.io/product-comparison-platform/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Static data for demo
│   │   ├── lib/            # Utility libraries
│   │   └── hooks/          # Custom React hooks
├── shared/                 # Shared types and schemas
├── .github/workflows/      # GitHub Actions for deployment
└── public/                 # Static assets

```

## Features Overview

### Search & Filtering
- Real-time product search
- Platform-specific filtering
- Category-based results

### Product Comparison
- Side-by-side price comparison
- Shipping time analysis
- Rating and review aggregation
- Discount calculations

### User Experience
- Mobile-first responsive design
- Fast loading with optimized assets
- Intuitive navigation
- Accessibility features

## Sample Data

The application includes sample data for:
- Smartphones (Samsung Galaxy S24, iPhone 15, OnePlus 12)
- Footwear (Nike Air Max 270)
- Audio (Sony WH-1000XM4)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

For any questions or support, please open an issue in the GitHub repository.