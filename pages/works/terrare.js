import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Terrare">
      <Container maxW="xl">
        <Title>
          Terrare <Badge>2021</Badge>
          <Meta ml={1}>En cour</Meta>
        </Title>
        <P>
          Une marketplace NFTs mettant en relation des investisseurs, des organisations environnementales et des artistes engagés. C'est mon projet d'étude, sur lequel je travaille avec 6 autres collègues
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Type</Meta>
            <span>Marketplace de NFTs</span>
          </ListItem>
          <ListItem>
            <Meta>Site web</Meta>
            <Link href="terrare.io">terrare.io<ExternalLinkIcon /></Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>-</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
