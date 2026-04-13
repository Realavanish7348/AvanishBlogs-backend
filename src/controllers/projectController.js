import { projectPosts } from "../data/projectPosts.js";

const getPojectBlogs = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        projectPost,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

export { getPojectBlogs };
