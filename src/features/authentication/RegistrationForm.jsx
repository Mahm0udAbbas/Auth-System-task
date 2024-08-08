import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  Alert,
  Paper,
  Link,
} from "@mui/material";
export default function RegistrationForm() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-3">
        <header className="  text-blue-400 text-3xl font-bold mb-3">
          Sign Up
        </header>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Firstname"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Lastname"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
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
                label="Password"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Password Confimation"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth={true}>
                Sign Up
              </Button>
            </Grid>
            <Grid className="text-center" item xs={12}>
              <span>already have an email </span>
              <Link>login</Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
