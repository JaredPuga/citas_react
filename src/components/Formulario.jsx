import { useState, useEffect } from 'react'
import { Error } from './Error';


export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  const generarId = () =>{
    const fecha = Date.now();

    return fecha
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true); 
      return;
    } 
    
      setError(false); const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
      }

      if (paciente.id ) {
        //Editando el registo
        objetoPaciente.id = paciente.id

        const pacientesActializados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? 
          objetoPaciente : pacienteState )
        
        setPacientes(pacientesActializados)
        setPaciente({})
      } else {
        //Nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
      }

      
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={ handleSubmit }
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 ">

        {error && <Error mensaje={'Error!!, todos los campos deben llenarse'}/>}
        <div  className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota: 
          </label>
          <input 
            type='text'
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
            value={ nombre }
            onChange={ (e) => setNombre(e.target.value) }
            autoComplete='off'
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario: 
          </label>
          <input 
            type='text'
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ propietario }
            onChange={ (e) => setPropietario(e.target.value) }
            id="propietario"
            autoComplete='off'
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            email:
          </label>
          <input 
            type='email'
            placeholder="example@example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            id="email"
            autoComplete='off'
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta:
          </label>
          <input 
            type='date'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ fecha }
            onChange={ (e) => setFecha(e.target.value) }
            id="alta"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas:
          </label>
          <textarea
            value={ sintomas }
            onChange={ (e) => setSintomas(e.target.value) }
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
          />
        </div>

        <input 
          type='submit'
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}
