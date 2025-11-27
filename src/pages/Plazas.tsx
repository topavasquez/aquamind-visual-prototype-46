import { mockPlazas } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Plazas = () => {
  const navigate = useNavigate();

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "optimal":
        return "default";
      case "warning":
        return "warning";
      case "critical":
        return "destructive";
      default:
        return "secondary";
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
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Plazas</h1>
          <p className="text-muted-foreground">Gestión de áreas verdes monitoreadas</p>
        </div>
        <Button>Agregar Plaza</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPlazas.map((plaza) => (
          <Card key={plaza.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{plaza.name}</CardTitle>
                  <CardDescription>{plaza.area} m²</CardDescription>
                </div>
                <Badge variant={getStatusVariant(plaza.status)}>
                  {getStatusText(plaza.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Humedad</span>
                  <span className="font-semibold">{plaza.humidity}%</span>
                </div>
                <Progress value={plaza.humidity} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">NDVI</p>
                  <p className="font-semibold">{plaza.ndvi.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">NDWI</p>
                  <p className="font-semibold">{plaza.ndwi.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Temperatura</p>
                  <p className="font-semibold">{plaza.temperature}°C</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Último riego</p>
                  <p className="font-semibold">{plaza.lastIrrigation}</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/map")}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Detalles
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plazas;
