import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";
import { IoBarChart } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

export const subMenuClients = [
    {
      name: "clientes",
      icon: BsPerson,
      menus: ["Perfiles", "Segmentación", "Historial"],
    },
]

export const subMenuVentas = [
    {
      name: "ventas",
      icon: IoBarChart,
      menus: ["Oportunidades", "Pipeline", "Contizaciones"],
    },
]

export const subMenuMarketing = [
    {
      name: "marketing",
      icon: RiBuilding3Line,
      menus: ["Campañas", "Automatización", "Análisis"],
    },
]

export const subMenuSoporte = [
    {
      name: "Soporte",
      icon: RiBuilding3Line,
      menus: ["Tickets", "Base de Conocimiento", "Portal de Clientes"],
    },
]

export const subMenuProyectos = [
    {
      name: "Proyectos",
      icon: RiBuilding3Line,
      menus: ["Planificación", "Tareas", "Recursos"],
    },
]

export const subMenuInformes = [
    {
      name: "Informes",
      icon: RiBuilding3Line,
      menus: ["Dashboards", "Dashboards", "Tendencias"],
    },
]

export const subMenuConfiguración = [
    {
      name: "Configuración",
      icon: RiBuilding3Line,
      menus: ["Integraciones", "Personalización", "API"],
    },
]

export const subMenuDocumentos = [
    {
      name: "Documentos",
      icon: RiBuilding3Line,
      menus: ["Gestión", "Colaboración", "Auditoría"],
    },
]

export const subMenuActividades = [
    {
      name: "Actividades",
      icon: RiBuilding3Line,
      menus: ["Calendario", "Recordatorios", "Tiempo"],
    },
]

export const subMenuMóvil = [
    {
      name: "marketing",
      icon: RiBuilding3Line,
      menus: ["Aplicaciones", "Sincronización", "Seguridad"],
    },
]

export const subMenuSocial = [
    {
      name: "marketing",
      icon: RiBuilding3Line,
      menus: ["Redes Sociales", "Colaboración"],
    },
]

export const subMenuSeguridad = [
    {
      name: "marketing",
      icon: RiBuilding3Line,
      menus: ["Privacidad", "Cumplimiento"],
    },
]

export const subMenuRecursoHumanos = [
    {
      name: "Recurso Humanos",
      icon: BsPersonBoundingBox,
      names: [
        {
          nameSubMenu: "Reclutamiento y Selección",
          path: "/reclutamientoSeleccion"
        },
        {
          nameSubMenu: "Gestión de Datos del Personal",
          path: "/gestiondeDatosdePersonal"
        },
        {
          nameSubMenu: "Comunicación Interna",
          path: "/ComunicacionInterna"
        },
        {
          nameSubMenu: "Desarrollo y Formación",
          path: "/DesarrolloyFormacion"
        },
        {
          nameSubMenu: "Evaluación de Desempeño",
          path: "/EvaluaciondeDesempeno"
        },
        {
          nameSubMenu: "Cálculo de Remuneraciones",
          path: "/calculodeRemuneraciones"
        },
        {
          nameSubMenu: "Cumplimiento de Normativas",
          path: "/cumplimientodeNormativas"
        },
        {
          nameSubMenu: "Análisis y Reportes",
          path: "/analisisyReportes"
        },
      ],        
    },
]

export const subMenuInventario = [
    {
      name: "Inventario",
      icon: RiBuilding3Line,
      menus: 
        [
            "Gestión de Stock", 
            "Control de Almacén", 
            "Proveedores", 
            "Órdenes de Compra", 
            "Movimientos y Ajustes", 
            "Informes de Inventario", 
        ],
    },
]

export const subMenuCompras = [
    {
      name: "Compras",
      icon: RiBuilding3Line,
      menus: 
        [
            "Proveedores", 
            "Pedidos de Compra", 
            "Recepción de Mercancías", 
            "Facturación y Pagos", 
            "Análisis de Compras", 
        ],
    },
]

export const subMenuSeguimientodeClientes = [
    {
      name: "Seguimiento de Clientes",
      icon: RiBuilding3Line,
      menus: 
        [
            "Actividad de Clientes", 
            "Historial de Compras", 
            "Preferencias y Tendencias", 
            "Lealtad y Retención", 
            "Feedback y Sugerencias", 
        ],
    },
]