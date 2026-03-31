import { projectPosts } from "../data/projectPosts.js";

const getPojectBlogs = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      projectPosts,
    },
  });
};

export { getPojectBlogs };
