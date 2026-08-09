import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://nayeesubah.github.io");
  const posts = (await getCollection("blog"))
    .filter((p) => p.data.published)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "Nayee Subah Foundation Blog",
    description:
      "News, impact stories, and updates from Nayee Subah Foundation's education, healthcare, and community development programs in rural India.",
    site: site.href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags ?? [])],
    })),
    customData: `<language>en-us</language>`,
  });
}
