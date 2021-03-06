import React from "react";
import classes from "./Login.modules.css";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utills/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("E-mail", "email", [required], Input)}
      {createField("Пароль", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        null,
        Input,
        { type: "checkbox" },
        "Запомнить"
      )}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input, {})}
      {error && <div className={styles.formError}>{error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxFrom = reduxForm({
  //unique name for form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1 className={classes.Login}>Войти в учетную запись</h1>
      <LoginReduxFrom onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
