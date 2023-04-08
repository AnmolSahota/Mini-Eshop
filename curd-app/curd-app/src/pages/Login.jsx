import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { login } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("eve.holt@reqres.in");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let state = useSelector((state) => state.authReducer.auth);
  let location = useLocation();
  let navigate = useNavigate();
  let handleLogin = (e) => {
    e.preventDefault();
    let obj = { email, password };
    dispatch(login(obj)).then(() => {
      navigate(location.state, { replace: true });
    });
    setPassword("");
  };
  return (
    <form onSubmit={handleLogin}>
      <Box
        width={"40%"}
        m="auto"
        border={"1px solid gray"}
        padding={5}
        marginTop={100}
        paddingBottom={50}
        borderRadius={10}
      >
        {state ? (
          <Text fontWeight={700} color="green">
            User Login Succesfully
          </Text>
        ) : (
          <Text fontWeight={700}>Login to continue</Text>
        )}
        <Text
          fontWeight={700}
          fontSize={"20px"}
          marginBottom={3}
          marginTop={30}
        >
          User Login
        </Text>
        <Input
          type={"email"}
          placeholder="Email"
          marginBottom={5}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder="Password"
          marginBottom={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" w={"50%"}>
          Login
        </Button>
      </Box>
    </form>
  );
}

export default Login;
