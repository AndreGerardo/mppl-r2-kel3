import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import PropTypes from "prop-types";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hai manager!</h1>
        <div>
          <div>
            <Link href="/">
              <h3>First Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}