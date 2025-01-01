"use client";

import ReportTable from "@/components/ReportTableMonthly";
import ReportTableYearly from "@/components/ReportTableYearly";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./TabButton";

const FinalReportTable = () => {
  return (
    <div>
      <Tabs defaultValue="report" className="w-full p-4">
        <TabsContent value="report">
          <div className="bg-gray-50 rounded shadow">
            <Tabs defaultValue="monthly" className="w-full p-4">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="monthly">মাসিক</TabsTrigger>
                  <TabsTrigger value="yearly">বাঁৎসরিক</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly">
                <div>
                  <ReportTable />
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div>
                  <ReportTableYearly />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinalReportTable;
