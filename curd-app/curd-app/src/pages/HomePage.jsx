import { Box } from "@chakra-ui/react";
import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"10% 1fr"}  marginLeft={5}>
        <SideBar />
        <ProductList />
      </Box>
    </>
  );
}

export default HomePage;
