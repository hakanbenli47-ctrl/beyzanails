import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.beyzanails.com.tr',
      lastModified: new Date(),
    },
  ]
}