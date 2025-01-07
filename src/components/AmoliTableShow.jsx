// "use client";
// import React, { useState, useEffect } from "react";

// const AmoliTableShow = ({ userData }) => {
//   const [monthDays, setMonthDays] = useState([]);
//   const [monthName, setMonthName] = useState("");
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [transposedData, setTransposedData] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [editCell, setEditCell] = useState(null); // State for tracking the cell being edited
//   const [newCellValue, setNewCellValue] = useState(""); // State for the new cell value

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

//   // Handle clicking on a cell to edit
//   const handleEditClick = (rowIndex, day) => {
//     const currentValue = transposedData[rowIndex][day];
//     setEditCell({ rowIndex, day });
//     setNewCellValue(currentValue);
//   };

//   // Handle saving the edited value
//   const handleSaveEdit = () => {
//     if (editCell) {
//       const updatedData = [...transposedData];
//       updatedData[editCell.rowIndex][editCell.day] = newCellValue; // Update the cell value
//       setTransposedData(updatedData);
//       setEditCell(null); // Close the edit mode
//     }
//   };

//   // Handle canceling the edit
//   const handleCancelEdit = () => {
//     setEditCell(null); // Close the edit mode
//   };

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
//           {transposedData.map((row, rowIndex) => (
//             <tr key={rowIndex} className="hover:bg-gray-100">
//               <td className="border font-semibold border-gray-300 px-6 py-2 whitespace-nowrap">
//                 {row.label}
//               </td>
//               {monthDays.map((day) => (
//                 <td
//                   key={day}
//                   className="border border-gray-300 px-6 py-2 text-center relative group"
//                 >
//                   {row[day]}
//                   <button
//                     onClick={() => handleEditClick(rowIndex, day)}
//                     className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-blue-600"
//                   >
//                     ✏️
//                   </button>
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       {editCell && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h3 className="text-lg font-bold mb-4">Edit Cell</h3>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Label: {transposedData[editCell.rowIndex]?.label}
//               </label>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Day: {editCell.day}
//               </label>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Previous Value:{" "}
//                 {transposedData[editCell.rowIndex][editCell.day]}
//               </label>
//               <input
//                 type="text"
//                 className="border border-gray-300 p-2 w-full"
//                 value={newCellValue}
//                 onChange={(e) => setNewCellValue(e.target.value)}
//               />
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 className="p-2 bg-gray-300 rounded"
//                 onClick={handleCancelEdit}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="p-2 bg-teal-700 text-white rounded"
//                 onClick={handleSaveEdit}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
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
  const [editColumn, setEditColumn] = useState(null); // For column editing
  const [columnFormData, setColumnFormData] = useState([]); // Data for column editing
  const [editCell, setEditCell] = useState(null); // For cell editing
  const [newCellValue, setNewCellValue] = useState(""); // New cell value for editing

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Calculate total days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setMonthDays(daysArray);

    setMonthName(today.toLocaleString("default", { month: "long" }));
    setYear(currentYear);

    const email = localStorage.getItem("userEmail");
    setUserEmail(email);

    const labels = userData.labelMap;

    const transposed = Object.keys(labels).map((label) => {
      const row = { label: labels[label] };
      daysArray.forEach((day) => {
        const date = `${currentYear}-${(currentMonth + 1)
          .toString()
          .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
        row[day] = userData[email]?.[date]?.[label] || "N/A";
      });
      return row;
    });

    setTransposedData(transposed);
    setLoading(false);
  }, [userData]);

  // Cell Editing Handlers
  const handleEditCellClick = (rowIndex, day) => {
    const currentValue = transposedData[rowIndex][day];
    setEditCell({ rowIndex, day });
    setNewCellValue(currentValue);
  };

  const handleSaveCellEdit = () => {
    if (editCell) {
      const updatedData = [...transposedData];
      updatedData[editCell.rowIndex][editCell.day] = newCellValue;
      setTransposedData(updatedData);
      setEditCell(null);
    }
  };

  const handleCancelCellEdit = () => {
    setEditCell(null);
  };

  // Column Editing Handlers
  const handleColumnEdit = (day) => {
    const columnData = transposedData.map((row) => ({
      label: row.label,
      value: row[day],
    }));
    setEditColumn(day);
    setColumnFormData(columnData);
  };

  const handleColumnInputChange = (index, newValue) => {
    setColumnFormData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, value: newValue } : item))
    );
  };

  const handleSaveColumnEdit = () => {
    const updatedData = [...transposedData];
    columnFormData.forEach((item, index) => {
      updatedData[index][editColumn] = item.value;
    });
    setTransposedData(updatedData);
    setEditColumn(null);
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
                className="border border-gray-300 px-6 py-2 text-center whitespace-nowrap relative group"
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
                    onClick={() => handleEditCellClick(rowIndex, day)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-blue-600"
                  >
                    ✏️
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border border-gray-300 px-6 py-2 text-center font-bold"></td>
            {monthDays.map((day) => (
              <td
                key={day}
                className="border border-gray-300 px-6 py-2 text-center"
              >
                <button
                  onClick={() => handleColumnEdit(day)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit
                </button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      {/* Cell Edit Modal */}
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
                onClick={handleCancelCellEdit}
              >
                Cancel
              </button>
              <button
                className="p-2 bg-teal-700 text-white rounded"
                onClick={handleSaveCellEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Column Edit Modal */}
      {editColumn && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 pr-20 rounded-xl shadow-lg w-2/5 max-h-[80vh] overflow-y-auto scrollbar">
            <h3 className="text-lg font-bold mb-4">
              Edit Column: Day {editColumn}
            </h3>
            {columnFormData.map((item, index) => (
              <div className="mb-4" key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {item.label}
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full"
                  value={item.value || ""}
                  onChange={(e) =>
                    handleColumnInputChange(index, e.target.value)
                  }
                />
              </div>
            ))}
            <div className="flex justify-end gap-4">
              <button
                className="p-2 bg-gray-300 rounded"
                onClick={() => setEditColumn(null)}
              >
                Cancel
              </button>
              <button
                className="p-2 bg-teal-700 text-white rounded"
                onClick={handleSaveColumnEdit}
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
