import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./Card.css";
function Card() {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to="#/">
                <Image className="image" src="https://i.pinimg.com/564x/95/44/88/954488e0c0e912d6ea71330536a06f2f.jpg" alt="product" />

                <Box p="6">
                    <Box d="plex" alignItems="baseline">
                        20.11.2022
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Nike Air Force 1 '07
                    </Box>
                    <Box>₺2.599,90</Box>

                </Box>
            </Link>
            <Button colorScheme="gray">Add To Basket</Button>
        </Box>
    )
}

export default Card
