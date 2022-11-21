import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel } from '@chakra-ui/react';


function SignIn() {
    return (
        <Flex align="center" justifyContent="center" width="full">
            <Box pt={10}>
                <Box textAlign="center">
                    <Heading>Sign In</Heading>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignIn
