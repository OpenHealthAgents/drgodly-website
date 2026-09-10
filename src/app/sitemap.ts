import { MetadataRoute } from "next";
import { RESOURCE_ARTICLES } from "@/data/resourceArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drgodly.com";
  const now = new Date();

  // Core platform and marketing pages
  const staticRoutes = [
    "",
    "/patients",
    "/doctors",
    "/how-it-works",
    "/platform",
    "/platform/ai-intake",
    "/platform/pre-visit-intelligence",
    "/platform/telemedicine",
    "/platform/clinical-decision-support",
    "/platform/soap-notes",
    "/platform/emr",
    "/platform/emr-search",
    "/platform/health-history",
    "/resources",
    "/about",
    "/security",
    "/privacy",
    "/faq",
    "/contact",
    "/pricing",
    "/get-started",
    "/sign-in",
    "/organizations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === "" || route === "/resources" ? "daily" : "weekly") as
      | "daily"
      | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/platform") ? 0.9 : 0.8,
  }));

  // Dynamic Resource Articles
  const articleRoutes = RESOURCE_ARTICLES.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
