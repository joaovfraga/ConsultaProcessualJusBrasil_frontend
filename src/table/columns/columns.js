import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "ID",
    accessor: "id"
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "DOB",
    Footer: "DOB",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    }
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone"
  },
  {
    Header: "Options",
    Footer: "Options",
    Cell: ({ value }) => {
      return <button onClick={(e) => console.log(e)}>Delete: {value}</button>;
    }
  }
];

export const GROUPED_COLUMN = [
  {
    Header: "Id",
    Footer: "ID",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "DOB",
        Footer: "DOB",
        accessor: "date_of_birth"
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
      }
    ]
  }
];
