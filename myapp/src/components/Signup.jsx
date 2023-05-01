import { Button, Container, Heading, Input, VStack, Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
  <form >
      <VStack alignItems={'stretch'} spacing={'8'} w={['column','row']} m={'auto'} my={'16'}>
          <Heading m={'0 auto 0 auto'}>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'28'}></Avatar>

          <Input placeholder='Abc' required type='text' focusBorderColor="purple"/>
          <Input placeholder='Email' required type='email' focusBorderColor="purple"/>
          <Input placeholder='password' required type='password' focusBorderColor={'purple.500'}/>

          <Button colorScheme="purple" type={'submit'}>Sign Up</Button>

          <Text textAlign={'right'}>Already signup?  <Button variant={'link'} colorScheme='purple'>
            <Link to={'/login'}>Login</Link>
          </Button> </Text>
          

    </VStack> 

  </form>
</Container>
}

export default Signup
