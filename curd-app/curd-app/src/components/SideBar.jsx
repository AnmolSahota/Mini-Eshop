import { Box, Input, Radio, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SideBar() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [text, setText] = useState(searchParams.getAll("catogory") || []);
  let [order, setSort] = useState(searchParams.get("order") || "");
  let [filter, setFilter] = useState("");
  let handlecheckBox = (e) => {
    if (text.includes(e.target.value)) {
      let arr = text.filter((el) => el != e.target.value);
      setText(arr);
    } else {
      setText([...text, e.target.value]);
    }
  };
  let handleRadio = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    let param = {
      catogory: text,
    };
    order && (param.order = order);
    filter && (param.q = filter);
    
    setSearchParams(param);
  }, [text, order,filter]);
  return (
    <Box display={"flex"} flexDirection="column" marginTop={10}>
      <Input
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      ></Input>
      <br />
      <br />
      <Text fontWeight={700}>Filter BY</Text>
      <div>
        <input
          type={"checkbox"}
          onChange={handlecheckBox}
          value={"male"}
          checked={searchParams.getAll("catogory").includes("male")}
        ></input>
        <label>Men</label>
      </div>
      <div>
        <input
          type={"checkbox"}
          onChange={handlecheckBox}
          value={"female"}
          checked={searchParams.getAll("catogory").includes("female")}
        ></input>
        <label>Women</label>
      </div>
      <div>
        <input
          type={"checkbox"}
          onChange={handlecheckBox}
          value={"kids"}
          checked={searchParams.getAll("catogory").includes("kids")}
        ></input>
        <label>Kids</label>
      </div>
      <br />
      <br />
      <div onChange={handleRadio}>
        <input
          type={"radio"}
          name={"sort"}
          value={"asc"}
          checked={order == "asc"}
        ></input>
        <label>Asecding</label>
        <br />
        <input
          type={"radio"}
          name={"sort"}
          value={"desc"}
          checked={order == "desc"}
        ></input>
        <label>Descending</label>
      </div>
    </Box>
  );
}

export default SideBar;
