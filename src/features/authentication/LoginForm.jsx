import { TextField, Button, Container, Grid, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { register, formState, handleSubmit, getValues, reset, setError } =
    useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  async function onSubmit(data) {}
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-3">
        <header className=" text-center text-blue-400 text-3xl font-bold  mb-10 mt-5  ">
          Welcome Back
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                type="text"
                size="small"
                name="username"
                id="username"
                label="Username"
                variant="outlined"
                fullWidth={true}
                error={errors?.username?.message}
                helperText={errors?.username?.message}
                {...register("username", {
                  required: "This Field is required",
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                size="small"
                name="password"
                id="password"
                label="Password"
                variant="outlined"
                fullWidth={true}
                error={errors?.password?.message}
                helperText={errors?.password?.message}
                {...register("password", {
                  required: "This Field is required",
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth={true}>
                Log in
              </Button>
            </Grid>
            <Grid className="text-center" item xs={12}>
              <span>OR</span>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/siginup");
                }}
                variant="outlined"
                fullWidth={true}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
