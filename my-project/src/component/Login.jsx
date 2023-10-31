import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../constant";
import { setToken, setUser} from "../helpers";
import {
      Alert,
      Button,
      Card,
      Col,
      Form,
      Input,
      message,
      Row,
      Spin,
      Typography,
    } from "antd";

const Login = () => {
  const navigate = useNavigate();
  // const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      console.log(value);
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      console.log(data);
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);
        setUser(data.user);

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const handleSubmit = () => {
  //   console.log("username: ", username);
  //   console.log("password: ", password);
  // };

  return (
    <div>
      <div className="bg-[#1A1C21] dark:bg-[#1A1C21]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-50" src={logo} alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <Form
                  name="basic"
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="Email address" />
                  </Form.Item>
    
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true }]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
    
                  <Form.Item>
                    <button
                      htmlType="submit"
                      className=" mt-3 w-full text-white border-2 border-[#F5B321] hover:bg-[#F5B321] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-[#F5B321] dark:focus:ring-blue-800"
                    >
                      Login {isLoading && <Spin size="small" />}
                    </button>
                  </Form.Item>
                </Form>
              <Link to={"/"}>
                <button className=" mt-3 w-full text-white border-2 border-[#F5B321] hover:bg-[#F5B321] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-[#F5B321] dark:focus:ring-blue-800">
                  Back
                </button>
              </Link>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link to={"/register"}>
                  <button className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Sign up
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
