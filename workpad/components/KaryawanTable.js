import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableHead: {
    backgroundColor: "#fff",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#E5E5E5",
    margin: 0,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#000",
  },
  card: {
    marginLeft: 50,
    marginRight: 100,
  },
});

const KaryawanTable = ({ /*data*/ }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.header}>
        <Typography variant="h6">Daftar Karyawan</Typography>
      </Box>
      <CardContent>
        <TableContainer component={Paper} elevation={0}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Posisi</TableCell>
                <TableCell align="center">Alamat</TableCell>
                <TableCell align="center">Usia</TableCell>
                <TableCell align="center">Kontak</TableCell>
                <TableCell align="center">Opsi</TableCell>
              </TableRow>
            </TableHead>
            {/* data.map((d) => (
              <TableBody key={d.Karyawan}>
                {d.ListKaryawan.map((row) => (
                  <TableRow key={row.NamaKaryawan}>
                    <TableCell align="center" component="th" scope="row">{row.Nama "Andrew"}</TableCell>
                    <TableCell align="center">{row.Posisi "Marketing"}</TableCell>
                    <TableCell align="center">{row.Alamat "Bandung"}</TableCell>
                    <TableCell align="center">{row.Usia "27"}</TableCell>
                    <TableCell align="center">{row.Kontak "087787878787"}</TableCell>
                    <TableCell align="center">{row.Opsi "Ubah"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
                ))*/}
            
            {/* Hapus aja yang di bawah ini kalau udah connect BE */}
            <TableBody key={"Karyawan"}>
              <TableRow key={"row.NamaKaryawan"}>
                <TableCell align="center" component="th" scope="row">{"Andrew"}</TableCell>
                <TableCell align="center">{"Marketing"}</TableCell>
                <TableCell align="center">{"Bandung"}</TableCell>
                <TableCell align="center">{"27"}</TableCell>
                <TableCell align="center">{"087787878787"}</TableCell>
                <TableCell align="center">{"Ubah"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default KaryawanTable;