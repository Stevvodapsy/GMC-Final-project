import Report from "../../database/Reports.js";

// Get analytics data
export const getAnalytics = async (req, res) => {
  try {
    // Reports by Area
    const reports = await Report.find();
    const reportsByArea = reports.reduce((acc, report) => {
      acc[report.location] = (acc[report.location] || 0) + 1;
      return acc;
    }, {});
    const reportsByAreaArr = Object.entries(reportsByArea).map(
      ([name, reports]) => ({ name, reports })
    );

    // Recycling Activity (placeholder, as no recycling data in schema)
    const recyclingActivity = [
      { name: "Team A", points: 120 },
      { name: "Team B", points: 90 },
      { name: "Team C", points: 60 },
    ];

    res
      .status(200)
      .json({ reportsByArea: reportsByAreaArr, recyclingActivity });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch analytics", error });
  }
};
