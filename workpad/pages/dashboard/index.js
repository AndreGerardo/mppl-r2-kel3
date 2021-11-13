import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import MainContent from "../../components/MainContent";
import PropTypes from "prop-types";

export default function Dashboard() {
  return (
    <Navbar>
      <MainContent/>
    </Navbar>
  );
}