export interface Plaza {
  id: string;
  name: string;
  area: number;
  vegetation: string;
  lastIrrigation: string;
  humidity: number;
  ndvi: number;
  ndwi: number;
  temperature: number;
  windSpeed: number;
  status: "optimal" | "warning" | "critical";
  lat: number;
  lng: number;
  recommendation: string;
}

export const mockPlazas: Plaza[] = [
  {
    id: "1",
    name: "Plaza Central",
    area: 2800,
    vegetation: "Arbustos y césped",
    lastIrrigation: "3 días",
    humidity: 68,
    ndvi: 0.75,
    ndwi: 0.42,
    temperature: 22,
    windSpeed: 12,
    status: "optimal",
    lat: -36.6069,
    lng: -72.1028,
    recommendation: "No regar hoy. Condiciones óptimas.",
  },
  {
    id: "2",
    name: "Plaza de Armas",
    area: 3200,
    vegetation: "Árboles nativos y césped",
    lastIrrigation: "5 días",
    humidity: 45,
    ndvi: 0.62,
    ndwi: 0.28,
    temperature: 24,
    windSpeed: 15,
    status: "warning",
    lat: -36.6049,
    lng: -72.1048,
    recommendation: "Considerar riego en 1-2 días.",
  },
  {
    id: "3",
    name: "Plaza Los Héroes",
    area: 1900,
    vegetation: "Césped ornamental",
    lastIrrigation: "7 días",
    humidity: 32,
    ndvi: 0.48,
    ndwi: 0.15,
    temperature: 26,
    windSpeed: 18,
    status: "critical",
    lat: -36.6089,
    lng: -72.1008,
    recommendation: "Regar con urgencia hoy.",
  },
  {
    id: "4",
    name: "Plaza Sargento Aldea",
    area: 2100,
    vegetation: "Arbustos y palmeras",
    lastIrrigation: "2 días",
    humidity: 72,
    ndvi: 0.78,
    ndwi: 0.48,
    temperature: 21,
    windSpeed: 10,
    status: "optimal",
    lat: -36.6029,
    lng: -72.1068,
    recommendation: "Estado óptimo. No requiere riego.",
  },
  {
    id: "5",
    name: "Plaza Brasil",
    area: 2500,
    vegetation: "Césped y árboles frutales",
    lastIrrigation: "4 días",
    humidity: 55,
    ndvi: 0.68,
    ndwi: 0.35,
    temperature: 23,
    windSpeed: 13,
    status: "optimal",
    lat: -36.6109,
    lng: -72.1088,
    recommendation: "Monitorear. Riego no urgente.",
  },
];

export interface Alert {
  id: string;
  plazaName: string;
  type: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
}

export const mockAlerts: Alert[] = [
  {
    id: "1",
    plazaName: "Plaza Los Héroes",
    type: "critical",
    message: "Humedad crítica detectada (32%)",
    timestamp: "Hace 2 horas",
  },
  {
    id: "2",
    plazaName: "Plaza de Armas",
    type: "warning",
    message: "Humedad por debajo del umbral óptimo",
    timestamp: "Hace 5 horas",
  },
  {
    id: "3",
    plazaName: "Plaza Central",
    type: "info",
    message: "Riego completado exitosamente",
    timestamp: "Hace 1 día",
  },
];

export const mockHumidityTrend = [
  { day: "Lun", humidity: 65 },
  { day: "Mar", humidity: 62 },
  { day: "Mié", humidity: 58 },
  { day: "Jue", humidity: 55 },
  { day: "Vie", humidity: 52 },
  { day: "Sáb", humidity: 48 },
  { day: "Dom", humidity: 55 },
];

export const mockMonthlyData = [
  { month: "Ene", consumption: 45000, saved: 8000 },
  { month: "Feb", consumption: 42000, saved: 9500 },
  { month: "Mar", consumption: 38000, saved: 11000 },
  { month: "Abr", consumption: 35000, saved: 12500 },
  { month: "May", consumption: 32000, saved: 13000 },
  { month: "Jun", consumption: 30000, saved: 14000 },
];
