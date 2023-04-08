import { Grid, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../redux/product/action";
import ProductCard from "./ProductCard";

function ProductList() {
  let dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  let products = useSelector((state) => {
    return state.productReducer.products;
  });
  useEffect(() => {
    let obj = {
      gender: searchParams.getAll("catogory"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      q: searchParams.get("q"),
    };
    dispatch(getData(obj));
  }, [location.search]);
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(3,1fr)"}
        gap={10}
        padding={35}
        m={"auto"}
      >
        {products.length > 0 &&
          products.map((el) => {
            return <ProductCard {...el} key={el.id} />;
          })}
      </Grid>
    </>
  );
}
export default ProductList;
