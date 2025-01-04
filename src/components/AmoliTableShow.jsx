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

"use client";
import React, { useState, useEffect } from "react";

const AmoliTableShow = ({ userData }) => {
  const [monthDays, setMonthDays] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [transposedData, setTransposedData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // Map for translating labels to Bangla

  // console.log("UserData:", userData.labelMap);
  // return;

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
    console.log("Labels:", labels);
    // return;

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
          <tr className="bg-gray-200 px-4">
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
          {transposedData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-6 py-2 font-medium whitespace-nowrap">
                {row.label}
              </td>
              {monthDays.map((day) => (
                <td
                  key={day}
                  className="border border-gray-300 px-6 py-2 text-center"
                >
                  {row[day]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmoliTableShow;
