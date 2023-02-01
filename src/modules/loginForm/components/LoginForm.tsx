import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import { fetchLogin } from "../store/actions";

type FormData = {
  userName: string;
  password: string;
};

export const LoginForm = () => {
  const error = useAppSelector((state) => state.loginReducer.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = handleSubmit((data) => {
    dispatch(
      fetchLogin({ name: data.userName, password: data.password }, navigate)
    );
    reset();
  });

  return (
    <Grid
      container
      direction="column"
      rowGap={2}
      style={{ maxWidth: "350px", minWidth: "100px" }}
      justifyContent="center"
      alignItems="center"
      component="form"
      onSubmit={onSubmit}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        fullWidth
        error={!!errors?.userName}
        id="standard-basic"
        {...register("userName", { required: "Required field!" })}
        helperText={errors?.userName?.message}
        label="Username"
        type='text'
        variant="standard"
      />
      <TextField
        fullWidth
        error={!!errors?.password}
        id="standard-basic"
        {...register("password", { required: "Required field!" })}
        helperText={errors?.password?.message}
        type='password'
        label="Password"
        variant="standard"
      />
      {error ? <span className="form-error">{error}</span> : null}
      <Button sx={{ m: "1.5rem" }} variant="contained" type="submit">
        Login
      </Button>
      <span>
        No account? <NavLink to="/registration">Registration</NavLink>
      </span>
    </Grid>
  );
};
