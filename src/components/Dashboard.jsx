"use client";

import React from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
import { allData } from "@/app/data/data_faysal";
import dynamic from "next/dynamic";
import TallyDataTable from "./TallyDataTable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./TabButton";
import FinalReportTable from "./FinalReportTable";

const Dashboard = () => {
  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;

  let dashboardData = userEmail ? allData[userEmail] : null;

  // console.log("Dashboard:", dashboardData.TallyData[0].data);
  // return;

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No data available for the current user.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="grow grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
          <AmoliChart
            data={dashboardData?.AmoliChartData || []}
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />

          <TalimDonutChart
            data1={dashboardData?.TalimDonutChartData1 || []}
            data2={dashboardData?.TalimDonutChartData2 || []}
            innerRadius={50}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
          />

          {dashboardData?.TallyData?.map((data, index) => (
            <Tally key={index} data={data} />
          )) || <p>No Tally data available</p>}
        </div>
      </div>
      {/* <div className="border">
        <TallyDataTable tallyData={dashboardData.TallyData[0].data} />
      </div> */}

      <div className="border border-[#155E75] overflow-y-auto">
        <Tabs defaultValue="Amolimusahaba" className="w-full p-4">
          <TabsList className="flex justify-center">
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

// export default Dashboard;
export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
