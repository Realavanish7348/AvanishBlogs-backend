import { BioData } from "../../../AvanishBlogs-frontend/src/data/aboutdata.js";

const getBioData = (req, res) => {
  try {
    // Force an error for testing
    // throw new Error("Test error: Database connection failed");

    // Or: access undefined property
    // const test = BioData.nonexistent.property;

    // Or: parse invalid JSON
    // JSON.parse("invalid json");

    res.status(200).json({
      status: "success",
      results: Object.keys(BioData).length,
      bioData: BioData,
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

export { getBioData };
