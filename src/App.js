import React from "react";
// import { BasicTable } from "./BasicTable";
import { APIDataTable } from "./table/data-table";
import "./table/css/style.css";
import "./table/css/table.css";

export default function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      <APIDataTable />
    </div>
  );
}