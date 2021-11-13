import { Button, Grid, Typography } from "@material-ui/core";
import styles from '../styles/MainCard.module.css'
import axios from "axios"

const MainCard = (props) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant='h3' color='secondary'>{'Pendapatan (Hari Ini)'}</Typography>
                        <br />
                        <Typography>{'Rp. 0,00'/* props.data['PendapatanHarian'] */}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h2'>{'Bulanan'}</Typography>
                        <br />
                        <Typography>{'Rp. 32.000.000,00'/* props.data['PendapatanBulanan'] */}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainCard;