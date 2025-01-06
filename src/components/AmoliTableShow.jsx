// "use client";
// import React, { useState, useEffect } from "react";

// const AmoliTableShow = ({ userData }) => {
//   const [monthDays, setMonthDays] = useState([]);
//   const [monthName, setMonthName] = useState("");
//   const [transposedData, setTransposedData] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Map for translating labels to Bangla
//   const labelMap = {
//     tahajjud: "তাহাজ্জুদ",
//     ayat: "আয়াত",
//     zikir: "জিকির",
//     ishraq: "ইশরাক",
//     jamat: "জামাত",
//     sirat: "সিরাত",
//     Dua: "দুআ",
//     ilm: "ইলম",
//     tasbih: "তসবিহ",
//     dayeeAmol: "দায়ী আমল",
//     amoliSura: "আমলি সুরা",
//     ayamroja: "আয়াম রোজা",
//     hijbulBahar: "হিজবুল বাহার",
//   };

//   useEffect(() => {
//     // Extracting data from the userAmoliData object
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     setMonthDays(daysArray);
//     setMonthName(today.toLocaleString("default", { month: "long" }));

//     const email = localStorage.getItem("userEmail");
//     console.log("MyMail:", email);

//     setUserEmail(email);

//     const labels = Object.keys(userData[email]["2025-01-01"]);
//     console.log("Labels", labels)

//     const transposed = labels.map((label) => {
//       const row = { label: labelMap[label] || label }; // Convert label to Bangla if exists
//       daysArray.forEach((day) => {
//         const date = `2025-01-${day.toString().padStart(2, "0")}`;
//         row[day] = userData[email][date]?.[label] || "N/A";
//       });
//       return row;
//     });

//     setTransposedData(transposed);
//     setLoading(false);
//   }, [userData]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="overflow-x-auto p-4">
//       <h2 className="text-2xl font-bold text-cyan-800 mb-4">{`User: ${userEmail} | Month: ${monthName}`}</h2>
//       <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">Label</th>
//             {monthDays.map((day) => (
//               <th
//                 key={day}
//                 className="border border-gray-300 px-6 py-2 text-center whitespace-nowrap"
//               >
//                 Day {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {transposedData.map((row, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border border-gray-300 px-6 py-2 font-medium whitespace-nowrap">
//                 {row.label}
//               </td>
//               {monthDays.map((day) => (
//                 <td
//                   key={day}
//                   className="border border-gray-300 p-2 text-center"
//                 >
//                   {row[day]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AmoliTableShow;

// "use client";
// import React, { useState, useEffect } from "react";

// const AmoliTableShow = ({ userData }) => {
//   const [monthDays, setMonthDays] = useState([]);
//   const [monthName, setMonthName] = useState("");
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [transposedData, setTransposedData] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Map for translating labels to Bangla

//   // console.log("UserData:", userData.labelMap);
//   // return;

//   useEffect(() => {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth();

//     // Calculate total days in the current month
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//     // Generate array of days (e.g., [1, 2, ..., 31])
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     setMonthDays(daysArray);

//     // Set the month name and year
//     setMonthName(today.toLocaleString("default", { month: "long" }));
//     setYear(currentYear);

//     // Get email from localStorage
//     const email = localStorage.getItem("userEmail");
//     setUserEmail(email);

//     const labels = userData.labelMap;
//     // console.log("Labels:", labels);
//     // return;

//     // Generate table data based on labelMap and userData
//     const transposed = Object.keys(labels).map((label) => {
//       const row = { label: labels[label] }; // Translate label to Bangla if possible
//       daysArray.forEach((day) => {
//         // Format the date as YYYY-MM-DD
//         const date = `${currentYear}-${(currentMonth + 1)
//           .toString()
//           .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

//         row[day] = userData[email]?.[date]?.[label] || "N/A"; // Check if userData exists for that date
//       });
//       return row;
//     });

