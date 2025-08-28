import Report from "../../database/Reports.js";

// Get all reports
export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("user", "name");
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reports", error });
  }
};
