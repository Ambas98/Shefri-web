// ============================================
// ARCHIVO DE CONFIGURACIÓN DEL CLIENTE
// ============================================
// Este es el ÚNICO archivo que necesitas editar
// para customizar el sitio de cada cliente.
//
// IMPORTANTE: Mantén el formato exacto.
// ============================================

export const siteConfig = {
  // ==========================================
  // 1. INFORMACIÓN BÁSICA
  // ==========================================
  businessName: "Shefri",
  tagline: "Sabor Napolitano",
  description: "Pizzería napolitana artesanal en San Juan. Pizzas, calzones y pizza dogs cocinados a 400° listos en 5 minutos. Arte, amor y pasión en cada porción.",

  // ==========================================
  // 2. HISTORIA / SOBRE NOSOTROS
  // ==========================================
  about: {
    story: "Shefri es una pizzería estilo napolitano, atendida por su propio dueño. Trabajamos a 400°, lo que nos permite tener nuestros productos listos en 5 minutos. Acercate por el local y descubrí el verdadero sabor napolitano.",
    mission: "Arte, amor y pasión en cada porción."
  },

  // ==========================================
  // 3. CONTACTO
  // ==========================================
  contact: {
    phone: "+54 9 264 514-1313",
    whatsapp: "5492645141313",
    email: "",
    address: "Manuel Zavalla 850 Norte, Ayres Village, Rivadavia, San Juan"
  },

  // ==========================================
  // 4. MENSAJE DE WHATSAPP
  // ==========================================
  whatsappMessage: "Hola Shefri! Quiero hacer un pedido.",

  // ==========================================
  // 5. REDES SOCIALES (opcional - dejar "" si no tiene)
  // ==========================================
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/shefrisabornapolitano/",
    twitter: "",
    linkedin: ""
  },

  // ==========================================
  // 6. UBICACIÓN Y MAPA
  // ==========================================
  location: {
    lat: -31.5199,
    lng: -68.5796,
    mapUrl: "https://www.google.com/maps/search/Manuel%20Zavalla%20Nte.%20850%20Rivadavia/@-31.5199,-68.5796,17z"
  },

  // ==========================================
  // 7. HORARIOS DE ATENCIÓN
  // ==========================================
  hours: {
    monday: "Cerrado",
    tuesday: "21:00 - 00:00",
    wednesday: "21:00 - 00:00",
    thursday: "21:00 - 00:00",
    friday: "21:00 - 00:00",
    saturday: "21:00 - 00:00",
    sunday: "21:00 - 00:00"
  },

  // ==========================================
  // 8. MENÚ
  // ==========================================
  menuLabel: "Menú",

  catalog: [
    {
      category: "Pizzas",
      items: [
        { name: "Margarita", price: "13000", description: "Salsa pomodoro, mozzarella y hojas de albahaca fresca. 8 porc. $13.000 | 4 porc. $8.000", image: "Margarita-1.webp" },
        { name: "Triple Fugaza", price: "14000", description: "Salsa pomodoro, mozzarella, cebolla blanca, morada y de verdeo. 8 porc. $14.000 | 4 porc. $9.000", image: "fugazza-1.webp" },
        { name: "Roquefort", price: "16000", description: "Salsa pomodoro, mozzarella y roquefort. Opcional: Nuez. 8 porc. $16.000 | 4 porc. $10.000", image: "roquefort-1.webp" },
        { name: "Americana", price: "18000", description: "Salsa pomodoro, mozzarella, panceta ahumada y huevos fritos. 8 porc. $18.000 | 4 porc. $10.500", image: "americana-1.webp" },
        { name: "Napolitana", price: "15000", description: "Salsa pomodoro, mozzarella, tomates cherry confitados y pesto de albahaca y nueces. 8 porc. $15.000 | 4 porc. $10.000", image: "napolitana.webp" },
        { name: "Peperoni", price: "18000", description: "Salsa pomodoro, mozzarella, peperoni y reggianito. 8 porc. $18.000 | 4 porc. $10.000", image: "peperoni-1.webp" },
        { name: "Cuatro Quesos", price: "15000", description: "Salsa pomodoro, mozzarella, provolone, roquefort y reggianito. 8 porc. $15.000 | 4 porc. $10.000", image: "4quesos-1.webp" },
        { name: "Súper Provolone", price: "16000", description: "Salsa pomodoro, mozzarella y extra provolone. 8 porc. $16.000 | 4 porc. $10.500", image: "provolone-1.webp" },
        { name: "Serrana", price: "23000", description: "Salsa pomodoro, mozzarella, jamón crudo, rúcula y reggianito. 8 porc. $23.000 | 4 porc. $14.000", image: "serrana-1.webp" },
        { name: "Rústica", price: "19500", description: "Crema de leche, mozzarella, panceta crocante, rodajas de papa al romero con ají molido y reggianito. 8 porc. $19.500 | 4 porc. $11.500", image: "rustica.webp" },
        { name: "Pistachela", price: "20500", description: "Base de pesto de albahaca y nuez, mozzarella, pistachos y mortadela bologna. 8 porc. $20.500 | 4 porc. $12.500", image: "pistachella-2.webp" },
        { name: "Especial", price: "16000", description: "Salsa pomodoro, mozzarella, jamón cocido y morrón. 8 porc. $16.000 | 4 porc. $9.000", image: "especial-1.webp" }
      ]
    },
    {
      category: "Nuevas Variedades",
      items: [
        { name: "Argenta", price: "17500", description: "Salsa pomodoro, mozzarella, chorizo, pimientos asados y aceitunas. 8 porc. $17.500 | 4 porc. $10.000", image: "argenta.webp" },
        { name: "Roqueberry", price: "19000", description: "Crema de leche, mozzarella, roquefort y arándanos. 8 porc. $19.000 | 4 porc. $11.500", image: "roqueberry.webp" },
        { name: "Quattro Formaggi", price: "17000", description: "Crema de leche, albahaca fresca, mozzarella, provolone, sardo y roquefort. 8 porc. $17.000 | 4 porc. $11.000", image: "4_formaggi.webp" },
        { name: "Nuova Napolitana", price: "15000", description: "Pesto de albahaca y nueces, mozzarella y tomates cherry confitados. 8 porc. $15.000 | 4 porc. $10.000", image: "nueva_napo.webp" }
      ]
    },
    {
      category: "Pizza Dogs",
      items: [
        { name: "Criolla", price: "12000", description: "Salchicha ahumada alemana de 20cm, salsa pomodoro, mozzarella, salsa criolla, mayo de ajo y aceite de oliva. Envuelta en masa de pizza.", image: "criollo.webp" },
        { name: "Margarita", price: "12000", description: "Salchicha ahumada alemana de 20cm, salsa pomodoro, mozzarella, reggianito, pesto de albahaca y nueces, albahaca fresca y aceite de oliva. Envuelta en masa de pizza.", image: "panchito_margarita.webp" },
        { name: "Cheddar", price: "13000", description: "Salchicha ahumada alemana de 20cm, salsa pomodoro, mozzarella, cheddar, panceta crocante y verdeo. Envuelta en masa de pizza.", image: "cheddar_rotated.webp" },
        { name: "Guacamole", price: "13000", description: "Salchicha ahumada alemana de 20cm, salsa pomodoro, mozzarella y palta. Envuelta en masa de pizza.", image: "pancho_guacamole.webp" }
      ]
    },
    {
      category: "Calzones",
      items: [
        { name: "Calzón Napolitano", price: "11000", description: "Muzarella, jamón cocido, morrones y albahaca fresca.", image: "calzon-napolitano-1.webp" },
        { name: "Calzón Fugazza", price: "13000", description: "Muzarella, jamón cocido, provolone, cebolla blanca, morada y de verdeo.", image: "calzon_fugaza.webp" }
      ]
    },
    {
      category: "Panuozzos",
      items: [
        { name: "Pulled Pork Clásico", price: "16000", description: "Base de masa de pizza napolitana + bondiola desmechada, mozzarella, tomate, lechuga, cebolla morada y lactonesa de ajo.", image: "pork_clasico.webp" },
        { name: "Pulled Pork Coleslaw", price: "16000", description: "Base de masa de pizza napolitana + bondiola desmechada, mozzarella y ensalada coleslaw.", image: "pork_coleslaw.webp" },
        { name: "Pulled Pork Honey", price: "16000", description: "Base de masa de pizza napolitana + bondiola desmechada, mozzarella, sardo, mostaza y miel.", image: "pork_honey.webp" }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Gaseosas", price: "3000", description: "Botella 500cc." },
        { name: "Agua saborizada", price: "3000", description: "Botella 500cc." },
        { name: "Agua sin gas / con gas", price: "2000", description: "Botella 500cc." },
        { name: "Cerveza", price: "4000", description: "Lata 500cc." },
        { name: "Cerveza Donata", price: "5500", description: "IPA / PAMPEANA / IRISH / SCOTCH. Lata 500cc." }
      ]
    }
  ],

  // ==========================================
  // 9. GALERÍA DE FOTOS
  // ==========================================
  // Solo pon los NOMBRES de los archivos que están en /public/images/
  // Ejemplo: Si tienes /public/images/local-1.jpg, solo pon "local-1.jpg"
  // Podés agregar también un alt text descriptivo para SEO/accesibilidad:
  gallery: [
    { file: "criollo.webp", alt: "Pizza dog Criolla" },
    { file: "criollo_2.webp", alt: "Pizza dog Criolla detalle" },
    { file: "criollozoom.webp", alt: "Pizza dog Criolla zoom" },
    { file: "calzon_fugaza.webp", alt: "Calzón Fugazza" },
    { file: "calzon_fugaza_2.webp", alt: "Calzón Fugazza detalle" },
    { file: "cheddar_rotated.webp", alt: "Pizza dog Cheddar" },
    { file: "cheddar_2_rotated.webp", alt: "Pizza dog Cheddar detalle" },
    { file: "napolitana.webp", alt: "Pizza Napolitana Shefri" },
    { file: "ciollo2.webp", alt: "Pizza dog Criolla variante" }
  ],

  // ==========================================
  // 10. IMAGEN HERO (opcional)
  // ==========================================
  // Imagen de fondo para la pantalla de inicio.
  // Dejá "" para usar el fondo degradado por defecto.
  // Tamaño recomendado: 1920x1080px, formato JPG/WEBP.
  heroImage: "",  // TODO: elegir foto hero de /public/images/

  // ==========================================
  // 11. TEMA DE COLORES
  // ==========================================
  // Usá https://coolors.co para elegir paleta
  // Formato: código hexadecimal (#RRGGBB)
  colors: {
    primary: "#E44B25",      // Color principal (rojo-naranja — marca Shefri)
    secondary: "#64A242",    // Color secundario (verde oliva — marca Shefri)
    background: "#0a0a0a",   // Fondo general (deep dark)
    text: "#F0EEE6",         // Color del texto principal (off-white)
    textLight: "#9A9A8A"     // Color del texto secundario (muted)
  },

  // ==========================================
  // 12. FOTOS DEL LOCAL (sección Nosotros)
  // ==========================================
  // Agregar nombres de archivos en /public/images/ cuando estén disponibles
  localPhotos: [
    { file: "Local-2.jpeg", alt: "Fachada de Shefri Sabor Napolitano" },
    { file: "Local-6.jpeg", alt: "Interior del local con barra y horno napolitano" },
    { file: "Local-5.jpeg", alt: "Horno napolitano a 400°" },
    { file: "Local-8.jpeg", alt: "Ambiente interior de Shefri" },
  ],

  // ==========================================
  // 13. EVENTOS
  // ==========================================
  events: {
    title: "Shefri para tus Eventos",
    description: "Llevamos el auténtico sabor napolitano hasta donde vos elijas. Con nuestro gazebo y hornos portátiles a 400°, preparamos pizzas frescas en el momento para que tus invitados vivan la experiencia completa.",
    features: [
      "Hornos portátiles a 400° — pizzas listas en 5 minutos",
      "Gazebo propio, instalamos en cualquier espacio",
      "Cumpleaños, casamientos, eventos corporativos y más",
      "Menú personalizable según el evento",
      "Atención a cargo del propio dueño",
    ],
    gazeboPhoto: "cazebo-2.jpeg", // Foto del gazebo para eventos
    hornitosPhoto: "",            // Nombre del archivo en /public/images/ cuando esté disponible
    ctaText: "Consultar disponibilidad",
    whatsappMessage: "Hola Shefri! Me interesa contratar para un evento.",
  },

  // ==========================================
  // 14. FORMSPREE (Formulario de contacto)
  // ==========================================
  // Obtén tu ID en https://formspree.io después de crear el form
  formspreeId: "mwkagzkp",  // Reemplaza con el ID real

  // ==========================================
  // 13. TIPO DE NEGOCIO (para Schema.org)
  // ==========================================
  cuisine: "Pizza Napolitana",
  priceRange: "$$",

  // ==========================================
  // 14. SEO (para mejor posicionamiento en Google)
  // ==========================================
  seo: {
    keywords: "pizzería napolitana, pizza, calzones, pizza dog, panuozzi, San Juan, Argentina, Shefri",
    ogImage: "/images/og-image.jpg"  // Imagen para compartir en redes (1200x630px recomendado)
  }
}

