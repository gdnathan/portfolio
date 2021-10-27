import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ childrens, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Nathan Gardet-Derc - Homepage</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {childrens}
            </Container>
        </Box>
    )
}

export default Main;
