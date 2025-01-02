"use client";
import React, { useState, useEffect } from "react";
import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TallyDataTable = ({ tallyData }) => {
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [monthName, setMonth] = useState("");

  const convertToCSV = (data) => {
    // Extract headers dynamically
    const headers = ["Label", "Value", "Max"];

    // Generate rows
    const rows = data.map((row) => {
      return [row.label, row.value, row.max];
    });

    // Combine headers and rows into CSV string
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    return csv;
  };

  const convertToPDF = (data) => {
    const doc = new jsPDF();
    doc.text("Tally Data", 14, 10);

    const headers = ["Label", "Value", "Max"];
    const rows = data.map((row) => [row.label, row.value, row.max]);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 20,
      theme: "striped",
      headStyles: {
        fillColor: [22, 160, 133],
        halign: "center",
      },
      bodyStyles: {
        textColor: 50,
      },
      styles: {
        halign: "center",
      },
    });

    return doc;
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(tallyData);
    fileDownload(csv, "tally-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(tallyData);
    pdf.save("tally-data.pdf");
  };

  // Generate days for the current month (for demo purposes, you can customize)
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: days }, (_, i) => ` ${i + 1}`);
    const x = today.toLocaleString("default", { month: "long" });

    setDaysInMonth(daysArray);
    setMonth(x);
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
        <thead className="">
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Label</th>
            <th className="border border-gray-300 p-2">Value</th>
            <th className="border border-gray-300 p-2">Max</th>
          </tr>
        </thead>
        <tbody>
          {tallyData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 bg-gray-100 p-4 font-medium">
                {row.label}
              </td>
              <td className="border border-gray-300 p-4 text-center">{row.value}</td>
              <td className="border border-gray-300 p-4 text-center">{row.max}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end gap-4 pt-4">
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default TallyDataTable;



// import React, { useEffect, useState } from "react";

// const TallyDataTable = ({ firstDayData }) => {
//   const [monthlyData, setMonthlyData] = useState([]);

//   useEffect(() => {
//     const generateMonthlyData = () => {
//       const today = new Date();
//       const year = today.getFullYear();
//       const month = today.getMonth();
//       const daysInMonth = new Date(year, month + 1, 0).getDate();

//       // Create data for the entire month
//       const monthly = Array.from({ length: daysInMonth }, (_, dayIndex) => {
//         const dayData =
//           dayIndex === 0
//             ? firstDayData // Use provided data for the first day
//             : firstDayData.map((item) => ({
//                 ...item,
//                 value: Math.floor(Math.random() * (100 - 30 + 1)) + 30, // Random value between 30 and 100
//               }));
//         return { day: dayIndex + 1, data: dayData };
//       });

//       setMonthlyData(monthly);
//     };

//     generateMonthlyData();
//   }, [firstDayData]);

//   return (
//     <div className="overflow-x-auto p-4">
//       <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">Day</th>
//             <th className="border border-gray-300 p-2">Label</th>
//             <th className="border border-gray-300 p-2">Value</th>
//             <th className="border border-gray-300 p-2">Max</th>
//           </tr>
//         </thead>
//         <tbody>
//           {monthlyData.map((dayData) =>
//             dayData.data.map((item, index) => (
//               <tr key={`${dayData.day}-${index}`}>
//                 <td className="border border-gray-300 bg-gray-100 p-4 font-medium">
//                   {dayData.day}
//                 </td>
//                 <td className="border border-gray-300 p-4">{item.label}</td>
//                 <td className="border border-gray-300 p-4 text-center">
//                   {item.value}
//                 </td>
//                 <td className="border border-gray-300 p-4 text-center">
//                   {item.max}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TallyDataTable;

