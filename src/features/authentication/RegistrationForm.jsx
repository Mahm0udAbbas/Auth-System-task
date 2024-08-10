import React from "react";
import { TextField, Button, Container, Grid, Paper, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const { register, formState, handleSubmit, getValues, reset, setError } =
    useForm();
  const navigate = useNavigate();
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      const res = await registerUser(data, setError);
      console.log(res);
      if (res.status === true) {
        toast.success(res?.message.en);
        navigate("/login");
        reset();
      } else {
        toast.error(res?.message.en);
      }
    } catch (err) {}
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="p-3">
        <header className=" text-blue-400 text-3xl font-bold  mb-10   ">
          HI,Register
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="firstname"
                id="firstname"
                size="small"
                label="Firstname"
                variant="outlined"
                fullWidth={true}
                error={errors?.first_name?.message}
                helperText={errors?.first_name?.message}
                {...register("first_name", {
                  required: "This Field is required",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                size="small"
                name="lastname"
                id="lastname"
                label="Lastname"
                variant="outlined"
                error={errors?.last_name?.message}
                helperText={errors?.last_name?.message}
                fullWidth={true}
                {...register("last_name", {
                  required: "This Field is required",
                })}
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                size="small"
                name="phone"
                id="phone"
                label="Phone"
                variant="outlined"
                fullWidth={true}
                helperText={errors?.phone?.message}
                error={errors?.phone?.message}
                {...register("phone", {
                  required: "This Field is required",
                  minLength: {
                    value: 7,
                    message: "phone number a minimum of 7 characters",
                  },
                  maxLength: {
                    value: 11,
                    message: "phone number needs a maximum of 11 characters",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                size="small"
                name="email"
                id="email"
                label="Email"
                variant="outlined"
                fullWidth={true}
                error={errors?.email?.message}
                helperText={errors?.email?.message}
                {...register("email", {
                  required: "This Field is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Invalid email address",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                size="small"
                name="username"
                id="username"
                label="username"
                variant="outlined"
                fullWidth={true}
                error={errors?.username?.message}
                helperText={errors?.username?.message}
                {...register("username", {
                  required: "This Field is required",
                  minLength: {
                    value: 3,
                    message: "username needs a minimum of 3 characters",
                  },
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
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter,one special character",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="confirmedPass"
                size="small"
                id="confirmedPass"
                label="Password Confimation"
                variant="outlined"
                fullWidth={true}
                error={errors?.password_confirmation?.message}
                helperText={errors?.password_confirmation?.message}
                {...register("password_confirmation", {
                  required: "This Field is required",
                  validate: (value) =>
                    getValues().password === value || "password dose not match",
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" fullWidth={true}>
                Sign Up
              </Button>
            </Grid>
            <Grid className="text-center" item xs={12}>
              <span>already have email </span>
              <Link>
                <NavLink to={"/login"}>login</NavLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
