import fs from "fs";
import matter from "gray-matter";

const getPostsByTag = (tag: string) => {
  const postsDirectory = "posts"; // Directory where your markdown post files are stored
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .map((fileName) => {
      const fileContents = fs.readFileSync(
        `${postsDirectory}/${fileName}`,
        "utf-8"
      );
      const { data, content } = matter(fileContents);

      // Check if the post has the specified tag
      if (data.tags && data.tags.includes(tag)) {
        return {
          slug: fileName.replace(".md", ""),
          title: data.title,
          image: data.image,
          category: data.category,
          date: data.date,
          author: data.author,
          content, // Include the content of the post
        };
      }
      return null;
    })
    .filter(Boolean);

  return posts;
};

export { getPostsByTag };
