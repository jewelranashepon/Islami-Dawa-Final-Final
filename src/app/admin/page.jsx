// import CombineDashboard from "@/components/CombineDashboard";
// import Dashboard from "@/components/Dashboard";
// import ReportTable from "@/components/ReportTableMonthly";
// import React from "react";

// const page = () => {

//   return (
//     <div className="flex flex-col h-screen gap-2">
//       <CombineDashboard />
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";

// Import data for Faysal and Jewel
import { allData } from "@/app/data/data_faysal";

import { useSelectedUser } from "@/providers/treeProvider";
import ReportTable from "@/components/ReportTableMonthly";

import { aggregateUserData } from "@/components/MergedFunction";
import TallyDataTable from "@/components/TallyDataTable";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/TabButton";
import FinalReportTable from "@/components/FinalReportTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/TabButton";
import {  userAmoliData } from "../data/amoliMuhasabaUserData";


const Dashboard = () => {
  const { selectedUser } = useSelectedUser();

  console.log("User: ", selectedUser);

  // const userEmail = localStorage.getItem("userEmail");
  const userEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("userEmail")
      : "moni@gmail.com";

  let dashboardData;

  if (selectedUser === "rifat@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "akash@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "toyon@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "zisan@gmail.com") {
    dashboardData = aggregateUserData(
      ["faysal@gmail.com", "jewel@gmail.com"],
      allData
    );
  } else if (selectedUser === "tauhid@gmail.com") {
    dashboardData = aggregateUserData(
      ["riyad@gmail.com", "nazmul@gmail.com"],
      allData
    );
  } else if (selectedUser === "sadman@gmail.com") {
    dashboardData = aggregateUserData(
      ["ripon@gmail.com", "sumon@gmail.com"],
      allData
    );
  } else if (selectedUser === "saurav@gmail.com") {
    dashboardData = aggregateUserData(
      ["taskin@gmail.com", "shoriful@gmail.com"],
      allData
    );
  } else if (selectedUser === "taijul@gmail.com") {
    dashboardData = aggregateUserData(
      ["mehedi@gmail.com", "masum@gmail.com"],
      allData
    );
  } else if (selectedUser === "ripon@gmail.com") {
    dashboardData = aggregateUserData(
      ["amirul@gmail.com", "jahidul@gmail.com"],
      allData
    );
  } else if (selectedUser === "tamim@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "aftab@gmail.com") {
    dashboardData = aggregateUserData(
      ["javed@gmail.com", "ashraful@gmail.com"],
      allData
    );
  } else if (selectedUser === "salek@gmail.com") {
    dashboardData = aggregateUserData(
      ["mehmed@gmail.com", "osman@gmail.com"],
      allData
    );
  } else if (selectedUser === "hridoy@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "tanzid@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "estiak@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "shezaan@gmail.com") {
    dashboardData = aggregateUserData(
      ["imad@gmail.com", "naim@gmail.com"],
      allData
    );
  } else if (selectedUser === "mughdo@gmail.com") {
    dashboardData = aggregateUserData(
      ["sayeed@gmail.com", "sajeeb@gmail.com"],
      allData
    );
  } else if (selectedUser === "liton@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "mahfuz@gmail.com") {
    dashboardData = aggregateUserData(
      ["sarjees@gmail.com", "rafi@gmail.com"],
      allData
    );
  } else if (selectedUser === "asif@gmail.com") {
    dashboardData = aggregateUserData(
      ["nahid@gmail.com", "hasnat@gmail.com"],
      allData
    );
  } else if (selectedUser === "shakil@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "saif@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "babor@gmail.com") {
    dashboardData = aggregateUserData(
      ["rizwan@gmail.com", "shaheen@gmail.com"],
      allData
    );
  } else if (selectedUser === "nasim@gmail.com") {
    dashboardData = aggregateUserData(
      ["ameer@gmail.com", "hasnain@gmail.com"],
      allData
    );
  } else if (selectedUser === "raju@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "imran@gmail.com") {
    dashboardData = aggregateUserData(
      ["rashid@gmail.com", "gurbaz@gmail.com"],
      allData
    );
  } else if (selectedUser === "faruque@gmail.com") {
    dashboardData = aggregateUserData(
      ["omarzai@gmail.com", "nazibullah@gmail.com"],
      allData
    );
  } else if (selectedUser === "mezbah@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "pollob@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "ratul@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "moni@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (!selectedUser) {
    dashboardData = allData[userEmail];
  } else {
    dashboardData = allData[selectedUser];
  }

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No data available for the current user.</p>
      </div>
    );
  }
  // return null;

  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* Dashboard Main Content */}
        <div className="grow grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
          <AmoliChart
            data={dashboardData.AmoliChartData}
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />

          <TalimDonutChart
            data1={dashboardData.TalimDonutChartData1}
            data2={dashboardData.TalimDonutChartData2}
            innerRadius={45}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          />

          {dashboardData.TallyData.map((data, index) => (
            <Tally key={index} data={data} />
          ))}
        </div>

        {/* <div className="border rounded-lg">
        <ReportTable />
      </div> */}
      </div>

      {/* <TallyDataTable tallyData={dashboardData.TallyData[0].data} /> */}
      <div className="border border-[#155E75] overflow-y-auto">
        <Tabs defaultValue="Amolimusahaba" className="w-full p-4">
          <TabsList className="flex justify-between">
            <TabsTrigger value="Amolimusahaba">Amolimusahaba</TabsTrigger>
            <TabsTrigger value="moktob">Moktob Bisoy</TabsTrigger>
            <TabsTrigger value="talim">Talim Bisoy</TabsTrigger>
            <TabsTrigger value="daye">Daye Bisoy</TabsTrigger>
            <TabsTrigger value="dawati">Dawati Bisoy</TabsTrigger>
            <TabsTrigger value="dawatimojlish">Dawati Mojlish</TabsTrigger>
            <TabsTrigger value="jamat">Jamat Bisoy</TabsTrigger>
            <TabsTrigger value="dinefera">Dine Fire Asa</TabsTrigger>
            <TabsTrigger value="sofor">Sofor Bisoy</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="Amolimusahaba">
            <div className="bg-gray-50 rounded shadow">
              {/* <FinalReportTable /> */}
              {/* <FinalReportTable/> */}
              {/* <div className="border">
                <TallyDataTable tallyData={userAmoliData["jewel@gmail.com"]} />
              </div> */}
            </div>
          </TabsContent>
          <TabsContent value="moktob">
            <div className="bg-gray-50 rounded shadow">
              {/* <FinalReportTable /> */}
              <div className="border">
                <TallyDataTable tallyData={dashboardData.TallyData[0].data} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="talim">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="daye">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="dawati">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="dawatimojlish">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="jamat">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="dinefera">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
          <TabsContent value="sofor">
            <div className="bg-gray-50 rounded shadow">
              <FinalReportTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
