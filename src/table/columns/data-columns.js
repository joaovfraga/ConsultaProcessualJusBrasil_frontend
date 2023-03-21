
import moment from 'moment';

export const COLUMNS = [
  {
    Header: "Data de inicio",
    idr:"createdAt",
   accessor: d => {
      return moment(d.updated_at)
        .local()
        .format("DD/MM/YYYY")
    },
  
},
    {
      Header: "Cnj",
      accessor: "cnj"
    },
    {
      Header: "Forum",
      accessor: "forum"
    },
    {
      Header: "Descricao",
      accessor: "histories",
      Cell: ({ row }) => {
          return (
               row.original.histories
                  .map((histories) => (
                      <div key={histories.id}>
                        <hr></hr>
                          <h4>{histories.description+"  (id do processo) ->"+histories.id}</h4>
                      </div>
                  ))
          );
      },
  },
  {
    Header: "Nome das Partes",
    accessor: "related_parts",
    Cell: ({ row }) => {
        return (
             row.original.related_parts
                .map((related_parts) => (
                    <div key={related_parts.id}>
                      <hr></hr>
                        <h4>{related_parts.name}</h4>
                    </div>
                ))
        );
    },
}
  ];
  