// "use client";
// import React, { useState, useEffect } from "react";
// import fileDownload from "js-file-download";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const TallyDataTable = ({ tallyData }) => {
//   const [monthDays, setMonthDays] = useState([]);
//   const [monthName, setMonthName] = useState("");
//   const [transposedData, setTransposedData] = useState([]);
//   const [editingCell, setEditingCell] = useState(null);
//   const [newValue, setNewValue] = useState("");
//   const [editingRow, setEditingRow] = useState(null);
//   const [rowEditValues, setRowEditValues] = useState({});

//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     setMonthDays(daysArray);
//     setMonthName(today.toLocaleString("default", { month: "long" }));

//     const labels = tallyData.map((data) => data.label);
//     const transposed = labels.map((label) => {
//       const row = { label };
//       daysArray.forEach((day) => {
//         row[day] = 0; // Initialize all day values as 0
//       });
//       return row;
//     });

//     setTransposedData(transposed);
//   }, [tallyData]);

//   const convertToCSV = (data) => {
//     const headers = ["Label", ...monthDays];
//     const rows = data.map((row) =>
//       [row.label, ...monthDays.map((day) => row[day] || "")].join(",")
//     );
//     return [headers.join(","), ...rows].join("\n");
//   };

//   const convertToPDF = (data) => {
//     const doc = new jsPDF();
//     doc.text(`Tally Data for ${monthName}`, 14, 10);

//     const headers = ["Label", ...monthDays];
//     const rows = data.map((row) => [
//       row.label,
//       ...monthDays.map((day) => row[day] || ""),
//     ]);

//     doc.autoTable({
//       head: [headers],
//       body: rows,
//       startY: 20,
//       theme: "striped",
//       headStyles: { fillColor: [22, 160, 133], halign: "center" },
//       bodyStyles: { textColor: 50 },
//       styles: { halign: "center" },
//     });

//     return doc;
//   };

//   const handleDownloadCSV = () => {
//     const csv = convertToCSV(transposedData);
//     fileDownload(csv, `tally-data-${monthName.toLowerCase()}.csv`);
//   };

//   const handleDownloadPDF = () => {
//     const pdf = convertToPDF(transposedData);
//     pdf.save(`tally-data-${monthName.toLowerCase()}.pdf`);
//   };

//   const handleEditClick = (rowIndex, day) => {
//     setEditingCell({ rowIndex, day });
//     const currentValue = transposedData[rowIndex][day];
//     setNewValue(currentValue || "");
//   };

//   const handleSaveCell = () => {
//     setTransposedData((prevData) =>
//       prevData.map((row, index) =>
//         index === editingCell.rowIndex
//           ? { ...row, [editingCell.day]: parseFloat(newValue) || 0 }
//           : row
//       )
//     );
//     setEditingCell(null);
//     setNewValue("");
//   };

//   const handleCancelCell = () => {
//     setEditingCell(null);
//     setNewValue("");
//   };

//   const handleRowEditClick = (rowIndex) => {
//     setEditingRow(rowIndex);
//     setRowEditValues({ ...transposedData[rowIndex] });
//   };

//   const handleRowEditChange = (day, value) => {
//     setRowEditValues((prevValues) => ({
//       ...prevValues,
//       [day]: parseFloat(value) || 0,
//     }));
//   };

//   const handleRowSave = () => {
//     setTransposedData((prevData) =>
//       prevData.map((row, index) =>
//         index === editingRow ? { ...rowEditValues } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleRowCancel = () => {
//     setEditingRow(null);
//     setRowEditValues({});
//   };

//   return (
//     <div className="overflow-x-auto p-4">
//       <h2 className="text-2xl font-bold text-cyan-800 mb-4">{`Month: ${monthName}`}</h2>
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
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transposedData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               <td className="border border-gray-300 px-6 py-2 font-medium whitespace-nowrap">
//                 {row.label}
//               </td>
//               {monthDays.map((day) => (
//                 <td
//                   key={day}
//                   className="border border-gray-300 p-2 text-center"
//                 >
//                   {editingRow === rowIndex ? (
//                     <input
//                       type="number"
//                       value={rowEditValues[day]}
//                       onChange={(e) => handleRowEditChange(day, e.target.value)}
//                       className="w-full border rounded"
//                     />
//                   ) : (
//                     <>
//                       {row[day]}
//                       <span
//                         className="absolute top-2 right-2 hidden group-hover:inline-block cursor-pointer"
//                         onClick={() => handleEditClick(rowIndex, day)}
//                       >
//                         🖊️
//                       </span>
//                     </>
//                   )}
//                 </td>
//               ))}
//               <td className="border border-gray-300 px-4 py-2">
//                 {editingRow === rowIndex ? (
//                   <>
//                     <button
//                       onClick={handleRowSave}
//                       className="px-2 py-1 bg-teal-700 text-white rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={handleRowCancel}
//                       className="px-2 py-1 bg-gray-500 text-white rounded ml-2"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => handleRowEditClick(rowIndex)}
//                     className="px-2 py-1 bg-teal-700 text-white rounded"
//                   >
//                     Edit Row
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-end gap-4 pt-4">
//         <button
//           className="p-2 text-white border-2 bg-teal-700 rounded-md"
//           onClick={handleDownloadCSV}
//         >
//           Download CSV
//         </button>
//         <button
//           className="p-2 text-white border-2 bg-teal-700 rounded-md"
//           onClick={handleDownloadPDF}
//         >
//           Download PDF
//         </button>
//       </div>

