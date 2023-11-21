import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { InputGroup,InputLeftAddon} from "@chakra-ui/react";



const ContainerCompra = ({disponibles}) => {
  //js

  return (
    //jsx
    <Box
      as="div"
      w="auto"
      h="150px"
      bg="RGBA(0, 0, 0, 0.05)"
      p="7px"
      borderRadius="10px"
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      mt='2em'
    >
      <Text fontFamily="sans-serif" color="">
        Disponible
      </Text>
      <InputGroup       bg="RGBA(0, 0, 0, 0.05)">
    <InputLeftAddon       bg="RGBA(0, 0, 0, 0.05)" children='Cantidad' />
    <Select size='auto'>

    <option value="option1">1</option>
    <option value="option1">2</option>
    <option value="option1">3</option>

      </Select>
  </InputGroup>


     
      

      <Button colorScheme="whatsapp">Comprar</Button>
    </Box>
  );
};

export { ContainerCompra };
