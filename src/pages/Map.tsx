import { useState } from "react";
import { mockPlazas, Plaza } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Droplets, Thermometer, Wind, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Map = () => {
  const [selectedPlaza, setSelectedPlaza] = useState<Plaza | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "bg-success";
      case "warning":
        return "bg-warning";
      case "critical":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "optimal":
        return "Óptimo";
      case "warning":
        return "Advertencia";
      case "critical":
        return "Crítico";
      default:
        return "Desconocido";
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Mapa simulado */}
      <div className="flex-1 relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-[600px]">
            {/* Simulación de mapa con marcadores */}
            <div className="relative w-full h-full bg-muted/30 rounded-lg border-2 border-border overflow-hidden">
              {/* Grid de fondo simulando mapa */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
              
              {/* Marcadores de plazas */}
              {mockPlazas.map((plaza, index) => {
                const posX = 20 + (index * 18) % 80;
                const posY = 15 + (index * 15) % 70;
                
                return (
                  <button
                    key={plaza.id}
                    onClick={() => setSelectedPlaza(plaza)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 
                              transition-all hover:scale-125 z-10`}
                    style={{ left: `${posX}%`, top: `${posY}%` }}
                  >
                    <div className={`w-8 h-8 rounded-full ${getStatusColor(plaza.status)} 
                                  shadow-lg flex items-center justify-center animate-pulse`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="mt-1 text-xs font-medium bg-card px-2 py-1 rounded shadow-sm whitespace-nowrap">
                      {plaza.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leyenda */}
        <div className="absolute bottom-6 left-6 bg-card p-4 rounded-lg shadow-lg border">
          <h3 className="text-sm font-semibold mb-2">Estado de Plazas</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-xs">Óptimo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-xs">Advertencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-xs">Crítico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel lateral de detalles */}
      {selectedPlaza && (
        <div className="w-96 border-l bg-card overflow-auto">
          <Card className="border-0 rounded-none h-full">
            <CardHeader className="border-b">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{selectedPlaza.name}</CardTitle>
                  <CardDescription>Información detallada</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPlaza(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {/* Estado */}
              <div>
                <Badge 
                  variant={selectedPlaza.status === "optimal" ? "default" : 
                          selectedPlaza.status === "warning" ? "warning" : "destructive"}
                  className="mb-2"
                >
                  {getStatusText(selectedPlaza.status)}
                </Badge>
              </div>

              {/* Datos generales */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Datos Generales</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Área</p>
                    <p className="font-medium">{selectedPlaza.area} m²</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Último riego</p>
                    <p className="font-medium">{selectedPlaza.lastIrrigation}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Vegetación</p>
                    <p className="font-medium">{selectedPlaza.vegetation}</p>
                  </div>
                </div>
              </div>

              {/* Humedad */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    Humedad
                  </span>
                  <span className="font-bold">{selectedPlaza.humidity}%</span>
                </div>
                <Progress value={selectedPlaza.humidity} className="h-2" />
              </div>

              {/* Indicadores */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <p className="text-xs text-muted-foreground">NDVI</p>
                    <p className="text-xl font-bold text-success">{selectedPlaza.ndvi.toFixed(2)}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <p className="text-xs text-muted-foreground">NDWI</p>
                    <p className="text-xl font-bold text-secondary">{selectedPlaza.ndwi.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Condiciones ambientales */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Condiciones Ambientales</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Thermometer className="w-4 h-4" />
                      Temperatura
                    </span>
                    <span className="font-medium">{selectedPlaza.temperature}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Wind className="w-4 h-4" />
                      Velocidad del viento
                    </span>
                    <span className="font-medium">{selectedPlaza.windSpeed} km/h</span>
                  </div>
                </div>
              </div>

              {/* Recomendación */}
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-primary" />
                  Recomendación
                </h3>
                <p className="text-sm">{selectedPlaza.recommendation}</p>
              </div>

              {/* Botón mock */}
              <Button className="w-full">
                Registrar Riego
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Map;
