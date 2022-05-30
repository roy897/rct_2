import React, { useEffect, useState } from "react";
import { Box, Heading, Stack, Tag, TagLabel, Image, Text } from '@chakra-ui/react'
import axios from "axios";

const Product = () => {

  const [data, setData] = useState([]);
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  
  useEffect(() =>{
    getDAta();
  },[])
  
  const getDAta = () => {   
   fetch(`http://localhost:8080/products`)
    .then((r)=> {
      return(r.json());
    })
    .then((d)=>{
      setData(d)
      console.log(d);
    })


  }

  return (
    <>
    {
      data.map((e)=>(
        <Stack data-cy="product" key={e.id}>
        <Image data-cy="product-image" src={e.imageSrc} />
        <Text data-cy="product-category">{e.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{e.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{e.title}</Heading>
        <Box data-cy="product-price">{e.price}</Box>
      </Stack>
      ))
    }
    
    </>
  );
};

export default Product;
