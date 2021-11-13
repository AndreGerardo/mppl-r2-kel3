import React from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import PeopleIcon from "@material-ui/icons/People";
import Grid from "@material-ui/core/Grid";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ListAltRounded from "@material-ui/icons/ListAltRounded";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const mainItemManager = (
  <div>
    <Link href="/manager">
      <a>
        <ListItem button>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </a>
    </Link>

    <Link href="/manager/transaksi">
      <a>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Transaksi" />
        </ListItem>
      </a>
    </Link>
    <Link href="/manager/karyawan">
      <a>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Karyawan" />
        </ListItem>
      </a>
    </Link>
    <Link href="/manager/tagihan">
      <a>
        <ListItem button>
          <ListItemIcon>
            <ListAltRounded />
          </ListItemIcon>
          <ListItemText primary="Tagihan" />
        </ListItem>
      </a>
    </Link>
  </div>
);

export const mainItemUser = (
  <div>
    <Link href="/dashboard">
      <a>
        <ListItem button>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </a>
    </Link>

    <Link href="/transaksi">
      <a>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Transaksi" />
        </ListItem>
      </a>
    </Link>
    <Link href="/karyawan">
      <a>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Karyawan" />
        </ListItem>
      </a>
    </Link>
    <Link href="/tagihan">
      <a>
        <ListItem button>
          <ListItemIcon>
            <ListAltRounded />
          </ListItemIcon>
          <ListItemText primary="Tagihan" />
        </ListItem>
      </a>
    </Link>
  </div>
);
