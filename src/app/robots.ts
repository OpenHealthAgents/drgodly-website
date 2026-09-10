import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://drgodly.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/sign-in"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
