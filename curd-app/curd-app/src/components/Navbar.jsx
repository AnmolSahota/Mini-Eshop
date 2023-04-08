import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Box padding={"30px 0px"} border="1px solid gray">
      <Text display={"inline"} fontWeight={700} marginRight={5}>
        Shopping app
      </Text>
      <Text
        marginRight={5}
        display={"inline"}
        fontWeight={300}
        textDecoration="underline"
      >
        <Link to={"/"}>Home</Link>
      </Text>
      <Text display={"inline"} fontWeight={300} textDecoration="underline" marginRight={5}>
        <Link to={"/login"}>Login</Link>
      </Text>
      <Text display={"inline"} fontWeight={300} textDecoration="underline">
        <Link to={"/admin"}>Admin</Link>
      </Text>
    </Box>
  );
}

export default Navbar;
