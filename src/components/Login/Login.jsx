import React from "react";
import classes from "./Login.modules.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utills/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={Input} 
        validate={[required]}
        />
      </div>
      <div>
        <Field placeholder={"Пароль"} name={"password"} component={Input} 
        validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
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
