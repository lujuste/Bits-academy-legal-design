import { Flex, Heading, Grid, Icon, Text } from '@chakra-ui/react'
import BookIcon from './icons/BookIcon'
import SearchIcon from './icons/SearchIcon'
import CompaniesIcon from './icons/CompaniesIcon'
import CountryIcon from './icons/CountryIcon'
import PeoplesIcon from './icons/PeoplesIcon'

import Fade from 'react-reveal/Fade'

export default function WhoIsBits() {
  return (
    <Flex
      mt={['-5rem', '-5rem', '-5rem', '-5rem']}
      py="3.5rem"
      w="100%"
      bgColor="#F8F9FA"
      h="100%"
      mx="auto"
      justify="center"
    >
      <Flex justify="center" maxW="1440px" mx="auto" h="100%">
        <Flex justify="center" w="100%" mx="auto" flexDir="column">
          <Fade bottom>
            <Heading
              mx="auto"
              textAlign="center"
              fontFamily="Raleway"
              fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
              mb="3.5rem"
              fontWeight="600"
              maxW={['270px', '300px', '600px', '1090px']}
            >
              <Text color="pink.900" as="span">
                Quem
              </Text>{' '}
              é a Bits
            </Heading>
          </Fade>
          <Grid
            align="center"
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(5, 1fr)',
            ]}
            mx="auto"
            px="1rem"
            gap={['2', '2', '2', '5', '5']}
            mb="3rem"
          >
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <CountryIcon />
              </Fade>
              <Fade bottom>
                <Text>
                  Departamentos Jurídicos que querem melhorar a experiência do
                  cliente interno e externo.
                </Text>
              </Fade>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <CompaniesIcon />
              </Fade>
              <Fade bottom>
                <Text maxW="322px">
                  Escritórios de advocacia que querem trazer mais resultados
                  para os seus clientes e transformá-los em fãs.
                </Text>
              </Fade>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <PeoplesIcon />
              </Fade>
              <Fade bottom>
                <Text>
                  Equipes de órgãos públicos que querem trazer uma melhor
                  acessibilidade aos direitos.
                </Text>
              </Fade>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <SearchIcon />
              </Fade>
              <Fade bottom>
                <Text>
                  Equipes de órgãos públicos que querem trazer uma melhor
                  acessibilidade aos direitos.
                </Text>
              </Fade>
            </Flex>
            <Flex align="center" maxW="322px" flexDir="column">
              <Fade bottom>
                <BookIcon />
              </Fade>
              <Fade bottom>
                <Text>
                  Equipes de órgãos públicos que querem trazer uma melhor
                  acessibilidade aos direitos.
                </Text>
              </Fade>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  )
}
