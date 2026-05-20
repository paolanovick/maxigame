// Para reemplazar imágenes:
// 1. Subí los archivos a public/images/destinos/  (ej: /images/destinos/calafate-1.jpg)
// 2. Referencialos como '/images/destinos/<nombre>.jpg'
// 3. También funcionan URLs externas (Unsplash, Cloudinary, etc.)
//
// Specs recomendadas: 2400x1350 (16:9) o 2400x1600 (3:2), WebP o JPG, sRGB, 200-450 KB.

export const destinos = [
  {
    id: "calafate",
    numero: "01",
    hoverStyle: "glass",
    precio: "875",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "El Calafate", en: "El Calafate" },
    subtitulo: {
      es: "Glaciar Perito Moreno",
      en: "Perito Moreno Glacier",
    },
    region: {
      es: "Patagonia · Santa Cruz",
      en: "Patagonia · Santa Cruz",
    },
    descripcion: {
      es: "Frente al gigante de hielo. Un espectáculo natural donde el silencio se rompe con cada desprendimiento del glaciar más imponente de la Patagonia.",
      en: "Face to face with the ice giant. A natural spectacle where silence breaks with every calving of the most imposing glacier in Patagonia.",
    },
    imagen: "/images/destinos/glaciar1.jpg",
    destacados: [
      {
        titulo: { es: "Glaciar Perito Moreno", en: "Perito Moreno Glacier" },
        descripcion: {
          es: "Pasarelas frente al frente de hielo de 5 km",
          en: "Walkways facing the 5 km ice front",
        },
        imagen: "/images/destinos/glaciar2.jpg",
      },
      {
        titulo: { es: "Hotelería 4 estrellas", en: "4-star accommodation" },
        descripcion: {
          es: "Vistas al lago Argentino y servicio premium",
          en: "Views over Lake Argentino with premium service",
        },
        imagen:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Aéreos desde Buenos Aires",
          en: "Flights from Buenos Aires",
        },
        descripcion: {
          es: "Vuelos directos incluidos en tu viaje",
          en: "Direct flights included in your trip",
        },
        imagen:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Recepción y traslados privados al hotel",
          en: "Private welcome and transfers to your hotel",
        },
        imagen: "/images/destinos/glaciar3.jpg",
      },
      {
        titulo: { es: "Asistencia al viajero", en: "Travel insurance" },
        descripcion: {
          es: "Cobertura completa durante toda tu estadía",
          en: "Full coverage throughout your stay",
        },
        imagen:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2400&q=85",
      },
    ],
  },
  {
    id: "ushuaia",
    numero: "02",
    hoverStyle: "glass",
    precio: "900",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "Ushuaia", en: "Ushuaia" },
    subtitulo: {
      es: "Parque Nacional Tierra del Fuego",
      en: "Tierra del Fuego National Park",
    },
    region: {
      es: "Fin del Mundo · Tierra del Fuego",
      en: "End of the World · Tierra del Fuego",
    },
    descripcion: {
      es: "La ciudad más austral del planeta. Bosques milenarios, el Canal Beagle y la magia inigualable de estar al borde de todo lo conocido.",
      en: "The southernmost city on the planet. Ancient forests, the Beagle Channel, and the unmatched magic of being at the edge of the known world.",
    },
    imagen: "/images/destinos/ushuaia1.webp",
    destacados: [
      {
        titulo: {
          es: "Parque Nacional Tierra del Fuego",
          en: "Tierra del Fuego National Park",
        },
        descripcion: {
          es: "Bosques magallánicos, lagos y senderos prístinos",
          en: "Magellanic forests, lakes, and pristine trails",
        },
        imagen: "/images/destinos/ushuaia2.jpg",
      },
      {
        titulo: { es: "Hotelería 3 estrellas", en: "3-star accommodation" },
        descripcion: {
          es: "Confort cálido frente al Canal Beagle",
          en: "Warm comfort facing the Beagle Channel",
        },
        imagen:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Aéreos desde Buenos Aires",
          en: "Flights from Buenos Aires",
        },
        descripcion: {
          es: "Vuelos directos al fin del mundo",
          en: "Direct flights to the end of the world",
        },
        imagen:
          "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Traslados privados desde el aeropuerto",
          en: "Private transfers from the airport",
        },
        imagen:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Asistencia al viajero", en: "Travel insurance" },
        descripcion: {
          es: "Cobertura integral en zona austral",
          en: "Full coverage in the southern region",
        },
        imagen:
          "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2400&q=85",
      },
    ],
  },
  {
    id: "iguazu",
    numero: "03",
    precio: "570",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "Iguazú", en: "Iguazú" },
    subtitulo: {
      es: "Cataratas Argentinas",
      en: "Argentine Falls",
    },
    region: { es: "Litoral · Misiones", en: "Northeast · Misiones" },
    descripcion: {
      es: "Una de las siete maravillas naturales del mundo. Trescientos saltos de agua entre la selva subtropical en una experiencia que sacude todos los sentidos.",
      en: "One of the seven natural wonders of the world. Three hundred waterfalls deep in the subtropical jungle in an experience that awakens every sense.",
    },
    imagen: "/images/destinos/iguazu1.jpeg",
    destacados: [
      {
        titulo: {
          es: "Cataratas del Iguazú",
          en: "Iguazú Falls",
        },
        descripcion: {
          es: "Excursión al circuito argentino en regular",
          en: "Tour of the Argentine circuit in shared service",
        },
        imagen:
          "https://iguazufalls.com/wp-content/uploads/bg-new-demo-iguazu-1024x576.jpg.webp",
      },
      {
        titulo: { es: "Madero Tango Iguazú", en: "Madero Tango Iguazú" },
        descripcion: {
          es: "Cena espectáculo con lo mejor del tango",
          en: "Dinner show featuring the best of tango",
        },
        imagen:
          "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Hotelería 4 estrellas", en: "4-star accommodation" },
        descripcion: {
          es: "Hoteles inmersos en plena selva subtropical",
          en: "Hotels nestled in the heart of the rainforest",
        },
        imagen:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Aéreos desde Buenos Aires",
          en: "Flights from Buenos Aires",
        },
        descripcion: {
          es: "Vuelos directos a Puerto Iguazú",
          en: "Direct flights to Puerto Iguazú",
        },
        imagen:
          "https://cithe.es/wp-content/uploads/2023/12/despegue-de-un-avion-1200x675.jpg",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Traslados privados a tu hotel",
          en: "Private transfers to your hotel",
        },
        imagen:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=85",
      },
    ],
  },
  {
    id: "salta",
    numero: "04",
    hoverStyle: "glass",
    precio: "700",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "Salta", en: "Salta" },
    subtitulo: { es: "Clásico del Norte", en: "Northern Classic" },
    region: { es: "Norte Argentino · Salta", en: "Argentine North · Salta" },
    descripcion: {
      es: "Cerros de colores, viñedos en altura y herencia colonial. Un viaje sensorial por la Argentina más auténtica y cargada de historia.",
      en: "Colorful hills, high-altitude vineyards, and colonial heritage. A sensory journey through the most authentic and history-rich Argentina.",
    },
    imagen:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/63/b9/53/anfiteatro-natural.jpg?w=1000&h=-1&s=1",
    destacados: [
      {
        titulo: { es: "Excursión Cafayate", en: "Cafayate excursion" },
        descripcion: {
          es: "Quebrada de las Conchas y bodegas de altura",
          en: "Conchas Gorge and high-altitude wineries",
        },
        imagen:
          "https://www.civitatis.com/f/argentina/salta/galeria/big/quebrada-conchas.jpg",
      },
      {
        titulo: { es: "Hotelería 4 estrellas", en: "4-star accommodation" },
        descripcion: {
          es: "Casonas restauradas en pleno casco histórico",
          en: "Restored mansions in the historic district",
        },
        imagen:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Cerros de Salta", en: "Salta Hills" },
        descripcion: {
          es: "Paisajes de los Valles Calchaquíes",
          en: "Landscapes of the Calchaquí Valleys",
        },
        imagen:
          "https://www.civitatis.com/f/argentina/salta/galeria/big/carretera-valles-calchaquies.jpg",
      },
      {
        titulo: {
          es: "Aéreos desde Buenos Aires",
          en: "Flights from Buenos Aires",
        },
        descripcion: {
          es: "Vuelos directos a Salta capital",
          en: "Direct flights to Salta city",
        },
        imagen:
          "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Traslados privados al hotel",
          en: "Private transfers to your hotel",
        },
        imagen:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/50/8d/fe/necesitas-un-traslado.jpg?w=1000&h=-1&s=1",
      },
    ],
  },
  {
    id: "mendoza",
    numero: "05",
    precio: "670",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "Mendoza", en: "Mendoza" },
    subtitulo: {
      es: "Experiencia Finca Bandini",
      en: "Finca Bandini Experience",
    },
    region: { es: "Cuyo · Mendoza", en: "Cuyo · Mendoza" },
    descripcion: {
      es: "A los pies de la cordillera. Una jornada de altísima gastronomía y vinos de autor en una de las fincas más exclusivas del Valle de Uco.",
      en: "At the foot of the Andes. A day of refined gastronomy and signature wines at one of the most exclusive estates in the Uco Valley.",
    },
    imagen: "https://www.cepas.tur.ar/s/s296/fotos/fotoc-1.jpg",
    destacados: [
      {
        titulo: {
          es: "Experiencia Finca Bandini",
          en: "Finca Bandini Experience",
        },
        descripcion: {
          es: "Maridaje y gastronomía de autor con traslados",
          en: "Pairing menu and signature cuisine with transfers",
        },
        imagen:
          "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Viñedos en altura", en: "High-altitude vineyards" },
        descripcion: {
          es: "Las mejores bodegas del Valle de Uco",
          en: "The finest wineries in the Uco Valley",
        },
        imagen:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Hotelería 4 estrellas", en: "4-star accommodation" },
        descripcion: {
          es: "Hoteles boutique con vista a la cordillera",
          en: "Boutique hotels overlooking the Andes",
        },
        imagen:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Aéreos desde Buenos Aires",
          en: "Flights from Buenos Aires",
        },
        descripcion: {
          es: "Vuelos directos a Mendoza",
          en: "Direct flights to Mendoza",
        },
        imagen:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Traslados privados al hotel",
          en: "Private transfers to your hotel",
        },
        imagen: "https://www.grturismoaventura.com.ar/portadas/transfer.webp",
      },
    ],
  },
  {
    id: "buenosaires",
    numero: "06",
    precio: "600",
    duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
    nombre: { es: "Buenos Aires", en: "Buenos Aires" },
    subtitulo: { es: "City Tour Premium", en: "Premium City Tour" },
    region: { es: "Capital Federal", en: "Federal Capital" },
    descripcion: {
      es: "La París de Sudamérica. Avenidas, tango y arquitectura europea en una capital que late distinto de día y de noche.",
      en: "The Paris of South America. Wide avenues, tango, and European architecture in a capital that beats differently by day and by night.",
    },
    imagen:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=2400&q=85",
    destacados: [
      {
        titulo: { es: "City Tour Premium", en: "Premium City Tour" },
        descripcion: {
          es: "Recorrido por los íconos porteños con almuerzo",
          en: "Tour of the city icons including lunch",
        },
        imagen:
          "https://henriquetour.com/cdn/shop/files/Imagem_14-10-2024_as_15.24_1_d30a78b3-a01f-4de5-897f-6e3087647f6e.jpg?v=1728931939&width=493",
      },
      {
        titulo: { es: "Almuerzo gourmet", en: "Gourmet lunch" },
        descripcion: {
          es: "Gastronomía argentina contemporánea",
          en: "Contemporary Argentine cuisine",
        },
        imagen:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Hotelería 4 estrellas", en: "4-star accommodation" },
        descripcion: {
          es: "En el corazón de la ciudad",
          en: "In the heart of the city",
        },
        imagen:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=85",
      },
      {
        titulo: { es: "Avenida 9 de Julio", en: "Avenida 9 de Julio" },
        descripcion: {
          es: "La avenida más ancha del mundo",
          en: "The world's widest avenue",
        },
        imagen:
          "https://turismo.buenosaires.gob.ar/sites/turismo/files/obelisco_9_julio_1200.jpg",
      },
      {
        titulo: {
          es: "Transfer in/out aeropuerto",
          en: "Airport transfers in/out",
        },
        descripcion: {
          es: "Traslados privados al hotel",
          en: "Private transfers to your hotel",
        },
        imagen:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2400&q=85",
      },
    ],
  },
];
