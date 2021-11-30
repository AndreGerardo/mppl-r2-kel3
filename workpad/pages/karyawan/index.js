import React from "react";
import Navbar from "../../components/Navbar";
import { Tab, Tabs, Box, Typography, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import KaryawanTable from "../../components/KaryawanTable";
import TaskTable from "../../components/TaskTable";
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Karyawan() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Navbar>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Karyawan" {...a11yProps(0)} />
                <Tab label="Task" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
          >
            <Grid item xs={15}>
              <Button
              variant="contained"
              href="/tambahKaryawan"
              color="secondary"
              margin="normal"
              >
                Tambah Karyawan
              </Button>
            </Grid>
            <Grid item xs={15}>
              <KaryawanTable /*data={data}*/ />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
          >
            <Grid item xs={15}>
              <Button
              variant="contained"
              href="/transaksi/TaskForm"
              color="secondary"
              margin="normal"
              >
                Tambah Task
              </Button>
            </Grid>
            <Grid item xs={15}>
              <TaskTable /*data={data}*/ />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Navbar>
  );
}

Karyawan.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  data: PropTypes.object,
}