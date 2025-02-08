import { PRODUCTS } from "./furniture/PRODUCTS";


export default async function sitemap() {
  const now = new Date();

  const productEntries = PRODUCTS.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`,
    lastModified: now,
  }));

  

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/furniture`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/iorder`,
      lastModified: now,
    },
    ...productEntries,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tables`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/chairs`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/shelfs`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/benchs`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/beds`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cabinets`,
      lastModified: now,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sofas`,
      lastModified: now,
    },
  ];
}
