import { type Product, type PlatformListing, type Review, type InsertProduct, type InsertPlatformListing, type InsertReview, type ProductWithListings, type Platform } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  searchProducts(query: string): Promise<ProductWithListings[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Platform Listings
  getPlatformListings(productId: string): Promise<PlatformListing[]>;
  getPlatformListing(id: string): Promise<PlatformListing | undefined>;
  createPlatformListing(listing: InsertPlatformListing): Promise<PlatformListing>;

  // Reviews
  getReviews(platformListingId: string): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  // Combined queries
  getProductWithListings(productId: string): Promise<ProductWithListings | undefined>;
  searchProductsWithListings(query: string, platform?: Platform): Promise<ProductWithListings[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private platformListings: Map<string, PlatformListing>;
  private reviews: Map<string, Review>;

  constructor() {
    this.products = new Map();
    this.platformListings = new Map();
    this.reviews = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Samsung Galaxy S24
    const samsungId = randomUUID();
    const samsungProduct: Product = {
      id: samsungId,
      name: "Samsung Galaxy S24 5G",
      description: "128GB, Phantom Black",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "smartphone"
    };
    this.products.set(samsungId, samsungProduct);

    // Apple iPhone 15
    const iphoneId = randomUUID();
    const iphoneProduct: Product = {
      id: iphoneId,
      name: "Apple iPhone 15",
      description: "128GB, Blue",
      image: "https://pixabay.com/get/g952fbfa0a2958211642f7d157b751908db350c763002c41fc37acf7314cfaeba4f34f1bf4ac5d87a84e1c6e4e0595faac4c97485644e9ed33e350c5b2bccf4ff_1280.jpg",
      category: "smartphone"
    };
    this.products.set(iphoneId, iphoneProduct);

    // Platform listings for Samsung
    const samsungAmazonId = randomUUID();
    const samsungAmazonListing: PlatformListing = {
      id: samsungAmazonId,
      productId: samsungId,
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
      url: "https://amazon.in/samsung-galaxy-s24"
    };
    this.platformListings.set(samsungAmazonId, samsungAmazonListing);

    const samsungFlipkartId = randomUUID();
    const samsungFlipkartListing: PlatformListing = {
      id: samsungFlipkartId,
      productId: samsungId,
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
      url: "https://flipkart.com/samsung-galaxy-s24"
    };
    this.platformListings.set(samsungFlipkartId, samsungFlipkartListing);

    const samsungMeeshoId = randomUUID();
    const samsungMeeshoListing: PlatformListing = {
      id: samsungMeeshoId,
      productId: samsungId,
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
      url: "https://meesho.com/samsung-galaxy-s24"
    };
    this.platformListings.set(samsungMeeshoId, samsungMeeshoListing);

    // Platform listings for iPhone
    const iphoneAmazonId = randomUUID();
    const iphoneAmazonListing: PlatformListing = {
      id: iphoneAmazonId,
      productId: iphoneId,
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
      url: "https://amazon.in/iphone-15"
    };
    this.platformListings.set(iphoneAmazonId, iphoneAmazonListing);

    const iphoneFlipkartId = randomUUID();
    const iphoneFlipkartListing: PlatformListing = {
      id: iphoneFlipkartId,
      productId: iphoneId,
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
      url: "https://flipkart.com/iphone-15"
    };
    this.platformListings.set(iphoneFlipkartId, iphoneFlipkartListing);

    // Sample reviews
    const samsungAmazonReviewId = randomUUID();
    const samsungAmazonReview: Review = {
      id: samsungAmazonReviewId,
      platformListingId: samsungAmazonId,
      customerName: "Amazon Customer",
      rating: 50, // 5 * 10
      comment: "Excellent phone with great camera quality. Fast delivery.",
      platform: "amazon"
    };
    this.reviews.set(samsungAmazonReviewId, samsungAmazonReview);

    const samsungFlipkartReviewId = randomUUID();
    const samsungFlipkartReview: Review = {
      id: samsungFlipkartReviewId,
      platformListingId: samsungFlipkartId,
      customerName: "Flipkart User",
      rating: 40, // 4 * 10
      comment: "Good value for money. Battery life is impressive.",
      platform: "flipkart"
    };
    this.reviews.set(samsungFlipkartReviewId, samsungFlipkartReview);
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async searchProducts(query: string): Promise<ProductWithListings[]> {
    const products = Array.from(this.products.values()).filter(
      product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );

    const productsWithListings: ProductWithListings[] = [];
    for (const product of products) {
      const listings = await this.getPlatformListings(product.id);
      const listingsWithReviews = [];
      
      for (const listing of listings) {
        const reviews = await this.getReviews(listing.id);
        listingsWithReviews.push({ ...listing, reviews });
      }

      productsWithListings.push({
        ...product,
        listings: listingsWithReviews
      });
    }

    return productsWithListings;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getPlatformListings(productId: string): Promise<PlatformListing[]> {
    return Array.from(this.platformListings.values()).filter(
      listing => listing.productId === productId
    );
  }

  async getPlatformListing(id: string): Promise<PlatformListing | undefined> {
    return this.platformListings.get(id);
  }

  async createPlatformListing(insertListing: InsertPlatformListing): Promise<PlatformListing> {
    const id = randomUUID();
    const listing: PlatformListing = { ...insertListing, id };
    this.platformListings.set(id, listing);
    return listing;
  }

  async getReviews(platformListingId: string): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(
      review => review.platformListingId === platformListingId
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = { ...insertReview, id };
    this.reviews.set(id, review);
    return review;
  }

  async getProductWithListings(productId: string): Promise<ProductWithListings | undefined> {
    const product = await this.getProduct(productId);
    if (!product) return undefined;

    const listings = await this.getPlatformListings(productId);
    const listingsWithReviews = [];
    
    for (const listing of listings) {
      const reviews = await this.getReviews(listing.id);
      listingsWithReviews.push({ ...listing, reviews });
    }

    return {
      ...product,
      listings: listingsWithReviews
    };
  }

  async searchProductsWithListings(query: string, platform?: Platform): Promise<ProductWithListings[]> {
    const products = await this.searchProducts(query);
    
    if (!platform) return products;

    return products.map(product => ({
      ...product,
      listings: product.listings.filter(listing => listing.platform === platform)
    })).filter(product => product.listings.length > 0);
  }
}

export const storage = new MemStorage();
