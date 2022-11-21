import React from 'react'
import Card from '../../components/Card/index';
import { Grid } from '@chakra-ui/react';
import { useQuery } from 'react-query';



function Products() {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:4000/product').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    console.log(data)

    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {data.map((item, key) => (
                    <Card key={key} item={item} />
                ))}
            </Grid>

        </div>
    )
}

export default Products
