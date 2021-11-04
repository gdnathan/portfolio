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
          Une marketplace NFTs mettant en relation des investisseurs,
          des organisations environnementales et des artistes engagés.
          C&apos;est mon projet d&apos;étude, sur lequel je travaille avec 6 autres collègues.
          <br />
          <br />
          Nous avons pour mission d'améliorer le côté écologie des NFT !
          Le but est de proposer une marketplace de petites parcelles virtuelles sur lesquelles vous pourriez enchérir.
          Ces parcelles représenteraient de vrais terrains sur lesquels nous nous engagerions à reforester.
          <br />
          <br />
          Vous pouvez suivre l'avancement du projet sur notre page
          <Link href="https://www.linkedin.com/company/76188769" target="_blank"> LinkedIn</Link>
          , ou nous postons régulièrement.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Type</Meta>
            <span>Marketplace de NFTs</span>
          </ListItem>
          <ListItem>
            <Meta>Site web</Meta>
            <Link href="https://www.terrare.io" target="_blank">terrare.io<ExternalLinkIcon /></Link>
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
