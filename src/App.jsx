
import { useState, useEffect } from 'react';
import { Formulario, Header, ListadoPacientes } from "./components/";

export const App = () => {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  

  const eliminarPaciente = ( id ) => {
    console.log(`Eliminando paciente con el id ${id}`)
    const pacientesNuevos = pacientes.filter( p => p.id !== id);
    setPacientes(pacientesNuevos)
  }

  return (
    <div className="container mx-auto mt-20">
        <Header />
        
        <div className="mt-12 md:flex">
          <Formulario pacientes={ pacientes } setPacientes={ setPacientes } paciente={ paciente } setPaciente = { setPaciente } />
          <ListadoPacientes pacientes={ pacientes } setPaciente={ setPaciente } eliminarPaciente={ eliminarPaciente }/>
        </div>
    </div>
  )
}
