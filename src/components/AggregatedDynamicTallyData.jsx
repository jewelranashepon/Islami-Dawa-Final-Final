// Aggregate data for multiple users based on the selected emails
export const aggregateMultipleUsersData = (userEmails, data) => {
  let aggregatedData = {};

  // Loop over the selected user emails
  userEmails.forEach((email) => {
    const userData = data[email];
    if (!userData) {
      console.warn(`No data found for user with email: ${email}`);
      return;
    }

    // Loop over each date and aggregate the metrics
    Object.keys(userData).forEach((date) => {
      const dailyData = userData[date];

      // Loop through the keys (metrics) and aggregate them
      Object.keys(dailyData).forEach((metric) => {
        const value = parseInt(dailyData[metric], 10);

        // If the metric is not in the aggregated data, initialize it with 0
        if (!aggregatedData[metric]) {
          aggregatedData[metric] = 0;
        }

        // Add the current value to the aggregated total
        aggregatedData[metric] += value;
      });
    });
  });

  return aggregatedData;
};
