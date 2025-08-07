import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Search products
  app.get("/api/products/search", async (req, res) => {
    try {
      const { q: query, platform } = req.query;
      
      if (!query || typeof query !== "string") {
        return res.status(400).json({ message: "Query parameter is required" });
      }

      const platformParam = platform && typeof platform === "string" ? platform as any : undefined;
      const products = await storage.searchProductsWithListings(query, platformParam);
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to search products" });
    }
  });

  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to get products" });
    }
  });

  // Get product with listings
  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProductWithListings(id);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to get product" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
