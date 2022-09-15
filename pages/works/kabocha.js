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
          Kabocha <Badge>2022</Badge>
        </Title>
        <P>
          A Substrate blockchain aiming at creative projects that make waves, retaining genesis assets, shares and rights in the projects. Like a Web3 version of Disney.
          <br />
          <br />
          I started contributing to this chain in march 2022, building pallets like the well-known
          <Link href="https://github.com/kabocha-network/pallet_supersig" target="_blank"> pallet_supersig </Link>
          that the Web3 fundation and edgeware funded.
          I then participed the the active launch of the chain, working on assets distributions, pallet integreation, and versioning
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Type</Meta>
            <span>substrate parachain & pallets</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.kabocha.network/" target="_blank">official kabocha website <ExternalLinkIcon /></Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/kabocha-network/parachain" target="_blank">kabocha chain <ExternalLinkIcon /></Link>
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


