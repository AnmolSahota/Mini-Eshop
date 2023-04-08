import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/action";
let initialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};
function Admin() {
  let [data, setData] = useState(initialState);

  let dispatch = useDispatch();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleaddProduct = (e) => {
    e.preventDefault();
    setData(initialState);
    dispatch(addProduct(data));
  };
  return (
    <Box>
      <form onSubmit={handleaddProduct}>
        <Box
          width={"40%"}
          m="auto"
          border={"1px solid gray"}
          padding={5}
          marginTop={30}
          paddingBottom={50}
          borderRadius={10}
        >
          <Text fontWeight={700} fontSize={"20px"} marginBottom={3}>
            Add Product
          </Text>
          <Input
            type={"text"}
            placeholder="image"
            marginBottom={5}
            name={"image"}
            onChange={handleChange}
            value={data.image}
          />
          <Input
            type={"text"}
            placeholder="Name"
            marginBottom={6}
            name={"title"}
            onChange={handleChange}
            value={data.title}
          />
          <Input
            type={"number"}
            placeholder="Price"
            marginBottom={6}
            name={"price"}
            onChange={handleChange}
            value={data.price}
          />
          <Input
            type={"text"}
            placeholder="Brand"
            marginBottom={6}
            name={"brand"}
            onChange={handleChange}
            value={data.brand}
          />
          <Input
            type={"text"}
            placeholder="Discount"
            marginBottom={6}
            name={"discount"}
            onChange={handleChange}
            value={data.discount}
          />
          <Select marginBottom={6} onChange={handleChange} name="gender">
            <option value={data.gender}>select gender</option>
            <option value={"male"}>Men</option>
            <option value={"female"}>Women</option>
            <option value={"kids"}>kids</option>
          </Select>
          <Button type="submit" w={"50%"}>
            Adf Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Admin;
