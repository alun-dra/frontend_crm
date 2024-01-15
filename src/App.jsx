import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ReclutamientoSeleccion from "./pages/rrhh/ReclutamientoYSeleccion";
import GestionDatosPersonal from "./pages/rrhh/GestionDatosdelPersonal";
import ComunicacionInterna from "./pages/rrhh/ComunicacionInterna";
import DesarrolloYFormacion from "./pages/rrhh/DesarrolloFormacion";
import EvaluacionYDesempeño from "./pages/rrhh/EvaluacionDesempeño";
import CalculoRemuneraciones from "./pages/rrhh/CalculoRemuneraciones";
import CumplimientoNormativas from "./pages/rrhh/CumplimientoNormativas";
import AnalisisYRepoertes from "./pages/rrhh/AnalisisRepoertes";

//submodulos reclutamiento y seleccion
import Homereclutamiento from "./components/reclutamientoSeleccion/Home";
import GestionCandidatos from "./components/reclutamientoSeleccion/GestionCandidatos";
import GestionVacantes from "./components/reclutamientoSeleccion/GestionVacantes";
import PanelEvaluacion from "./components/reclutamientoSeleccion/PanelEvaluacion";
import ReporteAnalisis from "./components/reclutamientoSeleccion/ReporteAnalisis";
import ConfiguracionReclutamiento from "./components/reclutamientoSeleccion/Configuracion";


const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<ReclutamientoSeleccion />}/>
          

        <Route path="reclutamientoSeleccion" element={<ReclutamientoSeleccion />}> 
          <Route path="homereclutamiento" element={<Homereclutamiento />}/>
          <Route path="gestionvacantes" element={< GestionVacantes />}/>
          <Route path="gestioncandidatos" element={<GestionCandidatos />}/>
          <Route path="evaluaciones" element={<PanelEvaluacion />}/>
          <Route path="reporteanalisisreclutamiento" element={<ReporteAnalisis />}/>
          <Route path="configuracionreclutamiento" element={<ConfiguracionReclutamiento />}/>
          {/* <Route path="/" element={< />}/>
          <Route path="/" element={< />}/> */}
          
        </Route> 
        <Route path="/gestiondeDatosdePersonal" element={<GestionDatosPersonal />} />
        <Route path="/ComunicacionInterna" element={<ComunicacionInterna />} />
        <Route path="/DesarrolloyFormacion" element={<DesarrolloYFormacion />} />
        <Route path="/EvaluaciondeDesempeno" element={<EvaluacionYDesempeño />} />
        <Route path="/calculodeRemuneraciones" element={<CalculoRemuneraciones />} />
        <Route path="/cumplimientodeNormativas" element={<CumplimientoNormativas />} />
        <Route path="/analisisyReportes" element={<AnalisisYRepoertes />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
