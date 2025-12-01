# NetworkParticles Component

Componente de React para crear un efecto de partículas tipo "network" con conexiones dinámicas en el fondo de tu aplicación.

## Características

- ✨ **Partículas animadas** que se mueven suavemente por la pantalla
- 🔗 **Conexiones dinámicas** entre partículas cercanas
- 🖱️ **Interacción con el mouse** - las partículas se conectan al cursor
- 📱 **Completamente responsive** - se adapta al tamaño de la ventana
- 🎨 **Personalizable** - colores, cantidad de partículas, velocidad, etc.
- ⚡ **Optimizado** - usa Canvas API para rendimiento máximo

## Uso Básico

```jsx
import { NetworkParticles } from '../components/ui'

export default function Page() {
  return (
    <div className="relative">
      <NetworkParticles />
      <div className="relative z-10">
        {/* Tu contenido aquí */}
      </div>
    </div>
  )
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `particleCount` | `number` | `100` | Número de partículas en pantalla |
| `particleColor` | `string` | `'rgba(16, 185, 129, 0.6)'` | Color de las partículas (geo-green) |
| `lineColor` | `string` | `'rgba(6, 182, 212, 0.3)'` | Color de las líneas de conexión (geo-cyan) |
| `particleSize` | `number` | `2` | Tamaño de cada partícula en píxeles |
| `linkDistance` | `number` | `150` | Distancia máxima para conectar partículas |
| `speed` | `number` | `0.5` | Velocidad de movimiento de las partículas |
| `className` | `string` | `''` | Clases CSS adicionales |

## Ejemplos

### Efecto sutil (menos partículas)
```jsx
<NetworkParticles
  particleCount={50}
  particleColor="rgba(16, 185, 129, 0.3)"
  lineColor="rgba(6, 182, 212, 0.2)"
/>
```

### Efecto intenso (más partículas y conexiones)
```jsx
<NetworkParticles
  particleCount={150}
  particleColor="rgba(16, 185, 129, 0.8)"
  lineColor="rgba(6, 182, 212, 0.5)"
  linkDistance={200}
  speed={1}
/>
```

### Colores personalizados
```jsx
<NetworkParticles
  particleColor="rgba(139, 92, 246, 0.6)" // Púrpura
  lineColor="rgba(236, 72, 153, 0.3)" // Rosa
/>
```

### Movimiento lento y relajante
```jsx
<NetworkParticles
  speed={0.2}
  particleCount={80}
/>
```

## Notas Técnicas

- El componente usa `'use client'` para renderizado del lado del cliente
- Se adapta automáticamente al redimensionamiento de la ventana
- El `z-index` está configurado en `0` para mantenerlo en el fondo
- Usa `pointer-events-none` para que no interfiera con clics
- La animación se limpia automáticamente al desmontar el componente

## Rendimiento

- Optimizado con `requestAnimationFrame` para animaciones fluidas (60fps)
- Canvas API para renderizado eficiente
- Se recomienda usar entre 50-150 partículas para mejor rendimiento
- En dispositivos móviles, considera reducir `particleCount` para mejor rendimiento

## Integración con GeoAI LATAM

El componente está configurado por defecto con los colores del tema GeoAI:
- **geo-green** (#10b981) para las partículas
- **geo-cyan** (#06b6d4) para las líneas de conexión

Estos colores se integran perfectamente con el resto del diseño del sitio.
