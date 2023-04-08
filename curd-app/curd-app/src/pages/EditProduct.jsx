import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/product/action";

function EditProduct() {
  let param = useParams();
  let [data, setData] = useState({});
  let [success, setSuccess] = useState(false);
  let dispatch = useDispatch();
  let { products } = useSelector((state) => {
    return state.productReducer;
  });
  let handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(data, param.id)).then(() => setSuccess(true));
  };
  useEffect(() => {
    let datas = products.find((el) => el.id == +param.id);
    setData(datas);
  }, []);
  return (
    <Box>
      <form onSubmit={handleSubmit}>
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
            Edit Product : {param.id}
          </Text>
          <Text fontWeight={700}>{success && "Product Edited Sucessfully!!!"}</Text>
          <Input
            type={"text"}
            placeholder="image"
            marginBottom={5}
            name={"img"}
            onChange={handleChange}
            value={data.img}
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
            Edit Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EditProduct;
