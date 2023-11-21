
import './Footer.css'
import { Box, Text } from '@chakra-ui/react'





const Footer = () =>{
    return(
    <Box  w={{lg:"auto"}} h={{lg:"50px",sm:"80px"}} as='footer' 	  bg='RGBA(0, 0, 0, 0.24)
    ' display="flex" alignItems="center" justifyContent="center">
      <Text  color={"dark"}>Derechos Reservados. 2023</Text>
    </Box>    
    

    
    )
}

export {Footer}