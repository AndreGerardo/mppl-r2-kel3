import React from "react";
import Navbar from "../../components/Navbar";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import axios from "axios";

/*
export async function getServerSideProps(context) {
  const token = context.req.cookies["auth-token"];
  if (!token)
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  const user = JSON.parse(context.req.cookies["user"]);
  const { data } = await res;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}
*/

export default function Dashboard() {
  return (
    <Navbar>
      <Typography variant="h5" align="left">Dashboard</Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>Pendapatan (Hari ini)</Typography>
              <Typography variant="h5" component="div">{'Rp. 0,00'/* props.data['PendapatanHarian'] */}</Typography>
              <br />
              <Typography sx={{ fontSize: 22 }}>Bulanan :</Typography>
              <Typography variant="h5" component="div">{'Rp. 32.000.000,00'/* props.data['PendapatanBulanan'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>Pengeluaran (Hari ini)</Typography>
              <Typography variant="h5" component="div">{'Rp. 0,00'/* props.data['PengeluaranHarian'] */}</Typography>
              <br />
              <Typography sx={{ fontSize: 22 }}>Bulanan :</Typography>
              <Typography variant="h5" component="div">{'Rp. 32.000.000,00'/* props.data['PengeluaranBulanan'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>Saldo</Typography>
              <Typography variant="h5" component="div">{'RP. 22.000.000,00'/* props.data['Saldo'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>Karyawan</Typography>
              <Typography variant="h5" component="div">{'8'/* props.data['Karyawan'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>Events</Typography>
              <Typography variant="h5" component="div">{'2'/* props.data['Events'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            sx={{ minWidth: 300 }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 22 }}>My Task</Typography>
              <Typography variant="h5" component="div">{'8'/* props.data['Task'] */}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Navbar>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
}