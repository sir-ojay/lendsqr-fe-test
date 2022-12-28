import * as React from "react";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormOrg from "../form/FormOrg";
import List from "../list/List";
import "./tableux.scss";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

// function createData(
//   orgName,
//   userName,
//   email,
//   phoneNumber,
//   createdAt,
//   employmentStatus
// ) {
//   return { orgName, userName, email, phoneNumber, createdAt, employmentStatus };
// }

// const rows = [
//   createData(
//     "orgName",
//     "userName",
//     "email",
//     "phoneNumber",
//     "createdAt",
//     "employmentStatus"
//   ),
//   createData(
//     "orgName",
//     "userName",
//     "email",
//     "phoneNumber",
//     "createdAt",
//     "employmentStatus"
//   ),
// ];

export default function StickyHeadTable() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRow] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const users = localStorage.getItem("users");
    if (!users) {
      fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("users", JSON.stringify(data));
          setRow(data);
        });
    } else {
      setRow(JSON.parse(users));
    }
  }, []);
  return (
    <div className="table--comp">
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="table--container"
      >
        <TableContainer sx={{ maxHeight: 640, minwidth: 350 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="tablerow">
                <TableCell className="tableCell">
                  ORGANZATION {}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
                <TableCell className="tableCell">
                  USERNAME{" "}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
                <TableCell className="tableCell">
                  EMAIL{" "}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
                <TableCell className="tableCell">
                  PHONE NUMBER{" "}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
                <TableCell className="tableCell">
                  DATE JOINED{" "}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
                <TableCell className="tableCell">
                  STATUS{" "}
                  <FilterListIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="ico"
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  console.log(row);
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {}
                      <TableCell key={Date.now()}>{row.orgName}</TableCell>
                      <TableCell key={Date.now()}>{row.userName}</TableCell>
                      <TableCell key={Date.now()}>{row.email}</TableCell>
                      <TableCell key={Date.now()}>{row.phoneNumber}</TableCell>
                      <TableCell key={Date.now()}>{row.createdAt}</TableCell>
                      <TableCell key={Date.now()}>
                        {row.education.employmentStatus}
                      </TableCell>

                      <TableCell key={Date.now()}>
                        <Link to={`/userdetails/${row.id}`}>
                          {" "}
                          <BsThreeDotsVertical
                            onClick={() => {
                              setOpenModal(!open);
                            }}
                          />
                        </Link>
                      </TableCell>
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {open ? <FormOrg /> : ""}
      {openModal ? <List /> : ""}
    </div>
  );
}
