export const posts = [
  {
    slug: "belajar-nextjs",
    title: "Belajar Next.js dari Nol",
    content: "Next.js adalah framework React yang powerful untuk web modern.",
  },
  {
    slug: "typescript-dasar",
    title: "Dasar TypeScript",
    content: "TypeScript membantu kita menulis JavaScript yang lebih aman.",
  },
];

export async function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
