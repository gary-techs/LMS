import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },

  {
    id: 'phone',
    label: 'Phone',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'requirement',
    label: 'Requirement',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 100,
    align: 'right',
  },

  {
    id: 'commentsA',
    label: 'Helpdesk Comments',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'commentsB',
    label: 'Executive Comments',
    minWidth: 170,
    align: 'right',
  },
  ,
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
  },
];

function createData (name,phone, email,address,city,requirement, commentsA, commentsB,status) { 
  return {name,phone, email,address,city,requirement, commentsA, commentsB,status}
}
const rows = [
  createData('Ravinder', '9899526425', 'abc@xyz.com', '12 Rajiv Nagar', 'Gurgaon', 'Looking For Flat', 'Comments Addd', 'Comments B', 'Interested'),
  createData('Ravinder', '9899526425', 'abc@xyz.com', '12 Rajiv Nagar', 'Gurgaon', 'Looking For Flat', 'Comments Addd', 'Comments B', 'Interested'),
  createData('Ravinder', '9899526425', 'abc@xyz.com', '12 Rajiv Nagar', 'Gurgaon', 'Looking For Flat', 'Comments Addd', 'Comments B', 'Interested'),
  createData('Ravinder', '9899526425', 'abc@xyz.com', '12 Rajiv Nagar', 'Gurgaon', 'Looking For Flat', 'Comments Addd', 'Comments B','Interested'),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440 
  },
  mainContainer: {
    "margin-top":100
  }
});

export default function StickyHeadTable () {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className={classes.mainContainer} component="main">
      <h1 > Customer Details </h1>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.slice(0,5).map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.slice(0,5).map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
    
  );
}
