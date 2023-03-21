import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";

import { COLUMNS } from "./columns/data-columns";
import { GlobalFilter } from "./filter/filter";
export const APIDataTable = () => {
  const [data, setData] = useState([]);
  const [body,setBody] = useState({
    forum: "",
    cnj:""
  })

  const handleChangeCnj = (event) => {
    console.log({cnj:event})
      body.cnj = event;
  };

  const handleChangeForum =(event) =>{
    console.log({forum:event})
     body.forum = event
  }

  
  const getProcess = async() => {
    
     await axios.post( "http://localhost:3300/api/processes",{
      forum: body.forum,
      cnj: body.cnj
    }).then(response => { 
      
      setData(response.data);
    })
    .catch(error => {
      alert('error');
    });
  }
  

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: data
      
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    
  );

  const {
    getTableProps, 
    headerGroups, 
    getTableBodyProps, 
    prepareRow, 
    footerGroups,
    state,
    setGlobalFilter,
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setCnj={handleChangeCnj} setForum={handleChangeForum} />
      <button onClick={getProcess}>Send</button>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>

      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterGroupProps}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {" First "}
        </button>
        <button
          onClick={() => {
            previousPage();
          }}
          disabled={!canPreviousPage}
        >
          {" << "}
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          disabled={!canNextPage}
        >
          {" >> "}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {" Last "}
        </button>
      </div>
    </>
  );
};
