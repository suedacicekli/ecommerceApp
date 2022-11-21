import React from 'react';
import { Flex, Box, Heading, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import validationSchema from './validations';

function SignUp() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            console.log(values);
        },
    })

    return (
        <Flex align="center" justifyContent="center" width="full">
            <Box pt={10}>
                <Box textAlign="center">
                    <Heading>Sign Up</Heading>
                </Box>

                <Box my="10" textAlign="left">
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </FormControl>

                        <FormControl my="4">
                            <FormLabel>Password</FormLabel>
                            <Input
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                        </FormControl>

                        <FormControl my="4">
                            <FormLabel>Password Confirm</FormLabel>
                            <Input
                                name="passwordConfirm"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordConfirm} />
                        </FormControl>
                        <Button width="full" my="4" colorScheme="green" type="submit">Sign Up</Button>
                    </form>

                </Box>
            </Box>
        </Flex >
    )
}

export default SignUp
