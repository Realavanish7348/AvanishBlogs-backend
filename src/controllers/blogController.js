import { recentPosts, allPosts } from "../data/blogPosts.js";

const getAllBlogs = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        recentPosts,
        allPosts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: {
        name: "failed to blogs Api ",
        message: err,
      },
    });
  }
};

const getPosts = (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 2;

    if (page > allPosts.length / limit) {
      return res.status(404).json({
        status: "Page Not Found",
        message: "Error : Page not Found, 404 error ",
      });
    }

    const startIndex = (page - 1) * limit; // -1 reason zero based indexing
    const endIndex = page * limit;

    const paginatedPosts = allPosts.slice(startIndex, endIndex);

    return res.status(200).json({
      status: "success",
      results: paginatedPosts.length,
      total: allPosts.length,
      page: page,
      limit: limit,
      data: {
        allPosts: paginatedPosts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: {
        name: "failed to blogs Api",
        errorName: err.name,
        message: err,
      },
    });
  }
};
export { getAllBlogs, getPosts };
