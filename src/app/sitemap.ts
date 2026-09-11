import type { MetadataRoute } from "next";
import { siteConfig, pagePaths } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/buildMetadata";
import type { Locale } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const path of pagePaths) {
      entries.push({
        url: absoluteUrl(locale as Locale, path),
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            siteConfig.locales.map((loc) => [
              loc,
              absoluteUrl(loc as Locale, path),
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
