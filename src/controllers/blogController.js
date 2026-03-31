import { recentPosts, allPosts } from "../data/blogPosts.js";

const getAllBlogs = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      recentPosts,
      allPosts,
    },
  });
};

export { getAllBlogs };
