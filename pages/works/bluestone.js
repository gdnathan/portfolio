import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
    <Layout title="BlueStone">
      <Container maxW="xl">
        <Title>
          BlueStone <Badge>2021</Badge>
        </Title>
        <P>
            Une landing page présentant BlueStone, une collaboration de deux freelance, dont un web (moi), et une
            en marketing.
      <br />
      <br />
      C&apos;est à travers ce site que nos clients entrent en premier contact avec nous, et découvrent nos offres.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Type</Meta>
            <span>Landing page</span>
          </ListItem>
          <ListItem>
            <Meta>Site web</Meta>
            <Link href="https://bluestone.vercel.app" target="_blank">bluestone.vercel.app<ExternalLinkIcon /></Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js - Next.js</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work

