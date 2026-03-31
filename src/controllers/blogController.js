import { recentPosts } from "../data/blogPosts.js";

const getAllRecentBlogs = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      recentPosts,
    },
  });
};

export { getAllRecentBlogs };
