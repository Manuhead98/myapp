import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const ContainerImagenProducto = () => {
  return (
    <Box
      as="div"
      bg="RGBA(0, 0, 0, 0.04)"
      m='5px'
      p='10px'
      alignItems="center"
      h={{lg:'600px',md:"auto"}}
      w={{lg:'500px',md:"auto"}}
      display='flex'
      justifyContent='center'
      
     
      borderRadius="10px"
    >
      <Box >
        <Image
          src="/public/portadoManga.jpg"
          alt="Producto"
          m="0"
          w="auto"
          h="auto"
        />
      </Box>
    </Box>
  );
};

export { ContainerImagenProducto };
