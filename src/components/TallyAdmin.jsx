// "use client";
// import React from "react";

// const TallyAdmin = ({ userData = {}, emails = [], title }) => {
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
//     const usersToProcess =
//       Array.isArray(emails) && emails.length > 0 ? emails : [emails];

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

// export default TallyAdmin;

// "use client";
// import React, { useMemo } from "react";
// import PropTypes from "prop-types";

// const TallyAdmin = ({ userData, emails, title }) => {
//   const getBackgroundColor = (percentage) => {
//     if (percentage >= 80) return "bg-teal-500";
//     if (percentage >= 50) return "bg-amber-500";
//     return "bg-red-500";
//   };

//   const aggregateUserData = (userData, emails) => {
//     if (!userData || typeof userData !== "object") return [];
//     const aggregatedData = {};
//     const labelMap = userData.labelMap || {};

//     // Initialize aggregation structure for each label
//     Object.keys(labelMap).forEach((key) => {
//       aggregatedData[key] = 0;
//     });

//     // Ensure emails is always an array
//     const emailList = Array.isArray(emails) ? emails : [emails];

//     // Process each email, even if no data exists for it
//     emailList.forEach((email) => {
//       const userRecords = userData[email];
//       if (userRecords) {
//         // Merge data for each label from all dates
//         Object.values(userRecords).forEach((dailyData) => {
//           Object.entries(dailyData).forEach(([key, value]) => {
//             if (aggregatedData[key] !== undefined) {
//               aggregatedData[key] += parseInt(value, 10);
//             }
//           });
//         });
//       } else {
//         // If no data exists for this email, keep the default zero values
//         console.warn(`No data found for email: ${email}`);
//       }
//     });

//     // Format aggregated data for display
//     return Object.entries(aggregatedData).map(([key, totalValue]) => ({
//       label: labelMap[key] || key, // Use label map if available
//       value: Math.min(totalValue, 1000), // Cap the value
//       totalValue: totalValue,
//       max: 1000, // Example max value
//     }));
//   };

//   const dataForTally = useMemo(
//     () => aggregateUserData(userData, emails),
//     [userData, emails]
//   );

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
//         <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

//         {dataForTally.length > 0 ? (
//           <div className="space-y-3 p-4">
//             {dataForTally.map((item, index) => {
//               const percentage = (item.value / item.max) * 100;
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
//                       role="progressbar"
//                       aria-valuenow={item.value}
//                       aria-valuemin={0}
//                       aria-valuemax={item.max}
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

// TallyAdmin.defaultProps = {
//   userData: {},
//   emails: [],
//   title: "Tally Admin",
// };

// TallyAdmin.propTypes = {
//   userData: PropTypes.object.isRequired,
//   emails: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.string),
//     PropTypes.string,
//   ]),
//   title: PropTypes.string.isRequired,
// };

// export default TallyAdmin;

"use client";
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const TallyAdmin = ({ userData, emails, title }) => {
  const getBackgroundColor = (percentage) => {
    if (percentage >= 80) return "bg-teal-500";
    if (percentage >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  const aggregateUserData = (userData, emails) => {
    if (!userData || typeof userData !== "object") return [];
    const aggregatedData = {};
    const labelMap = userData.labelMap || {};

    // Initialize aggregation structure for each label
    Object.keys(labelMap).forEach((key) => {
      aggregatedData[key] = 0;
    });

    // Ensure emails is always an array
    const emailList = Array.isArray(emails) ? emails : [emails];

    // Process each email, skipping emails with no data in userData
    // emailList.forEach((email) => {
    //   const userRecords = userData[email];
    //   if (!userRecords) {
    //     console.warn(`No data found for email: ${email}`);
    //     return; // Skip this email if no data exists
    //   }

    //   // Merge data for each label from all dates
    //   Object.values(userRecords).forEach((dailyData) => {
    //     Object.entries(dailyData).forEach(([key, value]) => {
    //       if (aggregatedData[key] !== undefined) {
    //         aggregatedData[key] += parseInt(value, 10);
    //       }
    //     });
    //   });
    // });

    emailList.forEach((email) => {
      const userRecords = userData[email];

      // Skip this email if no data exists for it
      if (!userRecords) {
        console.warn(`No data found for email: ${email}`);
        return; // Skip to the next email
      }

      // Merge data for each label from all dates for valid users
      Object.values(userRecords).forEach((dailyData) => {
        Object.entries(dailyData).forEach(([key, value]) => {
          if (aggregatedData[key] !== undefined) {
            aggregatedData[key] += parseInt(value, 10); // Sum up values for the valid emails
          }
        });
      });
    });

    // Format aggregated data for display
    return Object.entries(aggregatedData).map(([key, totalValue]) => ({
      label: labelMap[key] || key, // Use label map if available
      value: Math.min(totalValue, 1000), // Cap the value
      totalValue: totalValue,
      max: 1000, // Example max value
    }));
  };

  const dataForTally = useMemo(
    () => aggregateUserData(userData, emails),
    [userData, emails]
  );

  return (
    <div className="flex justify-center">
      <div className="bg-white border shadow-lg rounded-lg p-4 w-full">
        <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

        {dataForTally.length > 0 ? (
          <div className="space-y-3 p-4">
            {dataForTally.map((item, index) => {
              const percentage = (item.value / item.max) * 100;
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
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={item.max}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No data available for the selected user(s).
          </p>
        )}
      </div>
    </div>
  );
};

TallyAdmin.defaultProps = {
  userData: {},
  emails: [],
  title: "Tally Admin",
};

TallyAdmin.propTypes = {
  userData: PropTypes.object.isRequired,
  emails: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
};

export default TallyAdmin;