import { Nav } from '../Nav/Nav'
import './Header.css'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'





const Header = () =>{
    return(
    <Box  w='100%' h='12vh' as='header'  borderBottom='1px' borderColor='dark'	  bg='#FFFF' display="flex" alignItems="center" justifyContent="space-between">
        <Image 
        src='/logo.png' 
        alt='Logo'
        boxSize='100px'
        objectFit='cover'
        m='5px'
         />

        <Nav/>

        <Button w='50px' h='50px' mr='10px' colorScheme='gray'><i class="bi bi-bag-plus"></i></Button>

    </Box>    
    

    
    )
}

export {Header}