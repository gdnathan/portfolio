import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center">
          Bonjour! Je suis un développeur web basé a Bordeaux!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nathan Gardet-Derc
            </Heading>
            <p>Développeur software & web</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-pic.png"
              alt="image de profile" />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Travaux
          </Heading>

          <Paragraph>
            Étudiant de 20 ans à Epitech Bordeaux, j'étudie avec l'ardeur de mes ambitions, tout en cultivant ma passion pour l'informatique, en vue de l'optention de mon titre d'Expert en Technologie de L'information. Je suis également l'un des créateurs de {' '}
            <NextLink href="/works/terrare">
              <Link>Terrare</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Mon portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Né a Langon, France
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Rejoins EPITECH, l'école de l'innovation et de l'expertise informatique afin de décrocher un Titre RNCP d'expert en informatique (Niveau 1)
          </BioSection>
          <BioSection>
            <BioYear>2021 à aujourd'hui</BioYear>
            Travaille en tant que freelance
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Ce que j'aime
          </Heading>
          <Paragraph>Innovation, Escalade, Vim, Musique, Jeux vidéos, Parkour</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
