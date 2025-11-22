# 🌍 EcoScanner - App de Reciclaje Inteligente

EcoScanner es una aplicación web interactiva que te ayuda a identificar si los productos son reciclables, cómo reciclarlos correctamente y dónde llevarlos. ¡Ahora con más funcionalidades de gamificación y estadísticas!

## ✨ Características Principales

### 📸 Escaneo de Códigos
- **Escáner de Cámara**: Captura códigos de barras usando la cámara de tu dispositivo
- **Validación Real**: Verifica checksums matemáticos para asegurar códigos válidos
- **Búsqueda Manual**: Opción de ingreso manual de códigos de barras

### ♻️ Información de Reciclaje
- Estado de reciclabilidad (Sí/No)
- Materiales del producto
- Pasos detallados para reciclar
- Ubicaciones donde llevarlo
- Impacto ambiental del reciclaje
- Consejos prácticos

### 🎉 Celebración Animada
- Personaje bailarín animado
- Confeti cayendo
- Felicitaciones personalizadas
- Estrellas titilantes

### 📋 Historial de Escaneos
- Guarda todos los productos escaneados
- Información de cuándo se escanearon
- Acceso rápido a detalles
- Opción para compartir productos

### 🖼️ Galería de Productos
- Vista de todos los productos únicos escaneados
- Cards visuales con estado de reciclaje
- Filtrado rápido de materiales

### 📊 Estadísticas de Reciclaje
- Cantidad de productos escaneados
- Tasa de reciclaje
- CO₂ ahorrado
- Energía ahorrada
- Comparaciones de impacto ambiental
- Motivación personalizada

### 🎯 Desafíos Semanales
- Desafío principal con progreso
- 6 desafíos globales diferentes
- Sistema de puntos ecológicos (🌱)
- Badges de logros
- Recompensas por completar

### 🌱 Sistema de Puntos Ecológicos
- +10 puntos por cada producto escaneado
- Bonus por completar desafíos
- Historial de puntos guardado
- Visualización en navbar

### 📤 Compartir en Redes
- **WhatsApp**: Compartir productos directamente
- **Twitter**: Tweet con información
- **Facebook**: Compartir con amigos
- **Telegram**: Enviar a contactos
- **Copiar Texto**: Compartir manualmente

### 🌙 Modo Oscuro
- Toggle fácil entre modo claro y oscuro
- Temas optimizados para cada modo
- Preferencia guardada en localStorage
- Transiciones suaves

### 🎮 Gamificación
- Sistema de puntos ecológicos
- Desafíos progresivos
- Logros y badges
- Estadísticas personales
- Motivación visual

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **CSS3** - Estilos modernos, responsivos y con tema oscuro
- **JavaScript ES6+** - Lógica de la aplicación
- **Context API** - Gestión de estado global
- **localStorage** - Persistencia de datos
- **Camera API** - Acceso a la cámara del dispositivo

## 📦 Instalación

1. Clona o descarga el proyecto:
```bash
cd EcoScanner
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🛠️ Construcción para Producción

```bash
npm run build
```

## 📱 Compatibilidad

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos móviles
- ✅ Tablets
- ⚠️ Requiere permiso de acceso a cámara (para escaneo)

## 📊 Base de Datos de Productos

Actualmente incluye información sobre:
- Botellas de plástico PET
- Latas de aluminio
- Botellas de vidrio
- Cajas de cartón
- Bolsas de plástico (¡no reciclables!)
- Baterías alcalinas

## 🔄 Flujo de la App

1. **Inicio**: Usuario ve navbar + scanner
2. **Escaneo**: Captura código de barras o busca manualmente
3. **Validación**: Sistema verifica si el código es válido
4. **Celebración**: Animación de felicitación de 3 segundos
5. **Información**: Recibe detalles completos de reciclaje
6. **Guardado**: Se agrega automáticamente al historial y suma puntos
7. **Exploración**: Acceso a galería, historial, estadísticas, desafíos

## 🎨 Diseño

- Interfaz moderna y limpia
- Gradientes atractivos en claro (púrpura/azul) y oscuro (azul marino)
- Animaciones suaves y atractivas
- Diseño completamente responsivo
- Modo oscuro optimizado para la vista nocturna
- Accesibilidad considerada

## 📝 Estructura del Proyecto

```
EcoScanner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Scanner.js
│   │   ├── SearchBar.js
│   │   ├── ProductInfo.js
│   │   ├── Celebration.js
│   │   ├── Gallery.js
│   │   ├── History.js
│   │   ├── Statistics.js
│   │   ├── Challenges.js
│   │   ├── ShareModal.js
│   │   └── [CSS files]
│   ├── context/
│   │   ├── ThemeContext.js
│   │   └── AppDataContext.js
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🌟 Contextos Disponibles

### ThemeContext
- `isDarkMode`: Estado del tema
- `toggleTheme()`: Cambiar entre temas

### AppDataContext
- `scannedHistory`: Historial de escaneos
- `ecoPoints`: Puntos ecológicos acumulados
- `weeklyChallenge`: Desafío semanal actual
- `addToHistory(product)`: Agregar producto al historial
- `addPoints(points)`: Sumar puntos
- `clearHistory()`: Limpiar historial
- `deleteHistoryItem(id)`: Eliminar un item
- `resetChallenge()`: Reiniciar desafío

## 🌟 Mejoras Futuras

- [ ] Integración con API de códigos de barras reales (Barcode API)
- [ ] Base de datos de productos más extensa
- [ ] Localización de puntos de reciclaje con Google Maps
- [ ] Sistema avanzado de gamificación (niveles, rangos)
- [ ] Notificaciones push de recordatorios de reciclaje
- [ ] Integración con Bluetooth para escaners reales
- [ ] Análisis de datos personales
- [ ] Competencias entre usuarios
- [ ] Tienda de premios
- [ ] Integración con empresas de reciclaje locales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## 🌍 Misión

Promover la conciencia ambiental y facilitar el reciclaje correcto mediante tecnología accesible, educación interactiva y gamificación motivadora.

## 📧 Contacto

¿Preguntas o sugerencias? ¡No dudes en contactarnos!

## 🎓 Códigos de Barras Válidos para Probar

```
5901234123457 - Lata de aluminio
5412345000012 - Botella de vidrio
4006381333931 - Caja de cartón
8480010058    - Botella de plástico PET
```

---

Hecho con 💚 para un planeta más limpio

