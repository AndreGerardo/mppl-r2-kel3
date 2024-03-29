import Grid from "@material-ui/core/Grid"
import LoginForm from "../components/LoginForm";
import FirebaseForm from "../components/FirebaseLoginForm";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Grid item xs={3}>
        <FirebaseForm />
      </Grid>
    </Grid>
  );
}