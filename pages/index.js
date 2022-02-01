import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Button,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container maxW="xl">
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
            Biographie
          </Heading>

          <Paragraph>
            Étudiant de 20 ans à Epitech Bordeaux, j&apos;étudie avec l&apos;ardeur de mes ambitions, tout en cultivant ma passion pour l&apos;informatique, en vue de l&apos;optention de mon titre d&apos;Expert en Technologie de L&apos;information. Je suis également l&apos;un des créateurs de {' '}
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
            Chroniques
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Né a Langon, France
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Découvre le monde de l&apos;informatique au lycée, et développe une passion pour le développement.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Rejoins EPITECH, l&apos;école de l&apos;innovation et de l&apos;expertise informatique afin de décrocher un Titre RNCP d&apos;expert en informatique (Niveau 1).
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Travaille pour la première fois dans une entreprise informatique, et découvre le développement web, pendant 6 mois sur un projet d'envergure.
          </BioSection>
          <BioSection>
            <BioYear>2021 à aujourd&apos;hui</BioYear>
            Travaille en tant que freelance, sur de nombreuses technologies.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Ce que j&apos;aime
          </Heading>
          <Paragraph>Innovation, Escalade, Vim, Musique, Jeux vidéos, Parkour</Paragraph>
        </Section>
        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            Aussi présent sur les réseaux!
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/gdnathan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/NathanGD" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/nathan-gardet-derc/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
