export const products = [
  {
    barcode: '8480010058',
    name: 'Botella de Plástico PET',
    materials: ['Plástico PET', 'Tapa de plástico'],
    recyclable: true,
    recyclingSteps: [
      'Vacía completamente la botella y enjuágala',
      'Retira la tapa y etiquetas si es posible',
      'Aplasta la botella para ahorrar espacio',
      'Deposítala en el contenedor de reciclaje azul o amarillo'
    ],
    recyclingLocations: [
      {
        name: 'Contenedor de Reciclaje Urbano',
        description: 'Contenedor amarillo/azul de tu zona',
        icon: '🟨'
      },
      {
        name: 'Punto Limpio',
        description: 'Estaciones especiales de reciclaje municipal',
        icon: '♻️'
      },
      {
        name: 'Supermercados',
        description: 'Muchos supermercados tienen puntos de recogida',
        icon: '🛒'
      }
    ],
    environmentalImpact: 'El reciclaje de plástico PET reduce un 86% de emisiones de CO2 comparado con la producción de nuevo plástico. Una botella reciclada puede convertirse en nuevas botellas, fibra textil o películas.',
    tips: [
      'El plástico PET se recicla mejor cuando está limpio y seco',
      'Puedes ahorrar espacio aplastando las botellas antes de reciclar',
      'Evita mezclar diferentes tipos de plástico',
      'Los tapones generalmente van al contenedor de plástico si son PET'
    ]
  },
  {
    barcode: '5901234123457',
    name: 'Lata de Aluminio',
    materials: ['Aluminio', 'Tinta'],
    recyclable: true,
    recyclingSteps: [
      'Vacía completamente la lata',
      'Enjuágala rápidamente',
      'Aplastala si deseas para ahorrar espacio',
      'Deposítala en el contenedor de metales (gris o plateado)'
    ],
    recyclingLocations: [
      {
        name: 'Contenedor de Metales',
        description: 'Contenedor gris o plateado de reciclaje',
        icon: '🟩'
      },
      {
        name: 'Punto Limpio',
        description: 'Centros de recogida selectiva',
        icon: '♻️'
      },
      {
        name: 'Empresas de Reciclaje',
        description: 'Compran aluminio directamente',
        icon: '💰'
      }
    ],
    environmentalImpact: 'El aluminio se recicla infinitamente sin perder propiedades. Reciclar una lata ahorra el 95% de la energía necesaria para hacer una nueva. Una lata reciclada vuelve al mercado en 60 días.',
    tips: [
      'El aluminio es infinitamente reciclable sin degradación',
      'Las latas tienen alto valor y muchos centros las aceptan',
      'Evita mezclar aluminio con otro metal diferente',
      'Aplasta las latas para facilitar el transporte y almacenamiento'
    ]
  },
  {
    barcode: '5412345000012',
    name: 'Botella de Vidrio',
    materials: ['Vidrio transparente', 'Tapa metálica'],
    recyclable: true,
    recyclingSteps: [
      'Vacía la botella completamente',
      'Retira la tapa metálica si es posible',
      'Enjuágala con agua',
      'Coloca en el contenedor verde (vidrio) cuidadosamente'
    ],
    recyclingLocations: [
      {
        name: 'Contenedor de Vidrio',
        description: 'Contenedor verde de reciclaje de vidrio',
        icon: '🟢'
      },
      {
        name: 'Punto Limpio',
        description: 'Estaciones especiales de reciclaje',
        icon: '♻️'
      },
      {
        name: 'Tiendas de Bebidas',
        description: 'Muchas aceptan botellas retornables',
        icon: '🏪'
      }
    ],
    environmentalImpact: 'El vidrio es 100% reciclable. Reciclar vidrio utiliza 30% menos energía que producir vidrio nuevo. No se degrada en el medio ambiente y puede reciclarse infinitamente.',
    tips: [
      'Separa vidrio transparente de vidrio de color si es posible',
      'No incluyas cerámica o porcelana en el contenedor de vidrio',
      'El vidrio roto puede causar lesiones - envuélvelo en papel',
      'Algunos vidrios (cristal de ventana) no son reciclables en programas urbanos'
    ]
  },
  {
    barcode: '4006381333931',
    name: 'Caja de Cartón',
    materials: ['Cartón corrugado', 'Tinta'],
    recyclable: true,
    recyclingSteps: [
      'Desdobla o aplasta completamente la caja',
      'Separa el cartón de otros materiales',
      'Si está mojada o muy contaminada, considera el rechazo',
      'Deposítala en el contenedor azul (papel/cartón)'
    ],
    recyclingLocations: [
      {
        name: 'Contenedor de Papel/Cartón',
        description: 'Contenedor azul de residuos urbanos',
        icon: '🟦'
      },
      {
        name: 'Punto Limpio',
        description: 'Centros de recogida municipal',
        icon: '♻️'
      },
      {
        name: 'Empresas de Logística',
        description: 'Muchas recogen cajas reutilizables',
        icon: '📦'
      }
    ],
    environmentalImpact: 'Reciclar cartón ahorra 1.4 barriles de petróleo por tonelada. El cartón se recicla hasta 7 veces. Cada reciclado de cartón economiza 2,5 toneladas de CO2.',
    tips: [
      'Aplasta las cajas para ahorrar espacio en contenedores',
      'Retira plásticos, poliestireno y otros materiales',
      'El cartón mojado es difícil de reciclar - mantén seco si es posible',
      'Las cajas con ceras o impermeabilizantes pueden no ser reciclables'
    ]
  },
  {
    barcode: '8718215031821',
    name: 'Bolsa de Plástico',
    materials: ['Polietileno (PE)', 'Colorantes'],
    recyclable: false,
    recyclingLocations: [],
    recyclingSteps: [],
    environmentalImpact: 'Las bolsas de plástico tardan 400 años en descomponerse. Cada año, más de 1 billón son utilizadas mundialmente. Solo el 9% se recicla. Contribuyen significativamente a la contaminación marina.',
    tips: [
      'Usa bolsas reutilizables en lugar de plásticas',
      'NUNCA pongas bolsas de plástico en el contenedor de reciclaje (pueden atascar máquinas)',
      'Reutiliza bolsas para basura o almacenamiento',
      'Algunos supermercados aceptan bolsas usadas para ser recicladas'
    ]
  },
  {
    barcode: '4059329099889',
    name: 'Batería Alcalina',
    materials: ['Zinc', 'Dióxido de Manganeso', 'Metales pesados'],
    recyclable: true,
    recyclingSteps: [
      'Guarda las baterías en un lugar seguro y seco',
      'Cúbrelas con cinta aislante para evitar cortocircuitos',
      'No las mezcles con residuos ordinarios',
      'Lleva a un punto de recogida especializado'
    ],
    recyclingLocations: [
      {
        name: 'Punto Limpio',
        description: 'Centro especializado para residuos peligrosos',
        icon: '🔋'
      },
      {
        name: 'Tiendas de Electrónica',
        description: 'Muchas tiendas ofrecen recogida de baterías',
        icon: '🛍️'
      },
      {
        name: 'Comercios de Juguetes',
        description: 'Suelen tener contenedores especiales',
        icon: '🧸'
      }
    ],
    environmentalImpact: 'Las baterías contienen metales pesados que pueden contaminar el suelo y el agua. El reciclaje de baterías recupera el 99% de los materiales. Impide que lleguen a vertederos.',
    tips: [
      'NUNCA tires baterías a la basura ordinaria',
      'Las baterías recargables también deben reciclarse',
      'Almacénalas en un lugar fresco y seco',
      'Separa baterías de diferentes tipos si es posible'
    ]
  }
];
