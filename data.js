// ====================================
// BASE DE DATOS DE TORNILLOS (ID CORREGIDOS Y RUTAS ACTUALIZADAS)
// ====================================
const tornillos = [
    {
        id: 1,
        nombre: "Tornillo Cabeza Lenteja Punta Broca",
        tamaño: "8x1/2",
        codigo: '20008000"',
        material: "Zincado Blanco",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo cabeza de lenteja punta broca 8x3,4.png",
        descripcion: "Tornillo blanco cabeza de lenteja punta broca, ideal para realizar construcciones con vulcometal y estructuras de acero. Presentación de 100 Un. Aprox.",
        specs: [
            "Cabeza lenteja punta broca",
            "Medida: 8 x 3/4\"",
            "Acabado zincado blanco",
            "Caja de 100 unidades aprox."
        ]
    },
    {
        id: 2,
        nombre: "Tornillo cabeza de lenteja punta broca",
        codigo: "20007900",
        tamaño: "8 x 3/4",
        material: "Acero Galvanizado",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo blanco cabeza de lenteja punta broca 8x1,2.png",
        descripcion: "Tornillo de cabeza hexagonal con tuerca, perfecto para estructuras metálicas y construcción.",
        specs: [
            "Cabeza hexagonal DIN 933",
            "Tuerca incluida",
            "Zincado de alta resistencia",
            "Apto para intemperie",
            "Disponible en bulk"
        ]
    },
    {
        id: 3,
        nombre: "Tornillo cabeza de lenteja punta broca",
        codigo: "20008300",
        tamaño: "8 x 1",
        material: "Acero al Carbono",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo blanco cabeza de lenteja punta broca 8x1.5,8.png",
        descripcion: "Tornillo autoperforante para instalación en láminas de acero y aluminio sin pretaladro.",
        specs: [
            "Punta afilada para perforación automática",
            "Rosca de paso rápido",
            "Cabeza hexagonal",
            "Apto para láminas hasta 2mm",
            "Surtido de tamaños disponible"
        ]
    },
    {
        id: 4,
        nombre: "Tornillo cabeza de lenteja punta broca",
        codigo: "20008100",
        tamaño: "8 x 1-1/4",
        material: "Acero Templado",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo cabeza de lenteja punta broca 8x3,4.png",
        descripcion: "Tornillo con cabeza cilíndrica y llave hexagonal interior, acabado profesional de alta precisión.",
        specs: [
            "Cabeza cilíndrica baja",
            "Llave Allen tamaño 4mm",
            "Acabado cromado",
            "Alta resistencia a cortante",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 5,
        nombre: "Tornillo cabeza de lenteja punta fina",
        codigo: "8x1/2-PF",
        tamaño: "8x1/2",
        material: "Latón",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo cabeza de lenteja punta fina 8x1,2.png",
        descripcion: "Tornillo para madera con cabeza ovalada, ideal para carpintería fina y acabados decorativos.",
        specs: [
            "Cabeza ovalada redondeada",
            "Rosca especial para madera",
            "Latón anticorrosión",
            "Acabado satinado",
            "Excelente penetración en madera"
        ]
    },
    {
        id: 6,
        nombre: "Tornillo cabeza de lenteja punta fina",
        codigo: "8x1-PF",
        tamaño: "8x1",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/cabeza de lenteja/Tornillo cabeza de lenteja punta fina 8x1.png",
        descripcion: "Tornillo prisionero con llave allen, utilizado para fijar elementos sin cabeza visible.",
        specs: [
            "Punta cónica para mejor agarre",
            "Llave Allen integrada",
            "Apto para válvulas y poleas",
            "Rosca métrica completa",
            "Caja de 200 unidades"
        ]
    },
    {
        id: 7,
        nombre: "Tornillo hexagonal  punta broca",
        codigo: "10x2",
        tamaño: "12x2",
        material: "Acero al Carbono",
        stock: "bajo",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 10x2.png",
        descripcion: "Varilla completamente roscada, cortable a medida para aplicaciones especiales de anclaje.",
        specs: [
            "Rosca métrica M8",
            "Longitud de 500mm",
            "Cortable según necesidad",
            "Tuercas compatibles DIN 934",
            "Piezas individuales"
        ]
    },
    {
        id: 8,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "12x3/4",
        tamaño: "12x3/4",
        material: "Acero Galvanizado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 12x3,4.png",
        descripcion: "Tornillo para techumbre con arandela de neopreno integrada, sellado hermético garantizado.",
        specs: [
            "Punta afilada autoperforante",
            "Arandela de neopreno integrada",
            "Cabeza hexagonal redondeada",
            "Sello hermético contra filtraciones",
            "Ideal para chapas y tejas metálicas"
        ]
    },
    {
        id: 9,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "12x1.1/2",
        tamaño: "12x1.1/2",
        material: "Acero Inoxidable 304",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 12x1.1,2.png",
        descripcion: "Tornillo de cabeza plana con ranura, para aplicaciones que requieren acabado uniforme.",
        specs: [
            "Cabeza plana con ranura simple",
            "Acabado pulido brillante",
            "Resistencia a corrosión superior",
            "Rosca métrica ISO",
            "Embalaje de 500 unidades"
        ]
    },
    {
        id: 10,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "12x1",
        tamaño: "12x1",
        material: "Acero al Carbono",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 12x1.png",
        descripcion: "Tornillo Phillips con cabeza redonda, versátil para multiple aplicaciones industriales.",
        specs: [
            "Cabeza redonda semiesférica",
            "Ranura Phillips para destornillador",
            "Zincado de protección",
            "Rosca completa M4",
            "Caja de 250 unidades"
        ]
    },
    {
        id: 11,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "12x2.1/2",
        tamaño: "12x2.1/2",
        material: "Acero Galvanizado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 12x2.1,2.png",
        descripcion: "Tuerca hexagonal DIN 934 para emparejamiento con tornillos métricos.",
        specs: [
            "Hexágono regular DIN 934",
            "Compatible con tornillos M8",
            "Zincado resistente a corrosión",
            "Tolerancia de precisión alta",
            "Bolsa de 100 unidades"
        ]
    },
    {
        id: 12,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "12x3",
        tamaño: "12x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 12x3.png",
        descripcion: "Arandela plana de distribución, ideal para distribuir cargas y proteger superficies.",
        specs: [
            "Diámetro exterior optimizado",
            "Acabado pulido inoxidable",
            "Resistencia a manchas y oxidación",
            "Espesor estándar DIN 125",
            "Paquete de 500 unidades"
        ]
    },
    {
        id: 13,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "10x3/4",
        tamaño: "10x3/4",
        material: "Acero Templado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 10x3,4.png",
        descripcion: "Tornillo con cabeza esférica y hueco allen, acabado elegante para maquinaria moderna.",
        specs: [
            "Cabeza esférica pulida",
            "Llave Allen 3mm",
            "Ajuste de precisión",
            "Material de alta resistencia",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 14,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para metal",
        codigo: "10x3/4",
        tamaño: "10x3/4",
        material: "Acero Zincado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Broca Metal/Hex Broca Metal 10x3,4.png",
        descripcion: "Tornillo para madera con cabeza avellanada, enrasable al nivel de la superficie.",
        specs: [
            "Cabeza avellanada 90 grados",
            "Rosca especial para madera",
            "Penetración rápida",
            "Acabado zincado mate",
            "Caja de 200 unidades"
        ]
    },
    {
        id: 15,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para madera",
        codigo: "10x1",
        tamaño: "10x1",
        material: "Acero Galvanizado",
        stock: "bajo",
        imagen: "imagenes/Hexagonal Fina Madera/Hex Broca Madera 10x1.png",
        descripcion: "Tornillo con tarugo de expansión, para fijación en paredes de hormigón y mampostería.",
        specs: [
            "Tarugo de nylon expandible",
            "Fijación segura en concreto",
            "Carga máxima 50kg por tornillo",
            "Instalación rápida sin herramientas",
            "Caja de 50 conjuntos"
        ]
    },
    {
        id: 16,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para madera",
        codigo: "10x2",
        tamaño: "10x2",
        material: "Acero al Carbono",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Fina Madera/Hex Broca Madera 10x2.png",
        descripcion: "Tornillo de rosca métrica gruesa para aplicaciones estructurales de carga alta.",
        specs: [
            "Rosca métrica coarse pitch",
            "Cabeza hexagonal completa",
            "Resistencia de tracción 400 MPa",
            "Roscado de precisión industrial",
            "Bulto de 25 unidades"
        ]
    },
    {
        id: 17,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para madera",
        codigo: "10x3",
        tamaño: "10x3",
        material: "Acero Inoxidable 316L",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Fina Madera/Hex Broca Madera 10x3.png",
        descripcion: "Tornillo de máxima resistencia a corrosión para ambientes marinos y químicos.",
        specs: [
            "Grado 316L resistencia superior",
            "Resistencia a corrosión marina",
            "Acabado pulido brillante",
            "Cabeza Phillips o hexagonal",
            "Paquete de 100 unidades"
        ]
    },
    {
        id: 18,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para madera",
        codigo: "10x1.1/2",
        tamaño: "10x1.1/2",
        material: "Acero Galvanizado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Fina Madera/Hex Broca Madera 10x1.1,2.png",
        descripcion: "Perno pasante para atravesar placas gruesas, con tuerca y arandelas incluidas.",
        specs: [
            "Paquete completo: tornillo, tuerca, arandelas",
            "Rosca métrica M12",
            "Galvanizado a fuego",
            "Ideal para estructuras",
            "Venta por unidad o bulto"
        ]
    },
    {
        id: 19,
        nombre: "Tornillo hexagonal blanco punta broca y golilla para madera",
        codigo: "10x2.1/2",
        tamaño: "10x2.1/2",
        material: "Acero Templado",
        stock: "disponible",
        imagen: "imagenes/Hexagonal Fina Madera/Hex Broca Madera 10x2.1,2.png",
        descripcion: "Tornillo prisionero con punta cónica para fijación de ejes y poleas.",
        specs: [
            "Punta cónica de máxima sujeción",
            "Llave Allen hexagonal",
            "Rosca completa sin talón",
            "Acabado cromado oscuro",
            "Caja de 100 unidades"
        ]
    },
    {
        id: 20,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "6x1",
        tamaño: "6x1",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 21,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "6x2.1/2",
        tamaño: "6x2.1/2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 22,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "6x2",
        tamaño: "6x2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 23,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "8x2.1/2",
        tamaño: "8x2.1/2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 24,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "8x3",
        tamaño: "8x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 25,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "6x1.5/8",
        tamaño: "6x1.5/8",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 26,
        nombre: "Tornillo volcanita punta broca para metal",
        codigo: "6x1.1/4",
        tamaño: "6x1.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Broca Metal/Torn volcanita punta broca para metal 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 27,
        nombre: "Tornillo volcanita blanco punta fina para metal",
        codigo: "6x1",
        tamaño: "6x1",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Metal/Torn volcanita blanco punta fina para metall 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 28,
        nombre: "Tornillo volcanita blanco punta fina para metal",
        codigo: "6x1.1/4",
        tamaño: "6x1.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Metal/Torn volcanita blanco punta fina para metall 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 29,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x1",
        tamaño: "6x1",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 30,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x2",
        tamaño: "6x2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 31,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x2.1/2",
        tamaño: "6x2.1/2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 32,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x3",
        tamaño: "6x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x3.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 33,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "8x3",
        tamaño: "8x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x3.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 34,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x1.1/4",
        tamaño: "6x1.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 35,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "8x3",
        tamaño: "8x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 36,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "6x1.5/8",
        tamaño: "6x1.5/8",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x1.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 37,
        nombre: "Tornillo volcanita blanco punta fina para madera",
        codigo: "8x4",
        tamaño: "8x4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn volcanita blanco punta fina para madera 6x2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 38,
        nombre: "Perno de anclaje ",
        codigo: "3/8x4.1/4",
        tamaño: "3/8x4.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Perno de anclaje/Perno de anclaje 3,8x4.1,4.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 39,
        nombre: "Perno de anclaje ",
        codigo: "3/8x5",
        tamaño: "3/8x5",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Perno de anclaje/Perno de anclaje 3,8x5.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 40,
        nombre: "Tarugo Clavo ",
        codigo: "8x100 mm",
        tamaño: "8x100 mm",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Tarugo Clavo/Tarugo Clavo 8x100 mm.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 41,
        nombre: "Fibrocemento",
        codigo: "6x1.1/4",
        tamaño: "6x1.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Fibrocemento/fibrocemento 6x1,1-4.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 42,
        nombre: "Tornillo Turbo Jet",
        codigo: "6.0x100(4)",
        tamaño: "6.0x100(4)",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Tornillo Turbo Jet/Tornillo Turbo Jet 6.0x100 (4).png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 43,
        nombre: "Disco de Corte para Metal 4.1/2", // <- ¡Al tener la palabra "disco", el sistema ya sabe dónde ponerlo!
        codigo: "DC-412",
        tamaño: "4.1/2 pulgadas",
        material: "Óxido de Aluminio",
        imagen: "imagenes/Disco de corte/DiscoCorte.png",
        descripcion: "Disco de corte ultrafino para metal y acero inoxidable. Alto rendimiento y durabilidad.",
        specs: [
            "Medida: 115 x 1.0 x 22.23 mm",
            "Uso en esmeril angular",
            "Corte rápido y limpio"
        ]
    },
    {
        id: 42,
        nombre: "Clavo de disparo drywell",
        codigo: "6.0x100(4)",
        tamaño: "6.0x100(4)",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Clavo para drywell/Clavo para drywell.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
        {
        id: 43,
        nombre: "Punta Phillips",
        codigo: "6.0x100(4)",
        tamaño: "6.0x100(4)",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Punta Phillips/Punta Phillips.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
        {
        id: 44,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "8x3",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 4.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 45,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "8x4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 3.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 46,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "8x2.1/2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 2.1,2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
        {
        id: 47,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "6x1.5/8",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 2.1,2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
        {
        id: 48,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "6x1.1/4",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 2.1,2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
       {
        id: 49,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "6x1",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 2.1,2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
     {
        id: 49,
        nombre: "Tornillo CRS punta fina fosfatado (Negro) ",
        codigo: "6.0x100(4)",
        tamaño: "6x2",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Volcanita Fina Madera/Torn CRS punta fina fosfatado 8 x 2.1,2.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
    {
        id: 50,
        nombre: "Tirafondos ",
        codigo: "6.0x100(4)",
        tamaño: "nose xd",
        material: "Acero Inoxidable",
        stock: "disponible",
        imagen: "imagenes/Tirafonodos/Tirafondos.png",
        descripcion: "Tornillo cabeza botón con llave allen, acabado de lujo para aplicaciones de precisión.",
        specs: [
            "Cabeza botón redondeada",
            "Llave Allen 5mm",
            "Superficie lisa y uniforme",
            "Material inoxidable pulido",
            "Paquete de 50 unidades"
        ]
    },
];

// Leer id de la URL
function getUrlParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}

// Toggle menú responsivo (compartido)
function initMenu() {
    const toggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (!toggle || !navMenu) return;

    toggle.addEventListener('click', () => navMenu.classList.toggle('show'));

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) navMenu.classList.remove('show');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('show'));
    });
}

document.addEventListener('DOMContentLoaded', initMenu);