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
import thumbKabocha from '../public/images/work/Kabocha.png'
import thumbTutorials from '../public/images/work/Substrate Tutorials.png'

const Works = () => {
  return (
    <Layout>
      <Container maxW="xl">
        <Heading as="h3" fontSize={20} mb={4}>
          My works and contributions
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <WorkGridItem id="kabocha" title="Kabocha" thumbnail={thumbKabocha}>
              A Substrate blockchain aiming at creative projects that make waves, retaining genesis assets, shares and rights in the projects. Like a Web3 version of Disney.
            </WorkGridItem>
            <WorkGridItem id="substrate_tutorials" title="Substrate tutorials" thumbnail={thumbTutorials}>
              A series of exercices for developers willing to learn the basics of Substrate development and broaden their skillsets through real-world use cases.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