// ==========================================
// EJEMPLOS SEGÚN TIPO DE NEGOCIO
// ==========================================

/*
RESTAURANTE:
-------------
menuLabel: "Menú",
catalog: [
  {
    category: "Entradas",
    items: [
      { name: "Empanadas (docena)", price: "3500", description: "Carne, pollo o verdura" },
      { name: "Picada para 2", price: "9000", description: "Quesos, fiambres y aceitunas" }
    ]
  },
  {
    category: "Platos Principales",
    items: [
      { name: "Bife de chorizo", price: "13000", description: "350g con guarnición" },
      { name: "Milanesa napolitana", price: "11000", description: "Con papas fritas" }
    ]
  }
]

PELUQUERÍA:
-----------
menuLabel: "Servicios",
catalog: [
  {
    category: "Cortes",
    items: [
      { name: "Corte caballero", price: "8000", description: "Incluye lavado" },
      { name: "Corte dama", price: "10000", description: "Incluye lavado y secado" }
    ]
  },
  {
    category: "Color",
    items: [
      { name: "Color completo", price: "25000", description: "Incluye lavado y secado" },
      { name: "Mechas", price: "18000", description: "Californianas o tradicionales" }
    ]
  }
]

GIMNASIO:
---------
menuLabel: "Membresías",
catalog: [
  {
    category: "Planes",
    items: [
      { name: "Mensual", price: "15000", description: "Acceso ilimitado" },
      { name: "Trimestral", price: "40000", description: "Ahorrás $5.000" },
      { name: "Anual", price: "140000", description: "Ahorrás $40.000" }
    ]
  },
  {
    category: "Clases",
    items: [
      { name: "Yoga (clase suelta)", price: "3000", description: "60 minutos" },
      { name: "Spinning (clase suelta)", price: "3500", description: "45 minutos" }
    ]
  }
]

CONSULTORIO MÉDICO/DENTAL:
---------------------------
menuLabel: "Tratamientos",
catalog: [
  {
    category: "Consultas",
    items: [
      { name: "Primera consulta", price: "8000", description: "Incluye diagnóstico completo" },
      { name: "Consulta de seguimiento", price: "5000", description: "" }
    ]
  },
  {
    category: "Tratamientos",
    items: [
      { name: "Limpieza dental", price: "12000", description: "Profilaxis completa" },
      { name: "Blanqueamiento", price: "35000", description: "2 sesiones" }
    ]
  }
]
*/
