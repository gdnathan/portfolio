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
import thumbBlueStone from '../public/images/work/Bluestone.png'

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
          <Section>
            <WorkGridItem id="bluestone" title="BlueStone" thumbnail={thumbBlueStone}>
              Un site de présentation de BlueStone, une association de deux freelances web et marketing
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
