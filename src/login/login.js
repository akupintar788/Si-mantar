import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import InputBarang from "../Data Peminjaman/InputBarang";

function Login() {
  const navigate = useNavigate(); // Menggunakan hook useNavigate untuk navigasi

  const handleSubmit = (event) => {
    event.preventDefault(); // Hindari perilaku bawaan submit

    // Lakukan tindakan setelah tombol "Login" ditekan
    // Anda dapat menambahkan kode di sini untuk memproses data login, dll.

    // Navigasi ke halaman InputBarang
    navigate("/InputBarang");
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Form | Dan Aleko</title>
        <link rel="stylesheet" href="login.css" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bodylogin">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1 className="h1login">Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button onClick={InputBarang} type="submit" className="btn">
  Login
</button>
            <div className="register-link">
           
            </div>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Login;
