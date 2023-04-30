import {format} from 'date-fns';
// import FilterColumn from './FilterColumn'
//This is a component with a search input a prop of column which is destructured in filterValue and setFilter as the value and onChange handler respectively. 
export const COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id"
  },
{  
  Header: "Name",
  Footer: "Name",
  columns: 
  [{
      Header: "First Name",
      Footer: "First Name",
      accessor: "first_name",
    //   Filter: FilterColumn,
  },{
      Header: "Last Name",
      Footer: "Last Name",
      accessor: "last_name",
    //   Filter: FilterColumn
  }],
},{
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    // Filter: FilterColumn
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    Cell: ({value})=> format(new Date(value), 'dd/mm/yyyy')
  }
]
//Note that the data to be displayed is gotten from a JSON file. Header is going to the title if the column while accessor is going to be the key in the JSON array.