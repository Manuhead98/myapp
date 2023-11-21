import "./Container-Info-Producto.css";
import { Text } from "@chakra-ui/react";
import { ContainerCompra } from "../Container-Compra/ContainerCompra";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const ContainerInfoProducto = ({
  nombre,
  edicion,
  tomo,
  descripcion,
  autor,
  precio,
  disponibles,
}) => {
  const generadorSku = (ind1, ind2, ind3) => {
    const sku = [
      ind1.substring(0, 3),
      ind2.substring(0, 3),
      ind3.substring(0, 3),
      ind3.slice(-1),
    ]
      .join("-")
      .toUpperCase();
    return sku;
  };

  return (
    <Box
      as="section"
      h={{lg:"600px",md:'auto'}}
      width={{lg:"500px",md:"auto"}}
      bg="RGBA(0, 0, 0, 0.04)"
      p="10px"
      m='5px'
      borderRadius="10px"
    >
      <Box as="div" >
        <Text fontWeight="600" fontSize={["xl","2xl","3xl"]}>
          {nombre} {edicion} {tomo}
        </Text>
        <Text fontWeight="500" fontSize={["sm","md","md"]}>
          Autor: {autor}
        </Text>
        <Text fontWeight="500" fontSize={["sm","md","md"]}>
          SKU: {generadorSku(nombre, edicion, tomo)}
        </Text>
        <Text fontWeight="400" fontSize={["md","sm"]} mt="5px">
          Descripcion: {descripcion}
        </Text>
        <Text fontWeight="400" fontSize={["lg","md"]} mt="5px"></Text>
      </Box>

      <Box as="div">
        <Stat mt="20px">
          <StatLabel fontWeight="500" fontSize={["md","lg"]}>
            Precio:
          </StatLabel>
          <StatNumber>${precio}</StatNumber>
        </Stat>

        <ContainerCompra cantidad={disponibles}></ContainerCompra>
      </Box>

    </Box>
  );
};

export { ContainerInfoProducto };
