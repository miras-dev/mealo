import { siteConfig } from "@/lib/seo";

export default function sitemap() {
  const routes = [
    "",
    "/about-us",
    "/plans",
    "/blogs",
    "/meals",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
