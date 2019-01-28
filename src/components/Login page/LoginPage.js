import React from "react";

// import { Form, Icon, Input, Button, Checkbox } from "antd";
import { auth, googleAuthProvider } from "../../api/firebaseApp";
import GoogleLogo from "../../Assets/Logos/GoogleLogo/GoogleLogo";
import { Divider } from "antd";
import "./LoginPage.css";

// import { NavLink } from "react-router-dom";
class LoginPage extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="form-login">
          <h1 className="Title">Table Tennis</h1>
          <Divider />
          <button
            type="submit"
            id="button"
            className="form-login"
            onClick={() => auth.signInWithPopup(googleAuthProvider)}
          >
            <GoogleLogo />
            <span className="login-text">Login with Google </span>
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;

// import React, { Component } from "react";
// import fire, { provider, session } from "../../api/firebaseApp";
// import { Divider } from "antd";
// import "./LoginPage.css";
// import GoogleLogo from "../../Assets/Logos/GoogleLogo/GoogleLogo";

// class Login extends Component {
//   state = {
//     isLoggedIn: true,
//     user: "",
//     token: "",
//     credential: ""
//   };

//   componentDidCatch() {
//     fire.auth().onAuthStateChanged(user => {
//       if (!user) {
//         this.setState({
//           userInTheHouse: false
//         });
//       } else {
//         console.log(user);
//         this.setState({
//           user: user,
//           token: user.refreshToken
//         });
//       }
//     });
//   }

//   login = e => {
//     e.preventDefault();
//     session
//       .then(() => {
//         return fire
//           .auth()
//           .signInWithPopup(provider)
//           .then(result => {
//             const token = result.credential.accessToken;
//             const credential = result.credential;
//             this.setState({
//               token: token,
//               user: result.user,
//               isLoggedIn: true,
//               credential: credential
//             });
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div className="Login">
//         <form className="form-login" onSubmit={e => this.login(e)}>
//           <h1 className="Title">Table Tennis</h1>
//           <Divider />
//           <button type="submit" id="button" className="form-login">
//             <GoogleLogo />
//             <span className="login-text">Login with Google </span>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;

// ====================

{
  /* <div className="login-page">
<Form onSubmit={this.handleSubmit} className="login-form">
  <FormItem>
    <Input
      prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
      placeholder="Username"
    />
  </FormItem>
  <FormItem>
    <Input
      prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
      type="password"
      placeholder="Password"
    />
  </FormItem>
  <FormItem>
    <Checkbox>Remember me</Checkbox>
    <a className="login-form-forgot" href="">
      Forgot password
    </a>
    <br />
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      style={{ marginRight: "35px" }}
    >
      <NavLink to="/home">Login</NavLink>
    </Button>
    Or <a href="">register now!</a>
  </FormItem>
</Form>
</div>
); */
}
