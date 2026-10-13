function AboutPage() {
  return (
    <main>
      <section className="about-page" aria-labelledby="about-title">
        <p className="eyebrow">Sobre el proyecto</p>
        <h1 id="about-title">Aprender haciendo.</h1>
        <div className="about-copy">
          <p>El estante es un laboratorio pequeño para entender cómo se construye una interfaz con React.</p>
          <p>Ahora también incluye navegación entre páginas con React Router, rutas declarativas y enlaces que indican dónde estás.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