//       {editingCell && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-md w-96">
//             <h2 className="text-lg font-bold mb-4">{`Editing Day ${editingCell.day}`}</h2>
//             <input
//               type="number"
//               value={newValue}
//               onChange={(e) => setNewValue(e.target.value)}
//               className="w-full border border-gray-300 rounded p-2 mb-4"
//             />
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={handleSaveCell}
//                 className="px-4 py-2 bg-teal-700 text-white rounded"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={handleCancelCell}
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TallyDataTable;

// "use client";
// import React, { useState, useEffect } from "react";
// import fileDownload from "js-file-download";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const TallyDataTable = ({ tallyData }) => {
//   const [monthDays, setMonthDays] = useState([]);
//   const [monthName, setMonthName] = useState("");
//   const [transposedData, setTransposedData] = useState([]);

//   // Helper to generate random data
//   const generateRandomValue = () => Math.floor(Math.random() * 100);

//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     // Generate column headers for days
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     setMonthDays(daysArray);
//     setMonthName(today.toLocaleString("default", { month: "long" }));

//     // Transpose data for row-wise labels and column-wise days
//     const labels = tallyData.map((data) => data.label);
//     const transposed = labels.map((label) => {
//       const row = { label };
//       daysArray.forEach((day, index) => {
//         row[day] =
//           index === 0
//             ? tallyData.find((data) => data.label === label)?.value || 0
//             // :
//             : 0;
//       });
//       return row;
//     });

//     setTransposedData(transposed);
//   }, [tallyData]);

//   const convertToCSV = (data) => {
//     const headers = ["Label", ...monthDays];
//     const rows = data.map((row) =>
//       [row.label, ...monthDays.map((day) => row[day] || "")].join(",")
//     );
//     return [headers.join(","), ...rows].join("\n");
//   };

//   const convertToPDF = (data) => {
//     const doc = new jsPDF();
//     doc.text(`Tally Data for ${monthName}`, 14, 10);

//     const headers = ["Label", ...monthDays];
//     const rows = data.map((row) => [
//       row.label,
//       ...monthDays.map((day) => row[day] || ""),
//     ]);

//     doc.autoTable({
//       head: [headers],
//       body: rows,
//       startY: 20,
//       theme: "striped",
//       headStyles: { fillColor: [22, 160, 133], halign: "center" },
//       bodyStyles: { textColor: 50 },
//       styles: { halign: "center" },
//     });

//     return doc;
//   };

//   const handleDownloadCSV = () => {
//     const csv = convertToCSV(transposedData);
//     fileDownload(csv, `tally-data-${monthName.toLowerCase()}.csv`);
//   };

//   const handleDownloadPDF = () => {
//     const pdf = convertToPDF(transposedData);
//     pdf.save(`tally-data-${monthName.toLowerCase()}.pdf`);
//   };

//   // Table Edit Functions

//   return (
//     <div className="overflow-x-auto p-4">
//       <h2 className="text-2xl font-bold text-cyan-800 mb-4">{`Month: ${monthName}`}</h2>
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
//             <tr key={index}>
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
//       <div className="flex justify-end gap-4 pt-4">
//         <button
//           className="p-2 text-white border-2 bg-teal-700 rounded-md"
//           onClick={handleDownloadCSV}
//         >
//           Download CSV
//         </button>
//         <button
//           className="p-2 text-white border-2 bg-teal-700 rounded-md"
//           onClick={handleDownloadPDF}
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );

// };

// export default TallyDataTable;

"use client";
import React, { useState, useEffect } from "react";
import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TallyDataTable = ({ tallyData }) => {
  const [monthDays, setMonthDays] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [transposedData, setTransposedData] = useState([]);
  const [editCell, setEditCell] = useState(null);
  const [newCellValue, setNewCellValue] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setMonthDays(daysArray);
    setMonthName(today.toLocaleString("default", { month: "long" }));

    const generateRandomValue = () => Math.floor(Math.random() * 100);

    const transposed = tallyData.map((data) => {
      const row = { label: data.label };
      daysArray.forEach((day) => {
        row[day] = day === 1 ? data.value || 0 : generateRandomValue();
      });
      return row;
    });

    setTransposedData(transposed);
  }, [tallyData]);

  const handleEditClick = (rowIndex, day) => {
    const cellValue = transposedData[rowIndex][day];
    setEditCell({
      rowIndex,
      day,
      label: transposedData[rowIndex].label,
      previousValue: cellValue,
    });
    setNewCellValue(cellValue); // Set current value for the input field
  };

  const handleSaveEdit = () => {
    if (editCell) {
      const updatedData = [...transposedData];
      updatedData[editCell.rowIndex][editCell.day] = newCellValue; // Update the table data
      setTransposedData(updatedData); // Save the updated data in the state
      setEditCell(null); // Close the modal
    }
  };

  const handleCancelEdit = () => {
    setEditCell(null); // Close the modal without saving
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-cyan-800 mb-4">{`Month: ${monthName}`}</h2>
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
            <tr key={rowIndex}>
              <td className="border border-gray-300 px-6 py-2 font-medium whitespace-nowrap">
                {row.label}
              </td>
              {monthDays.map((day) => (
                <td
                  key={day}
                  className="border border-gray-300 p-2 text-center relative group"
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
                Label: {editCell.label}
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Day: {editCell.day}
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Value: {editCell.previousValue}
              </label>
              <input
                type="number"
                className="border border-gray-300 p-2 w-full"
                value={newCellValue}
                onChange={(e) => setNewCellValue(Number(e.target.value))}
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

export default TallyDataTable;
