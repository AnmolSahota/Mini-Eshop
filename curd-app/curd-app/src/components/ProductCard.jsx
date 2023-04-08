import { Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ img, price, brand, gender, title, discount, id }) {
  return (
    <GridItem border={"1px solid gray"} padding={"10px"}>
      <Image src={img}></Image>
      <Text fontWeight={700}>{title}</Text>
      <Text fontWeight={600}>Price : {price}</Text>
      <p>Brand : {brand}</p>
      <p>discount : {discount}</p>
      <p>Catogory : {gender}</p>
      <Button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </Button>
    </GridItem>
  );
}

export default ProductCard;
