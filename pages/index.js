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
          Hi ! I am a blockchain developper, currently in Dublin, Irland !
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nathan Gardet-Derc
            </Heading>
            <p>Blockchain developper - Rust & Solidity</p>
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
            Biography
          </Heading>

          <Paragraph>
            21 years old computer science student @ Dublin City University, I am passionated about CS, and more particulary, blockchain. I developped interest into the subject in the begining of 2021, and six months laster, started actually working on blockchains. I am one of the strong beliver that one day, blockchain technologie will be wildly used, decentralisation will be a standard, and decentralized cryptocurrency, like Bitcoin, will become the true &quot;peoples&apos;s currency".
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            My life
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Langon, in the south-west of France.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Discovered informatic, started developping an interest, as my friends were talking how great they were as &quot;hackers&quot;.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            I joined EPITECH, a developper school deliveing a master degree, where I could finaly transform this interest and passion into actual lines of code.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            I worked for the first time in a entreprise, as a web developper, discovering the professional world.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started to take interest in blockchain technologies, reading books, making exercices... and learning rust, that became my favourite programmation language
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            My interests
          </Heading>
          <Paragraph>Innovation, Rust, Neovim, Blockchain (obviously), Space</Paragraph>
          <Paragraph>And Sports ! Climbing, MMA, Subdiving, Caving, Airsoft... I like moving :)</Paragraph>
        </Section>
        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            Do not hesitate to add me on my networks !
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
