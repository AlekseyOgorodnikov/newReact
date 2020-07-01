import React from "react";
import classes from "./Login.modules.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Пароль"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
        запомнить
      </div>
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
  const onSubmit=(formData)=>{
    console.log(formData);
    
  }
  return (
    <div>
      <h1 className={classes.Login}>Войти в учетную запись</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
