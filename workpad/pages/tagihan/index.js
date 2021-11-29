import React from "react";
import Navbar from "../../components/Navbar";
import { Tab, Tabs, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import LaporanTable from "../../components/LaporanTable";
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
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/jadwal/my",
    options
  );
  const { data } = await res;
  return {
    props: { user, token, data }, // Will be passed to the page component as props
  };
}
*/

export default function Tagihan() {
  return (
    <Navbar>
      <LaporanTable /*data={data}*/ />
    </Navbar>
  );
}

Tagihan.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
}