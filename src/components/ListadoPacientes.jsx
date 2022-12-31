import { useEffect } from "react"
import { Paciente } from "./Paciente"


export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    
  }, [pacientes])
  

  return (
    <div className="md:w-1/2 lg:w-3/5">

        {
          (pacientes.length === 0) ? (
            <div>
              <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

              <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando tus {''}
                  <span className="text-indigo-600 font-bold">
                    Pacientes y Citas
                  </span>
              </p>
            </div>
          ) : (
            <div>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Administras tus {''}
                <span className="text-indigo-600 font-bold">
                  Pacientes y Citas
                </span>
            </p>
    
            <div className="md:h-screen overflow-y-auto">
            {
              pacientes.map( paciente => (
                <Paciente key={paciente.id} paciente={paciente} setPaciente={ setPaciente } eliminarPaciente={ eliminarPaciente }/>
              ))
            }
            
            </div>
            </div>
          ) 
        }
        
    </div>

  )
}
