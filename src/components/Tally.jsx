

import React from "react";

const Tally = ({ userData = {}, email, title }) => {
  const getBackgroundColor = (percentage) => {
    if (percentage >= 80) {
      return "bg-teal-500"; // Greenish Teal for 80% or higher
    } else if (percentage >= 50) {
      return "bg-amber-500"; // Yellow for 50% to 79%
    } else {
      return "bg-red-500"; // Red for less than 50%
    }
  };

  const aggregateUserData = (userData, email) => {
    // Validate userData and email
    if (!userData || typeof userData !== "object") {
      console.error("Invalid or missing userData:", userData);
      return [];
    }


    const userRecords = userData[email];
    if (!userRecords) {
      console.warn(`No records found for email: ${email}`);
      return [];
    }

    const aggregatedData = {};
    const labelMap = userData.labelMap || {};

    // Initialize aggregation structure
    Object.keys(labelMap).forEach((key) => {
      aggregatedData[key] = 0;
    });

    // Aggregate data across all dates for the user
    Object.values(userRecords).forEach((dailyData) => {
      Object.entries(dailyData).forEach(([key, value]) => {
        if (aggregatedData[key] !== undefined) {
          aggregatedData[key] += parseInt(value, 10);
        }
      });
    });

    // Format aggregated data for display and cap values at max
    return Object.entries(aggregatedData).map(([key, totalValue]) => ({
      label: labelMap[key] || key, // Use the label map if available
      value: Math.min(totalValue, 1000), // Cap the value at the max (1000)
      totalValue: totalValue,
      max: 1000, // Example max value for progress calculation
    }));
  };

  const dataForTally = aggregateUserData(userData, email);

  return (
    <div className="flex justify-center">
      <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
        <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

        {dataForTally.length > 0 ? (
          <div className="space-y-3 p-4">
            {dataForTally.map((item, index) => {
              const percentage = (item.value / item.max) * 100; // Calculate progress percentage
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      {item.totalValue}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${getBackgroundColor(
                        percentage
                      )}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No data available for the selected user.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tally;

// "use client"
// import React from "react";

// const Tally = ({ userData = {}, emails = [], title }) => {
//   const getBackgroundColor = (percentage) => {
//     if (percentage >= 80) {
//       return "bg-teal-500"; // Greenish Teal for 80% or higher
//     } else if (percentage >= 50) {
//       return "bg-amber-500"; // Yellow for 50% to 79%
//     } else {
//       return "bg-red-500"; // Red for less than 50%
//     }
//   };

//   const aggregateUserData = (userData, emails) => {
//     // Validate userData and emails
//     if (!userData || typeof userData !== "object") {
//       console.error("Invalid or missing userData:", userData);
//       return [];
//     }

//     const aggregatedData = {};
//     const labelMap = userData.labelMap || {};

//     // Initialize aggregation structure for each label
//     Object.keys(labelMap).forEach((key) => {
//       aggregatedData[key] = 0;
//     });

//     // Merge data across all users
//     emails.forEach((email) => {
//       const userRecords = userData[email];
//       if (!userRecords) {
//         console.warn(`No records found for email: ${email}`);
//         return;
//       }

//       // Merge data for each label from all dates
//       Object.values(userRecords).forEach((dailyData) => {
//         Object.entries(dailyData).forEach(([key, value]) => {
//           if (aggregatedData[key] !== undefined) {
//             aggregatedData[key] += parseInt(value, 10);
//           }
//         });
//       });
//     });

//     // Format aggregated data for display and cap values at max
//     return Object.entries(aggregatedData).map(([key, totalValue]) => ({
//       label: labelMap[key] || key, // Use the label map if available
//       value: Math.min(totalValue, 1000), // Cap the value at the max (1000)
//       totalValue: totalValue,
//       max: 1000, // Example max value for progress calculation
//     }));
//   };

//   const dataForTally = aggregateUserData(userData, emails);

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
//         <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

//         {dataForTally.length > 0 ? (
//           <div className="space-y-3 p-4">
//             {dataForTally.map((item, index) => {
//               const percentage = (item.value / item.max) * 100; // Calculate progress percentage
//               return (
//                 <div key={index}>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-xs sm:text-sm font-medium">
//                       {item.label}
//                     </span>
//                     <span className="text-xs sm:text-sm font-semibold">
//                       {item.totalValue}
//                     </span>
//                   </div>

//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div
//                       className={`h-4 rounded-full ${getBackgroundColor(
//                         percentage
//                       )}`}
//                       style={{ width: `${percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">
//             No data available for the selected users.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tally;



// import React from "react";

// const Tally = ({ userData = {}, emails = [], title }) => {
//   const getBackgroundColor = (percentage) => {
//     if (percentage >= 80) {
//       return "bg-teal-500"; // Greenish Teal for 80% or higher
//     } else if (percentage >= 50) {
//       return "bg-amber-500"; // Yellow for 50% to 79%
//     } else {
//       return "bg-red-500"; // Red for less than 50%
//     }
//   };

//   const aggregateUserData = (userData, emails) => {
//     // Validate userData and emails
//     if (!userData || typeof userData !== "object") {
//       console.error("Invalid or missing userData:", userData);
//       return [];
//     }

//     const aggregatedData = {};
//     const labelMap = userData.labelMap || {};

//     // Initialize aggregation structure for each label
//     Object.keys(labelMap).forEach((key) => {
//       aggregatedData[key] = 0;
//     });

//     // Merge data across all users or for a single user
//     const usersToProcess = Array.isArray(emails) && emails.length > 0 ? emails : [emails];

//     usersToProcess.forEach((email) => {
//       const userRecords = userData[email];
//       if (!userRecords) {
//         console.warn(`No records found for email: ${email}`);
//         return;
//       }

//       // Merge data for each label from all dates
//       Object.values(userRecords).forEach((dailyData) => {
//         Object.entries(dailyData).forEach(([key, value]) => {
//           if (aggregatedData[key] !== undefined) {
//             aggregatedData[key] += parseInt(value, 10);
//           }
//         });
//       });
//     });

//     // Format aggregated data for display and cap values at max
//     return Object.entries(aggregatedData).map(([key, totalValue]) => ({
//       label: labelMap[key] || key, // Use the label map if available
//       value: Math.min(totalValue, 1000), // Cap the value at the max (1000)
//       totalValue: totalValue,
//       max: 1000, // Example max value for progress calculation
//     }));
//   };

//   // If only a single email is provided, aggregate data for that user
//   const dataForTally = aggregateUserData(userData, emails);

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
//         <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

//         {dataForTally.length > 0 ? (
//           <div className="space-y-3 p-4">
//             {dataForTally.map((item, index) => {
//               const percentage = (item.value / item.max) * 100; // Calculate progress percentage
//               return (
//                 <div key={index}>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-xs sm:text-sm font-medium">
//                       {item.label}
//                     </span>
//                     <span className="text-xs sm:text-sm font-semibold">
//                       {item.totalValue}
//                     </span>
//                   </div>

//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div
//                       className={`h-4 rounded-full ${getBackgroundColor(
//                         percentage
//                       )}`}
//                       style={{ width: `${percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">
//             No data available for the selected user(s).
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tally;

