import NextLink from 'next/link'
import {
  Container,
  Text,
  Heading,
  Box,
  Link,
  Divider,
  Button,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container maxW="xl" mt={3}>
      <Heading as="h1">You got lost !</Heading>
      <Text>This page doesnt exist.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Go back to Homepage</Button>
        </NextLink>
      </Box>
    </Container>
  )

}

export default NotFound
