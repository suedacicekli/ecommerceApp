import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./Card.css";
import moment from "moment";

function Card({ item }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item._id}`}>
                <Image className="image" src={item.photos[0]} alt="product" loading="lazy" resizable="yes" />
                <Box p="6">
                    <Box d="plex" alignItems="baseline">
                        {moment(item.createdAt).format('DD.MM.YYYY')}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price}</Box>

                </Box>
            </Link>
            <Button colorScheme="gray">Add To Basket</Button>
        </Box>
    )
}

export default Card
