import './Nav.css'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'


const Nav = () =>{
    return(
    <Box as='nav' w='100vw' h='auto' display="flex" alignItems="center" justifyContent="space-evenly" color='gray'>
        <Link  fontSize='lg'>Inicio</Link>
        <Link  fontSize='lg'>Productos</Link>
        <Link  fontSize='lg'>Contactos</Link>
    </Box>
        
    
    )
}

export {Nav}