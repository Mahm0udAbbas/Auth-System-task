import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  Alert,
  Paper,
} from "@mui/material";
export default function LoginForm() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-3">
        <header className=" text-center text-blue-400 text-3xl font-bold  mb-10 mt-5 ">
          Welcome Back
        </header>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth={true}>
                Log in
              </Button>
            </Grid>
            <Grid className="text-center" item xs={12}>
              <span>OR</span>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth={true}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
