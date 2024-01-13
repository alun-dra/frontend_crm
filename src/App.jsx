import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import ReclutamientoSeleccion from "./pages/rrhh/ReclutamientoYSeleccion";
import GestionDatosPersonal from "./pages/rrhh/GestionDatosdelPersonal";
import ComunicacionInterna from "./pages/rrhh/ComunicacionInterna";
import DesarrolloYFormacion from "./pages/rrhh/DesarrolloFormacion";
import EvaluacionYDesempeño from "./pages/rrhh/EvaluacionDesempeño";
import CalculoRemuneraciones from "./pages/rrhh/CalculoRemuneraciones";
import CumplimientoNormativas from "./pages/rrhh/CumplimientoNormativas";
import AnalisisYRepoertes from "./pages/rrhh/AnalisisRepoertes";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/reclutamientoSeleccion" element={<ReclutamientoSeleccion />} />
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
