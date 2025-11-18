import { MapPin, Target, GraduationCap, Users } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const Conoceme = () => {
  return (
    <section id="conoceme" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle kicker="La persona detrás de GeoAI LATAM" title="Conóceme" />

      <div className="space-y-8">
        {/* Mi Historia */}
        <Card hover={false} className="p-8 md:p-10">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-geo-green">📖</span> Mi Historia
              </h3>

              <div className="space-y-4 leading-relaxed">
                <p>
                  Mi camino en GeoAI no empezó con una gran idea ni un plan perfecto. Empezó con curiosidad… y con muchas noches largas frente al computador, café al lado, tratando de entender por qué un modelo no entrenaba o por qué una imagen no se segmentaba como yo quería.
                </p>

                <p>
                  Soy alguien que ha encontrado en la inteligencia artificial y en los datos geoespaciales una forma de entender el territorio, pero también una forma de entenderme a mí mismo. Cada proyecto, cada hexágono, cada modelo que entreno, me recuerda por qué hago esto: porque me encanta descubrir cosas que antes no estaban a la vista.
                </p>

                <p>
                  A lo largo de estos años he trabajado en todo tipo de desafíos: desde segmentar ortoimagenes con Deep Learning hasta construir modelos en base H3 que cuentan historias del territorio, pasando por experimentos con nubes de puntos, predicciones, embeddings, ruralidad, urbanismo… todo lo que me permita mirar el territorio desde otro ángulo.
                </p>

                <p className="font-semibold text-white">
                  GeoAI LATAM nace porque me cansé de aprender solo.
                </p>

                <p>
                  Porque entendí que lo más valioso no es el código perfecto, sino el proceso: las dudas, los errores, los "no sé cómo resolver esto", los intentos fallidos y las pequeñas victorias que llegan de madrugada.
                </p>

                <p className="text-lg font-medium text-geo-cyan">
                  Aquí quiero compartir todo eso sin filtros.
                </p>

                <p>
                  No desde arriba, ni desde la postura del experto.<br />
                  Sino desde la de alguien que está aprendiendo en público, que disfruta documentar su camino y que cree que la mejor forma de crecer es hacerlo acompañado.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* En Resumen */}
        <Card hover={false} className="p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-geo-green">📋</span> En Resumen
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-geo-green/10 text-geo-green">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Ubicación</h4>
                <p className="text-white/70">Bogotá, Colombia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-geo-cyan/10 text-geo-cyan">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Enfoque</h4>
                <p className="text-white/70">GeoAI, Deep Learning, Remote Sensing y todo lo que despierte curiosidad</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-geo-green/10 text-geo-green">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Formación</h4>
                <p className="text-white/70">Aprender siempre, equivocarme sin miedo, mejorar cada día</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-geo-cyan/10 text-geo-cyan">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Misión</h4>
                <p className="text-white/70">Crear una comunidad donde la GeoAI se sienta cercana, humana y posible</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Por qué hago esto */}
        <Card hover={false} className="p-8 md:p-10">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-geo-green">💡</span> Por qué hago esto
              </h3>

              <div className="space-y-4 leading-relaxed">
                <p>
                  Porque Latinoamérica tiene historias increíbles guardadas en sus datos.<br />
                  Porque cuando miro un mapa, veo futuro.<br />
                  Porque nuestros territorios están llenos de problemas difíciles, sí, pero también de posibilidades gigantes.
                </p>

                <p>
                  Y porque creo profundamente que si compartimos lo que sabemos —lo bueno, lo malo, lo que funciona y lo que no—, podemos construir algo más grande que la suma de todos los modelos que entrenemos.
                </p>

                <p>
                  Mi objetivo no es enseñar desde un pedestal.<br />
                  Mi objetivo es caminar este camino contigo, mostrando lo real: los errores, las pruebas, las noches de café, las frustraciones, las sorpresas, y esas pequeñas epifanías que te hacen decir "ah, esto era".
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="text-center space-y-3">
                <p className="text-lg text-white/90">
                  Si estás aquí, ya eres parte de este viaje.
                </p>
                <p className="text-xl font-semibold text-white">
                  Gracias por acompañarme.
                </p>
                <p className="text-2xl font-bold gradient-text">
                  Bienvenid@ a GeoAI LATAM.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Conoceme
