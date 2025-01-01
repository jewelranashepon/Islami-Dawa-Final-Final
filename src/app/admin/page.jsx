import CombineDashboard from "@/components/CombineDashboard";
import Dashboard from "@/components/Dashboard";
import ReportTable from "@/components/ReportTableMonthly";
import React from "react";

const page = () => {
  
  return (
    <div className="flex flex-col h-screen gap-2">
      <CombineDashboard />
    </div>
  );
};

export default page;
