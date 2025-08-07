import { ProductWithListings } from "@shared/schema";

export const staticProducts: ProductWithListings[] = [
  {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24 5G",
    description: "128GB, Phantom Black",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "smartphone",
    listings: [
      {
        id: "samsung-amazon",
        productId: "samsung-galaxy-s24",
        platform: "amazon",
        price: 6599900, // ₹65,999
        originalPrice: 7999900, // ₹79,999
        discount: 18,
        available: true,
        shipping: "tomorrow",
        shippingCost: 0,
        rating: 43, // 4.3 * 10
        reviewCount: 2547,
        features: ["Prime eligible", "1-year warranty"],
        url: "https://amazon.in/samsung-galaxy-s24",
        reviews: [
          {
            id: "samsung-amazon-review-1",
            platformListingId: "samsung-amazon",
            customerName: "Amazon Customer",
            rating: 50,
            comment: "Excellent phone with great camera quality. Fast delivery.",
            platform: "amazon"
          }
        ]
      },
      {
        id: "samsung-flipkart",
        productId: "samsung-galaxy-s24",
        platform: "flipkart",
        price: 6499900, // ₹64,999
        originalPrice: 7999900, // ₹79,999
        discount: 19,
        available: true,
        shipping: "today",
        shippingCost: 0,
        rating: 44, // 4.4 * 10
        reviewCount: 1892,
        features: ["Plus member benefits", "7-day return"],
        url: "https://flipkart.com/samsung-galaxy-s24",
        reviews: [
          {
            id: "samsung-flipkart-review-1",
            platformListingId: "samsung-flipkart",
            customerName: "Flipkart User",
            rating: 40,
            comment: "Good value for money. Battery life is impressive.",
            platform: "flipkart"
          }
        ]
      },
      {
        id: "samsung-meesho",
        productId: "samsung-galaxy-s24",
        platform: "meesho",
        price: 6399900, // ₹63,999
        originalPrice: 7999900, // ₹79,999
        discount: 20,
        available: true,
        shipping: "3-5 days",
        shippingCost: 0,
        rating: 41, // 4.1 * 10
        reviewCount: 856,
        features: ["Cash on delivery", "Easy returns"],
        url: "https://meesho.com/samsung-galaxy-s24",
        reviews: []
      }
    ]
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    description: "128GB, Blue",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "smartphone",
    listings: [
      {
        id: "iphone-amazon",
        productId: "iphone-15",
        platform: "amazon",
        price: 7990000, // ₹79,900
        originalPrice: 7990000, // ₹79,900
        discount: 0,
        available: true,
        shipping: "tomorrow",
        shippingCost: 0,
        rating: 45, // 4.5 * 10
        reviewCount: 3421,
        features: ["Prime eligible", "Apple warranty"],
        url: "https://amazon.in/iphone-15",
        reviews: []
      },
      {
        id: "iphone-flipkart",
        productId: "iphone-15",
        platform: "flipkart",
        price: 7899900, // ₹78,999
        originalPrice: 7990000, // ₹79,900
        discount: 1,
        available: true,
        shipping: "today",
        shippingCost: 0,
        rating: 46, // 4.6 * 10
        reviewCount: 2156,
        features: ["Exchange offer", "7-day return"],
        url: "https://flipkart.com/iphone-15",
        reviews: []
      }
    ]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    description: "256GB, Flowy Emerald",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "smartphone",
    listings: [
      {
        id: "oneplus-amazon",
        productId: "oneplus-12",
        platform: "amazon",
        price: 6999900, // ₹69,999
        originalPrice: 7499900, // ₹74,999
        discount: 7,
        available: true,
        shipping: "tomorrow",
        shippingCost: 0,
        rating: 44, // 4.4 * 10
        reviewCount: 1876,
        features: ["Prime eligible", "Fast charging"],
        url: "https://amazon.in/oneplus-12",
        reviews: []
      },
      {
        id: "oneplus-flipkart",
        productId: "oneplus-12",
        platform: "flipkart",
        price: 6899900, // ₹68,999
        originalPrice: 7499900, // ₹74,999
        discount: 8,
        available: true,
        shipping: "today",
        shippingCost: 0,
        rating: 45, // 4.5 * 10
        reviewCount: 2134,
        features: ["Exchange offer", "No cost EMI"],
        url: "https://flipkart.com/oneplus-12",
        reviews: []
      },
      {
        id: "oneplus-myntra",
        productId: "oneplus-12",
        platform: "myntra",
        price: 7099900, // ₹70,999
        originalPrice: 7499900, // ₹74,999
        discount: 5,
        available: true,
        shipping: "3-5 days",
        shippingCost: 0,
        rating: 43, // 4.3 * 10
        reviewCount: 987,
        features: ["Style points", "Easy returns"],
        url: "https://myntra.com/oneplus-12",
        reviews: []
      }
    ]
  },
  {
    id: "nike-air-max",
    name: "Nike Air Max 270",
    description: "Men's Running Shoes, Black/White",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "footwear",
    listings: [
      {
        id: "nike-amazon",
        productId: "nike-air-max",
        platform: "amazon",
        price: 1199900, // ₹11,999
        originalPrice: 1399900, // ₹13,999
        discount: 14,
        available: true,
        shipping: "tomorrow",
        shippingCost: 0,
        rating: 42, // 4.2 * 10
        reviewCount: 3456,
        features: ["Prime eligible", "Authentic guarantee"],
        url: "https://amazon.in/nike-air-max-270",
        reviews: []
      },
      {
        id: "nike-flipkart",
        productId: "nike-air-max",
        platform: "flipkart",
        price: 1179900, // ₹11,799
        originalPrice: 1399900, // ₹13,999
        discount: 16,
        available: true,
        shipping: "today",
        shippingCost: 0,
        rating: 43, // 4.3 * 10
        reviewCount: 2987,
        features: ["Flipkart assured", "7-day return"],
        url: "https://flipkart.com/nike-air-max-270",
        reviews: []
      },
      {
        id: "nike-myntra",
        productId: "nike-air-max",
        platform: "myntra",
        price: 1149900, // ₹11,499
        originalPrice: 1399900, // ₹13,999
        discount: 18,
        available: true,
        shipping: "2-3 days",
        shippingCost: 0,
        rating: 44, // 4.4 * 10
        reviewCount: 4567,
        features: ["Try & buy", "Easy returns"],
        url: "https://myntra.com/nike-air-max-270",
        reviews: []
      }
    ]
  },
  {
    id: "sony-headphones",
    name: "Sony WH-1000XM4",
    description: "Wireless Noise Canceling Headphones, Black",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "audio",
    listings: [
      {
        id: "sony-amazon",
        productId: "sony-headphones",
        platform: "amazon",
        price: 2499900, // ₹24,999
        originalPrice: 2999900, // ₹29,999
        discount: 17,
        available: true,
        shipping: "tomorrow",
        shippingCost: 0,
        rating: 46, // 4.6 * 10
        reviewCount: 5432,
        features: ["Prime eligible", "30-day return"],
        url: "https://amazon.in/sony-wh1000xm4",
        reviews: []
      },
      {
        id: "sony-flipkart",
        productId: "sony-headphones",
        platform: "flipkart",
        price: 2449900, // ₹24,499
        originalPrice: 2999900, // ₹29,999
        discount: 18,
        available: true,
        shipping: "today",
        shippingCost: 0,
        rating: 45, // 4.5 * 10
        reviewCount: 3876,
        features: ["Flipkart assured", "Exchange offer"],
        url: "https://flipkart.com/sony-wh1000xm4",
        reviews: []
      },
      {
        id: "sony-meesho",
        productId: "sony-headphones",
        platform: "meesho",
        price: 2399900, // ₹23,999
        originalPrice: 2999900, // ₹29,999
        discount: 20,
        available: true,
        shipping: "3-5 days",
        shippingCost: 0,
        rating: 44, // 4.4 * 10
        reviewCount: 1234,
        features: ["Cash on delivery", "Easy returns"],
        url: "https://meesho.com/sony-wh1000xm4",
        reviews: []
      }
    ]
  }
];

export function searchProducts(query: string, platform?: string): ProductWithListings[] {
  let filteredProducts = staticProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  if (platform && platform !== "all") {
    filteredProducts = filteredProducts.map(product => ({
      ...product,
      listings: product.listings.filter(listing => listing.platform === platform)
    })).filter(product => product.listings.length > 0);
  }

  return filteredProducts;
}