import "./App.css";
import { ContainerImagenProducto } from "./Componentes/Container-Img-Producto/Container-Img-Producto";
import { ContainerInfoProducto } from "./Componentes/Container-Info-Producto/Container-Info-Producto";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";


const App = () => {
  //js
  const manga = {
    nombre: "Berserk",
    edicion: "Deluxe",
    tomo: "Volume 1",
    autor: "Kentaro Miura",
    precio: "60.000",
    encuadernacion: "Tapa dura",
    dimensiones: "26.2 x 18.8 x 5.1 cm",
    peso: "1.84kg",
    disponibles: 5,
    descripcion:
      "¿Tienes las agallas? Berserk de Kentaro Miura ha indignado, horrorizado y deleitado a los fanáticos del manga y el anime desde 1989, creando una legión internacional de devotos incondicionales e inspirando una gran cantidad de series de televisión, largometrajes y videojuegos. Y ahora, el rudo campeón del manga de fantasía para adultos se presenta en una edición de tapa dura de lujo de gran tamaño de 7 x 10, con casi 700 páginas que acumulan los primeros tres volúmenes de Berserk, y los siguientes volúmenes ofrecerán toda la serie en hermosas colecciones de estantería. ¡Sin agallas no hay gloria!",
  };

  return (
    //jsx

    <Box
      as="main"
      display={{lg:"flex"}}
      flexWrap={"wrap"}
      justifyContent={{lg:'center',md:"space-around"}}
      alignItems={{md:"center",sm:"center"}}
      width={{lg:"auto"}}
      h={{lg:"100vh",md:"160vh",sm:"220vh",xs:"250vh"}}
      m="0"
      p="0"
    >
      <Box>
        <ContainerImagenProducto></ContainerImagenProducto>
      </Box>

      <Box >
        <ContainerInfoProducto
          nombre={manga.nombre}
          edicion={manga.edicion}
          tomo={manga.tomo}
          autor={manga.autor}
          precio={manga.precio}
          descripcion={manga.descripcion}
          cantidad={manga.disponibles}
        ></ContainerInfoProducto>
      </Box>

    </Box>
  );
};

export default App;
