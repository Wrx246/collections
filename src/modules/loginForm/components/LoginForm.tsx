import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
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
      <Typography variant="h4">
        <FormattedMessage id="app.login-page.header" />
      </Typography>
      <TextField
        fullWidth
        error={!!errors?.userName}
        id="standard-basic-user"
        {...register("userName", { required: "Required field!" })}
        helperText={errors?.userName?.message}
        label={<FormattedMessage id="app.login-page.user-name" />}
        type='text'
        variant="standard"
      />
      <TextField
        fullWidth
        error={!!errors?.password}
        id="standard-basic-password"
        {...register("password", { required: "Required field!" })}
        helperText={errors?.password?.message}
        type='password'
        label={<FormattedMessage id="app.login-page.password" />}
        variant="standard"
      />
      {error ? <span style={{ color: 'red' }}>{error}</span> : null}
      <Button sx={{ m: "1.5rem" }} variant="contained" type="submit">
        <FormattedMessage id="app.login-page.button" />
      </Button>
      <span>
        <FormattedMessage id="app.login-page.text" /> <NavLink to="/registration"><FormattedMessage id="app.login-page.link" /></NavLink>
      </span>
    </Grid>
  );
};
