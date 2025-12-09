import { motion } from 'framer-motion';
import { ArrowDown, User, Brain, Database, Palette, Map, FileText } from 'lucide-react';

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
      text: 'Descompone en sub-tareas',
      icon: Brain,
    },
    {
      id: 'data',
      title: 'Agente Datos',
      text: 'Obtiene capas: inundaciones, escuelas',
      icon: Database,
    },
    {
      id: 'symbolizer',
      title: 'Agente Simbolización',
      text: 'Calcula buffer 1km, intersecciones',
      icon: Palette,
    },
    {
      id: 'visualizer',
      title: 'Agente Visualizer',
      text: 'Genera mapa interactivo',
      icon: Map,
    },
    {
      id: 'reporter',
      title: 'Agente Reporter',
      text: 'Encontré 12 escuelas en zonas de alto riesgo…',
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
    <div className="my-8 p-6 md:p-8 bg-gradient-to-b from-geo-dark-900/50 to-geo-dark-800/30 rounded-card-lg border border-geo-green-500/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl mx-auto"
      >
        {steps.map((step, index) => {
          const styles = getStepStyles(step.accent);
          const Icon = step.icon;

          return (
            <div key={step.id}>
              <motion.div
                variants={stepVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`
                  relative p-5 rounded-card border-2 transition-all duration-300
                  ${styles.container}
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                    ${styles.icon}
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 ${styles.title}`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Badge de tipo de agente */}
                {!step.accent && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-geo-green-500/10 border border-geo-green-500/30 rounded text-xxs text-geo-green-400 font-mono">
                    AGENTE
                  </div>
                )}
              </motion.div>

              {/* Flecha conectora animada */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="flex justify-center my-3"
                >
                  <div className="relative">
                    <ArrowDown className="w-6 h-6 text-geo-green-400/60 animate-pulse-slow" />
                    <div className="absolute inset-0 blur-sm">
                      <ArrowDown className="w-6 h-6 text-geo-green-400/40" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>

      <p className="text-sm text-gray-400 mt-6 text-center italic">
        Figura 2: Arquitectura de sistema A2A con agentes especializados colaborando
      </p>
    </div>
  );
};

export default AgentFlowDiagram;
