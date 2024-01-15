import { BsPersonBoundingBox } from "react-icons/bs";



export const subMenuRecursoHumanos = [
    {
      name: "Recurso Humanos",
      icon: BsPersonBoundingBox,
      names: [
        {
          nameSubMenu: "Reclutamiento y Selección",
          path: "/reclutamientoSeleccion",
          submodules: [
            { name: "1.	Home", path: "/reclutamientoSeleccion/homereclutamiento" },
            { name: "2.	Sección de Gestión de Vacantes", path: "/reclutamientoSeleccion/gestionvacantes" },
            { name: "3.	Gestión de Candidatos", path: "/reclutamientoSeleccion/gestioncandidatos" },
            { name: "4.	Panel de Evaluación", path: "/reclutamientoSeleccion/evaluaciones" },
            { name: "5.	Reportes y Análisis", path: "/reclutamientoSeleccion/reporteanalisisreclutamiento" },
            { name: "6.	Configuración y Personalización", path: "/reclutamientoSeleccion/configuracionreclutamiento" },
            
          ],
        },
        {
          nameSubMenu: "Gestión de Datos del Personal",
          path: "/gestiondeDatosdePersonal",
          submodules: [
            { name: "1.	Home", path: "/gestiondeDatosdePersonal/homegestionpersonal" },
            { name: "2.	Lista del Personal", path: "/gestiondeDatosdePersonal/listadepersonal" },
            { name: "3.	Perfil del Personal", path: "/gestiondeDatosdePersonal/perfilesdelpersonal" },
            { name: "4.	Edición y Actualización de Datos", path: "/gestiondeDatosdePersonal/actualizaciondatos" },
            { name: "5.	Herramientas de Administración", path: "/gestiondeDatosdePersonal/herramientasadministracion" },
            { name: "6.	Reportes y Análisis", path: "/gestiondeDatosdePersonal/reporteanalisisgestiospersonal" },
          ],
        },
        {
          nameSubMenu: "Comunicación Interna",
          path: "/ComunicacionInterna",
          submodules: [
            { name: "1.	Home", path: "/ComunicacionInterna/homecomunicaciones" },
            { name: "2.	Mensajería", path: "/ComunicacionInterna/mensajeria" },
            { name: "3.	Anuncios y Noticias de la Empresa", path: "/ComunicacionInterna/noticias" },
            { name: "4.	Encuestas y Feedback", path: "/ComunicacionInterna/encuestas" },

          ],
        },
        {
          nameSubMenu: "Desarrollo y Formación",
          path: "/DesarrolloyFormacion",
          submodules: [
            { name: "1.	Home", path: "/DesarrolloyFormacion/submodulo1" },
            { name: "2.	Catálogo de Cursos", path: "/DesarrolloyFormacion/homedesarrolloformacion" },
            { name: "3.	Mi Plan de Desarrollo", path: "/DesarrolloyFormacion/plandesarrollo" },
            { name: "4.	Historial de Formación", path: "/DesarrolloyFormacion/historialfomacion" },
            { name: "5.	Herramientas de Gestión de Formación", path: "/DesarrolloyFormacion/gestioninformacion "},         
            { name: "6.	Calendario de Formación", path: "/DesarrolloyFormacion/calendarioinformacion" },
            { name: "7.	Comunidad y Colaboración", path: "/DesarrolloyFormacion/comunidadcolaboracion" },
            { name: "8.	Configuración y Personalización", path: "/DesarrolloyFormacion/configuraciondesarrollo" },
          ],
        },
        {
          nameSubMenu: "Evaluación de Desempeño",
          path: "/EvaluaciondeDesempeno",
          submodules: [
            { name: "1.	Home", path: "/EvaluaciondeDesempeno/homeevaluaciones" },
            { name: "2.	Gestión de Evaluaciones", path: "/EvaluaciondeDesempeno/gestionevaluaciones" },
            { name: "3.	Realización de Evaluaciones", path: "/EvaluaciondeDesempeno/realizacionevaluaciones" },
            { name: "4.	Seguimiento de Evaluaciones", path: "/EvaluaciondeDesempeno/seguimiento" },
            { name: "5.	Análisis y Reportes", path: "/EvaluaciondeDesempeno/resporteanalisisevaluaciones" },
            { name: "6.	Feedback y Planes de Acción", path: "/EvaluaciondeDesempeno/planesaccion" },
            { name: "7.	Configuración y Personalización", path: "/EvaluaciondeDesempeno/configuracionevaluaciones" },
            
          ],
        },
        {
          nameSubMenu: "Cálculo de Remuneraciones",
          path: "/calculodeRemuneraciones",
          submodules: [
            { name: "1.	Home", path: "/calculodeRemuneraciones/homecalculo" },
            { name: "2.	Gestión de Nómina", path: "/calculodeRemuneraciones/gestionnomina" },
            { name: "3.	Detalle de Remuneraciones", path: "/calculodeRemuneraciones/detalleremuneraciones" },
            { name: "4.	Histórico de Nóminas", path: "/calculodeRemuneraciones/historiaremuneraciones" },
            { name: "5.	Reportes y Análisis", path: "/calculodeRemuneraciones/reporteanalisisremuneraciones" },
            { name: "6.	Herramientas de Validación y Cumplimiento", path: "/calculodeRemuneraciones/validacionremu" },
            { name: "7.	Configuración y Personalización", path: "/calculodeRemuneraciones/configuracionremuneraciones" },
            
          ],
        },
        {
          nameSubMenu: "Cumplimiento de Normativas",
          path: "/cumplimientodeNormativas",
          submodules: [
            { name: "1.	Home", path: "/cumplimientodeNormativas/homecumplimiento" },
            { name: "2.	Gestión de Leyes y Normativas", path: "/cumplimientodeNormativas/leyesnormas" },
            { name: "3.	Auditorías y Cumplimiento", path: "/cumplimientodeNormativas/auditorias" },
            { name: "4.	Reportes y Análisis", path: "/cumplimientodeNormativas/reporteanalisisnormativas" },
            { name: "5.	Herramientas de Capacitación y Concienciación", path: "/cumplimientodeNormativas/capacitacion" },
            { name: "6.	Gestión de Documentación", path: "/cumplimientodeNormativas/documentacion" },
            { name: "7.	Configuración y Personalización", path: "/cumplimientodeNormativas/configuracionnormativas" },
            
          ],
        },
        {
          nameSubMenu: "Análisis y Reportes",
          path: "/analisisyReportes",
          submodules: [
            { name: "1.	Home", path: "/analisisyReportes/homereportes" },
            { name: "2.	Creación y Personalización de Reportes", path: "/analisisyReportes/reportes" },
            { name: "3.	Análisis de Datos", path: "/analisisyReportes/analisisdatos" },
            { name: "4.	Reportes Guardados y Históricos", path: "/analisisyReportes/reporteshistoricos" },
            { name: "5.	Exportación y Compartición", path: "/analisisyReportes/exportacioncomparacion" },
            { name: "6.	Alertas e Indicadores", path: "/analisisyReportes/alestasindicadores" },
            { name: "7.	Configuración y Personalización", path: "/analisisyReportes/configuracionreportes" },
            
          ],
        },
      ],        
    },
]

