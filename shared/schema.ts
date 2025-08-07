import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const platformListings = pgTable("platform_listings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  productId: varchar("product_id").notNull().references(() => products.id),
  platform: text("platform").notNull(), // amazon, flipkart, myntra, meesho
  price: integer("price").notNull(), // in paisa
  originalPrice: integer("original_price"), // in paisa
  discount: integer("discount"), // percentage
  available: boolean("available").notNull().default(true),
  shipping: text("shipping").notNull(), // "today", "tomorrow", "3-5 days"
  shippingCost: integer("shipping_cost").default(0), // in paisa
  rating: integer("rating").notNull(), // out of 50 (4.5 * 10)
  reviewCount: integer("review_count").notNull(),
  features: json("features").$type<string[]>().default([]),
  url: text("url").notNull(),
});

export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  platformListingId: varchar("platform_listing_id").notNull().references(() => platformListings.id),
  customerName: text("customer_name").notNull(),
  rating: integer("rating").notNull(), // out of 50
  comment: text("comment").notNull(),
  platform: text("platform").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertPlatformListingSchema = createInsertSchema(platformListings).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type PlatformListing = typeof platformListings.$inferSelect;
export type Review = typeof reviews.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertPlatformListing = z.infer<typeof insertPlatformListingSchema>;
export type InsertReview = z.infer<typeof insertReviewSchema>;

export type ProductWithListings = Product & {
  listings: (PlatformListing & { reviews: Review[] })[];
};

export type Platform = "amazon" | "flipkart" | "myntra" | "meesho";
