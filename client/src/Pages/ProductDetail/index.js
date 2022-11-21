import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from '../../api';
import { Box, CardBody, Card, GridItem, Text, Button, Stack, Heading, CardFooter, Grid } from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import './productdetail.css';


function ProductDetail() {
    const { product_id } = useParams();

    const { isLoading, error, data } = useQuery(['product', product_id], () =>
        fetchProduct(product_id)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }
    console.log(data)

    const images = data.photos.map((url) => ({ original: url }));


    return <div>


        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Grid templateColumns='repeat(5, 1fr)' gap={5} >
                <GridItem colSpan={2}>
                    <Box marginTop="20" marginRight="5"
                        marginLeft="5"
                    >
                        <ImageGallery
                            objectFit='cover'
                            maxW={{ base: '100px', sm: '100px' }}
                            items={images}
                            alt="products"
                            borderRadius="10"
                            showThumbnails="false"
                        />
                    </Box>
                </GridItem>

                <GridItem colSpan={3}>
                    <Stack>
                        <CardBody>
                            <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
                            <Heading size='md'>{data.title}</Heading>

                            <Text py='2'>
                                {data.description}
                            </Text>

                        </CardBody>

                        <CardFooter>
                            <Button colorScheme="teal" variant="solid" >Add to Basket</Button>
                        </CardFooter>
                    </Stack>
                </GridItem>
            </Grid>
        </Card>

    </div >;
}


export default ProductDetail;
