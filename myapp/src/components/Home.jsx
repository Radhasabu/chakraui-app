import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const Headingoptions={
    pos:"Absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"Uppercase",
    p:'4'

}
const Home = () => {
   
  return <box> 
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
        <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
            Services
        </Heading>
        <Stack
            height={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
        >
            <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Drag and drop a video to upload, or paste a video URL link from YouTube, Google Photos, etc.
            Open the “Subtitles” tab and select “Auto Subtitles.” This will automatically generate a text transcription for you.
            Once you’ve generated the text, click the download icon (a downwards-pointing arrow), and download a .VTT, .TXT, or .SRT file for your video transcription.
            </Text>
        </Stack>
    </Container>
</box>

}

const MyCarousel =()=>(
        <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
        <box w="full" h={'100vh'}>
            <Image src={img1} height={'120vh'}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...Headingoptions}>Watch the Future</Heading>
        </box>
        <box w={'full'} h={'100vh'}>
            <Image src={img2} height={'120vh'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...Headingoptions}>Future is Gaming</Heading>
        </box>
        <box w={'full'} h={'100vh'}>
            <Image src={img3} height={'120vh'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...Headingoptions}>Gaming is Console</Heading>
        </box>
        <box w={'full'} h={'100vh'}>
            <Image src={img4} height={'120vh'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...Headingoptions}>Night is Beautiful</Heading>
        </box>
        </Carousel>
)


export default Home
