import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
    <Layout title="BlueStone">
      <Container maxW="xl">
        <Title>
          Substrate Tutorials <Badge>2022</Badge>
        </Title>
        <P>
          A series of exercices for developers willing to learn the basics of Substrate development and broaden their skillsets through real-world use cases.
          <br />
          <br />
          I contributed multiple time to this projects, from simply refactoring exercices to actually making some exercices. This repo got a grant from the Web3 fundation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Type</Meta>
            <span>substrate pallets</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/rusty-crewmates/substrate-tutorials" target="_blank">Repository <ExternalLinkIcon /></Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Substrate (Rust)</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work



