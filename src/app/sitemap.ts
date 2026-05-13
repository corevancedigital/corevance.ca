import type { MetadataRoute } from "next";

const BASE = "https://corevance.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
{ url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/frp-installation-toronto`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/frp-installation-mississauga`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/frp-installation-brampton`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/frp-installation-north-york`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/frp-installation-scarborough`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/frp-panels-vaughan`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/frp-panels-etobicoke`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
