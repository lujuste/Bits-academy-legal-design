import {
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react'
import {
  HTMLMotionProps,
  motion,
  AnimatePresence,
  useAnimation,
} from 'framer-motion'

import Fade from 'react-reveal/Fade'

import { useEffect, useState } from 'react'

import { BsTriangleFill } from 'react-icons/bs'
import { useViewportContext } from '../../../../contexts/ViewContext'
import { NextPage } from 'next'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

const MotionListItem: NextPage<MotionProps> = motion(ListItem)

export default function CommomQuestion() {
  const { ref, inView }: any = useViewportContext()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!inView) {
      animation.start({ x: '-100vh' })
    }
  }, [inView])

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  })

  return (
    <Flex
      flexDir={['column', 'column', 'column', 'row']}
      maxW="1400"
      mx="auto"
      justify="center"
      align="center"
      h={['100%']}
      py="6rem"
      bgColor="#F8F9FA"
      mt={['0', '0', '0']}
      px={['0', '0', '0', '6rem']}
      mb={['0', '0', '0', '4rem']}
    >
      <Flex
        flexDir="column"
        maxW={['264px', '264px', '264px', '400px', '518px']}
        h="auto"
        justify="center"
        mx="auto"
      >
        <Fade bottom>
          <Heading
            fontFamily="Raleway"
            lineHeight={['2.5rem', '2.5rem', '2.5rem', '3.438rem']}
            fontSize={['1.875rem', '1.875rem', '1.875rem', '3rem']}
            mx="auto"
            fontWeight="600"
            textAlign={['center', 'center', 'center', 'left']}
          >
            <Text color="pink.900">Perguntas </Text>
            frequentes:
          </Heading>
        </Fade>
        <Fade bottom>
          <Text
            textAlign={['center', 'center', 'center', 'left']}
            mt="1rem"
            color="#666666"
          >
            Times que aplicam o Legal Design em seus documentos t??m:
          </Text>
        </Fade>

        {isWideVersion && (
          <Fade bottom>
            <Button
              mt="2rem"
              px="1rem"
              w="292px"
              fontSize="0.875rem"
              fontWeight="700"
              color="white"
              bgGradient="linear(to-t, #52011C, #cc3366)"
              h="48px"
              textShadow="2xl"
              boxShadow="2xl"
            >
              Quero contratar o treinamento
            </Button>
          </Fade>
        )}
      </Flex>
      <Flex
        flex="1"
        flexDir={['column', 'column', 'column', 'row']}
        align="center"
        mt={['1.5rem', '1.5rem', '1.5rem', '-4rem']}
        maxW={['300px', '300px', '300px', '567px']}
        h="auto"
        mx="auto"
        justify="center"
      >
        <List ml={['0', '0', '0', '1rem']} mt="3rem" spacing={2}>
          <MotionListItem
            as="h2"
            display="flex"
            fontSize="1rem"
            color="#666666"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.2rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              <Text as="span" color="pink.900">
                Menos vai e volta{' '}
              </Text>{' '}
              na negocia????o de contratos
            </Text>
          </MotionListItem>
          <MotionListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              Uma{' '}
              <Text as="span" color="pink.900">
                diminui????o de d??vidas
              </Text>{' '}
              em rela????o ao conte??do de um documento
            </Text>
          </MotionListItem>
          <MotionListItem
            color="#666666"
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              {' '}
              <Text
                as="span"
                sx={{
                  color: 'pink.900',
                }}
              >
                {' '}
                Menos{' '}
              </Text>{' '}
              pedidos de{' '}
              <Text
                sx={{
                  color: 'pink.900',
                }}
                as="span"
              >
                edi????es
              </Text>{' '}
              nos documentos
            </Text>
          </MotionListItem>
          <MotionListItem
            display="flex"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5rem"
            color="#666666"
          >
            <ListIcon
              mt="0.4rem"
              textAlign="justify"
              justifyItems="initial"
              transform="rotate(90deg)"
              mr="1rem"
              w={4}
              h={4}
              as={BsTriangleFill}
              color="pink.900"
            />
            <Text>
              Um{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                {' '}
                menor ciclo{' '}
              </Text>{' '}
              de{' '}
              <Text as="span" sx={{ color: 'pink.900' }}>
                vendas
              </Text>
            </Text>
          </MotionListItem>
        </List>
      </Flex>

      {!isWideVersion && (
        <Fade bottom>
          <Button
            mt="2rem"
            px="1rem"
            w="292px"
            fontSize="0.875rem"
            fontWeight="700"
            color="white"
            bgGradient="linear(to-t, #52011C, #cc3366)"
            h="48px"
            textShadow="2xl"
            boxShadow="2xl"
          >
            Quero contratar o treinamento
          </Button>
        </Fade>
      )}
    </Flex>
  )
}
