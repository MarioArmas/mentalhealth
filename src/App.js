import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App w-4/5 mx-auto my-8">
      <section className='border-b border-b-black pb-8'>
        <h1 className='text-3xl m-5 font-bold'>Mental Health</h1>
        <h2 className='text-xl text-left'>No estás seguro de si necesitas ayuda profesional.</h2>
        <p className='text-left'>¿Te sientes un tanto indeciso acerca de tus emociones? ¿Te gustaría realizar un breve cuestionario en línea que te permita autoevaluarte y comprender mejor tu situación actual? Esto te ayudará a tomar decisiones más informadas sobre cuál debería ser tu próximo paso.</p>
        <a
          onClick={() => {
            console.log('hola')
          }}
          href="https://clinicasorigen.es/test/test-de-ansiedad/"
          target='_blank'
          rel='noreferrer'
          className='text-cyan-600 hover:border-b hover:border-b-cyan-600'
        >Realiza tu test aquí</a>
      </section>


      <section className='border-b border-b-black pb-10'>
        <h2 className='text-3xl mt-10 mb-2'>Contactos para buscar ayuda</h2>
        <Contact
          name='Maria Fernanda González'
          organization='Edificio Zona Médica'
          direction='7av. Av. 9-64 zona 9, Edificio Zona Medica | Ciudad de Guatemala, Guatemala'
        />
        <Contact
          name='Marckus Rivera Pineda'
          organization='Grupo CREARE'
          direction='19 Avenida 5-02, zona 15, Vista Hermosa I | Ciudad de Guatemala, Guatemala'
        />
        <Contact
          name='Lilian Vásquez M'
          organization='MindKinds'
          direction='8va. Ave. 1-31 Zona 1 | Ciudad de Guatemala, Guatemala'
        />
        <a
          href="https://www.doctorisy.com/guatemala/psicologia/"
          target='_blank'
          rel='noreferrer'
          className='text-cyan-600 hover:border-b hover:border-b-cyan-600'>Buscar más contactos</a>
      </section>



      <section>
        <h2 className='text-3xl m-5 mt-12'>¿Qué es la salud mental?</h2>
        <p className='text-left'>La salud mental se refiere al estado emocional, psicológico y social de una persona. Incluye el bienestar emocional, la capacidad de manejar el estrés, las relaciones interpersonales saludables y la capacidad de tomar decisiones. La salud mental es fundamental para el funcionamiento diario y la calidad de vida.</p>
        <p className='text-left'>Aqui hay algunas razones de la importancia de la salud mental:</p>
        <ul className='text-left'>
          <li className='my-3'>1. Bienestar General: Cuando alguien tiene una buena salud mental, es más probable que experimente una sensación de felicidad, satisfacción y plenitud en la vida.</li>
          <li className='my-3'>2. Relaciones interpersonales: La salud mental influye en la capacidad de establecer y mantener relaciones saludables.</li>
          <li className='my-3'>3. Rendimiento académico y laboral: La capacidad para concentrarse, aprender, tomar decisiones y resolver problemas se ve afectada por el estado de la salud mental.</li>
          <li className='my-3'>4. Resilencia: La resiliencia es la capacidad de recuperarse de situaciones difíciles, y una buena salud mental juega un papel crucial en este proceso.</li>
          <li className='my-3'>5. Autocuidado: Mantener una buena salud mental implica prácticas de autocuidado, como el manejo del estrés, el descanso adecuado y la atención a las necesidades emocionales.</li>
          <li className='my-3'>6. Prevención de trastornos mentales: La detección temprana y el tratamiento adecuado son clave para abordar problemas antes de que se intensifiquen.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
