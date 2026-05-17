import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";

const BASE = "https://corevance.ca";

const BLOG_SLUGS = [
  "frp-vs-trusscore-pvc-canadian-installer",
  "class-c-frp-ontario-building-code",
  "frp-panels-gta-car-washes",
  "frp-installation-mistakes-gta-kitchens",
  "frp-panels-schools-daycares-ontario",
  "how-to-clean-frp-panels-sop",
  "frp-panels-healthcare-facilities-ontario",
  "cfia-frp-installation-requirements",
  "how-to-install-frp-panels",
  "class-c-fire-rating-explained",
  "frp-vs-tile-commercial-kitchen",
  "what-is-frp-wall-panel",
  "frp-panel-cost-toronto",
];

const VERTICAL_SLUGS = [
  "frp-for-restaurants",
  "frp-for-food-processing",
  "frp-for-car-washes",
  "frp-for-healthcare",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/areas-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
  const verticals: MetadataRoute.Sitemap = VERTICAL_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const cities: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: slug === "frp-installation-toronto" ? 0.85 : 0.8,
  }));
  const posts: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...top, ...verticals, ...cities, ...posts];
}
