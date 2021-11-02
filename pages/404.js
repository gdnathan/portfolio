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
      <Heading as="h1">Vous vous êtes perdus!</Heading>
      <Text>La page que vous cherchez n&apos;existe pas.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retour a l&apos;accueil</Button>
        </NextLink>
      </Box>
    </Container>
  )

}

export default NotFound