//     setTransposedData(transposed);
//     setLoading(false);
//   }, [userData]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="overflow-x-auto p-4">
//       <h2 className="text-2xl font-bold text-cyan-800 mb-4">
//         {`User: ${userEmail} | Month: ${monthName} ${year}`}
//       </h2>
//       <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
//         <thead>
//           <tr className="bg-gray-200 px-4">
//             <th className="border border-gray-300 px-4 py-2">Label</th>
//             {monthDays.map((day) => (
//               <th
//                 key={day}
//                 className="border border-gray-300 px-6 py-2 text-center whitespace-nowrap"
//               >
//                 Day {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {transposedData.map((row, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border font-semibold border-gray-300 px-6 py-2 whitespace-nowrap">
//                 {row.label}
//               </td>
//               {monthDays.map((day) => (
//                 <td
//                   key={day}
//                   className="border border-gray-300 px-6 py-2 text-center"
//                 >
//                   {row[day]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AmoliTableShow;

"use client";
import React, { useState, useEffect } from "react";

const AmoliTableShow = ({ userData }) => {
  const [monthDays, setMonthDays] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [transposedData, setTransposedData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [editCell, setEditCell] = useState(null); // State for tracking the cell being edited
  const [newCellValue, setNewCellValue] = useState(""); // State for the new cell value

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Calculate total days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Generate array of days (e.g., [1, 2, ..., 31])
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setMonthDays(daysArray);

    // Set the month name and year
    setMonthName(today.toLocaleString("default", { month: "long" }));
    setYear(currentYear);

    // Get email from localStorage
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);

    const labels = userData.labelMap;

    // Generate table data based on labelMap and userData
    const transposed = Object.keys(labels).map((label) => {
      const row = { label: labels[label] }; // Translate label to Bangla if possible
      daysArray.forEach((day) => {
        // Format the date as YYYY-MM-DD
        const date = `${currentYear}-${(currentMonth + 1)
          .toString()
          .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

        row[day] = userData[email]?.[date]?.[label] || "N/A"; // Check if userData exists for that date
      });
      return row;
    });

    setTransposedData(transposed);
    setLoading(false);
  }, [userData]);

  // Handle clicking on a cell to edit
  const handleEditClick = (rowIndex, day) => {
    const currentValue = transposedData[rowIndex][day];
    setEditCell({ rowIndex, day });
    setNewCellValue(currentValue);
  };

  // Handle saving the edited value
  const handleSaveEdit = () => {
    if (editCell) {
      const updatedData = [...transposedData];
      updatedData[editCell.rowIndex][editCell.day] = newCellValue; // Update the cell value
      setTransposedData(updatedData);
      setEditCell(null); // Close the edit mode
    }
  };

  // Handle canceling the edit
  const handleCancelEdit = () => {
    setEditCell(null); // Close the edit mode
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-cyan-800 mb-4">
        {`User: ${userEmail} | Month: ${monthName} ${year}`}
      </h2>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Label</th>
            {monthDays.map((day) => (
              <th
                key={day}
                className="border border-gray-300 px-6 py-2 text-center whitespace-nowrap"
              >
                Day {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transposedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              <td className="border font-semibold border-gray-300 px-6 py-2 whitespace-nowrap">
                {row.label}
              </td>
              {monthDays.map((day) => (
                <td
                  key={day}
                  className="border border-gray-300 px-6 py-2 text-center relative group"
                >
                  {row[day]}
                  <button
                    onClick={() => handleEditClick(rowIndex, day)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-blue-600"
                  >
                    ✏️
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editCell && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Cell</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Label: {transposedData[editCell.rowIndex]?.label}
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Day: {editCell.day}
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Value:{" "}
                {transposedData[editCell.rowIndex][editCell.day]}
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={newCellValue}
                onChange={(e) => setNewCellValue(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="p-2 bg-gray-300 rounded"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="p-2 bg-teal-700 text-white rounded"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmoliTableShow;
