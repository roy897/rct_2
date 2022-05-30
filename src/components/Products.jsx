import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination"
import Product from "./Product";
import { Flex, Grid, Spacer } from '@chakra-ui/react'


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
 


  return (
    <>
    <Flex border='1px solid'>
      {/*  AddProduct */}
      <Spacer/>
        <AddProduct/>
      <Spacer/>
      <Grid>
        {/* List of Products */}
        <Product/>

      </Grid>
      {/* Pagination */}
      <Pagination/>

    </Flex>
    </>
  );
};

export default Products;
