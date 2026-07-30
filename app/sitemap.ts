import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
    },
    {
      url: 'https://example.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://example.com/admin',
      lastModified: new Date(),
    },
  ];
}
