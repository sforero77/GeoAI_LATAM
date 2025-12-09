import { motion } from 'framer-motion';
import { ArrowDown, User, Brain, Database, Palette, Map, FileText, Layers } from 'lucide-react';

const AgentFlowDiagram = () => {
  const steps = [
    {
      id: 'user',
      title: 'Usuario',
      text: '"Muéstrame las áreas con mayor riesgo de inundación cerca de escuelas"',
      accent: 'user',
      icon: User,
    },
    {
      id: 'planner',
      title: 'Agente Planner',
      text: 'Descompone en sub-tareas: obtener datos, análisis espacial, visualización',
      icon: Brain,
    },
    {
      id: 'data',
      title: 'Agente Datos',
      text: 'Obtiene capas desde PostGIS: zonas_inundacion, escuelas',
      icon: Database,
    },
    {
      id: 'gis',
      title: 'Agente GIS',
      text: 'Ejecuta operaciones: buffer 1km en escuelas, intersect con zonas inundación',
      icon: Layers,
    },
    {
      id: 'symbolizer',
      title: 'Agente Simbolización',
      text: 'Define estilos: escuelas en rojo, zonas de riesgo en gradiente amarillo-rojo',
      icon: Palette,
    },
    {
      id: 'visualizer',
      title: 'Agente Visualizer',
      text: 'Genera mapa interactivo con capas y controles',
      icon: Map,
    },
    {
      id: 'reporter',
      title: 'Agente Reporter',
      text: 'Encontré 12 escuelas en zonas de alto riesgo de inundación…',
      accent: 'result',
      icon: FileText,
    },
  ];

  const getStepStyles = (accent) => {
    if (accent === 'user') {
      return {
        container: 'bg-gradient-to-br from-geo-cyan-500/10 to-geo-cyan-600/5 border-geo-cyan-400/40 shadow-glow-cyan',
        title: 'text-geo-cyan-300',
        icon: 'text-geo-cyan-400 bg-geo-cyan-500/10',
      };
    }
    if (accent === 'result') {
      return {
        container: 'bg-gradient-to-br from-geo-green-500/10 to-geo-green-600/5 border-geo-green-400/40 shadow-glow-green',
        title: 'text-geo-green-300',
        icon: 'text-geo-green-400 bg-geo-green-500/10',
      };
    }
    return {
      container: 'bg-geo-dark-800/40 border-geo-green-500/20 hover:border-geo-green-400/40',
      title: 'text-geo-green-400',
      icon: 'text-geo-green-400 bg-geo-green-500/10',
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="my-6 p-4 md:p-6 bg-gradient-to-b from-geo-dark-900/50 to-geo-dark-800/30 rounded-card-lg border border-geo-green-500/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mx-auto"
      >
        {steps.map((step, index) => {
          const styles = getStepStyles(step.accent);
          const Icon = step.icon;

          return (
            <div key={step.id}>
              <motion.div
                variants={stepVariants}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className={`
                  relative p-3 md:p-4 rounded-card border transition-all duration-300
                  ${styles.container}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                    ${styles.icon}
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-sm mb-1 ${styles.title}`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Badge de tipo de agente */}
                {!step.accent && (
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-geo-green-500/10 border border-geo-green-500/30 rounded text-xxs text-geo-green-400 font-mono">
                    AGENTE
                  </div>
                )}
              </motion.div>

              {/* Flecha conectora animada */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="flex justify-center my-2"
                >
                  <div className="relative">
                    <ArrowDown className="w-4 h-4 text-geo-green-400/60 animate-pulse-slow" />
                    <div className="absolute inset-0 blur-sm">
                      <ArrowDown className="w-4 h-4 text-geo-green-400/40" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>

      <p className="text-xs text-gray-400 mt-4 text-center italic">
        Figura 2: Caso de uso — Flujo de trabajo A2A para análisis de riesgo de inundaciones en escuelas
      </p>
    </div>
  );
};

export default AgentFlowDiagram;
