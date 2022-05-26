import React from "react";
import { useForm } from "react-hook-form";
import userApi from "../../common/apis/userApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./Style";

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email_data = data.email;
    const password_data = data.password;
    let items = { email: email_data, password: password_data };
    let response = await userApi.post(`login`, items).catch((error) => {
      toast.error("Correo y/o Contraseña Incorrectos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    });
    if (response.data.token !== "" || response.data.token !== null) {
      toast.success("Iniciando sesión", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } else {
      toast.error("Correo y/o Contraseña Incorrectos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Container>
      <div className="containerHome">
        <ToastContainer />
        <div className="form-login">
          <div class="login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label-header">Login</label>
              <div>
                <p>
                  <input
                    name="email"
                    className="input"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <label className="text-danger">
                      El correo es obligatorio
                    </label>
                  )}
                </p>
              </div>
              <div>
                <p>
                  <input
                    name="password"
                    className="input"
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                  />
                  {errors.password && (
                    <label className="text-danger">
                      La contraseña es obligatoria
                    </label>
                  )}
                </p>
              </div>
              <button className="btn">Login</button>
              <label className="label-footer">Forgot your password?</label>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
