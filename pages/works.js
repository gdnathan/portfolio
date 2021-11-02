import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"
import thumbTerrare from '../public/images/work/Terrare.png'

const Works = () => {
  return (
    <Layout>
      <Container maxW="xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Travaux
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <WorkGridItem id="terrare" title="Terrare" thumbnail={thumbTerrare}>
              Une marketplace NFTs mettant en relation des investisseurs, des organisations environnementales et des artistes engagés.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
