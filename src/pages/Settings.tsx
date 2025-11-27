import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Bell, Droplets, Mail } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configuración</h1>
        <p className="text-muted-foreground">Personaliza el sistema según tus necesidades</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Umbrales de humedad */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-primary" />
              <CardTitle>Umbrales de Humedad</CardTitle>
            </div>
            <CardDescription>Define los niveles de alerta del sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Humedad Óptima (%)</Label>
              <div className="flex items-center gap-4">
                <Slider defaultValue={[60]} max={100} step={1} className="flex-1" />
                <span className="w-12 text-right font-medium">60%</span>
              </div>
            </div>
            <div className="space-y-3">
              <Label>Umbral de Advertencia (%)</Label>
              <div className="flex items-center gap-4">
                <Slider defaultValue={[45]} max={100} step={1} className="flex-1" />
                <span className="w-12 text-right font-medium">45%</span>
              </div>
            </div>
            <div className="space-y-3">
              <Label>Umbral Crítico (%)</Label>
              <div className="flex items-center gap-4">
                <Slider defaultValue={[30]} max={100} step={1} className="flex-1" />
                <span className="w-12 text-right font-medium">30%</span>
              </div>
            </div>
            <Button className="w-full">Guardar Cambios</Button>
          </CardContent>
        </Card>

        {/* Notificaciones */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              <CardTitle>Notificaciones</CardTitle>
            </div>
            <CardDescription>Configura cómo deseas recibir alertas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas críticas</Label>
                <p className="text-sm text-muted-foreground">Notificaciones de emergencia</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de advertencia</Label>
                <p className="text-sm text-muted-foreground">Situaciones que requieren atención</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Reportes semanales</Label>
                <p className="text-sm text-muted-foreground">Resumen de actividad</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificaciones por email</Label>
                <p className="text-sm text-muted-foreground">Recibir alertas por correo</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Información de contacto */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <CardTitle>Información de Contacto</CardTitle>
            </div>
            <CardDescription>Datos para recibir notificaciones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email principal</Label>
              <Input id="email" type="email" defaultValue="admin@chillan.cl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" defaultValue="+56 9 1234 5678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary-email">Email secundario</Label>
              <Input id="secondary-email" type="email" placeholder="opcional" />
            </div>
            <Button className="w-full">Actualizar Información</Button>
          </CardContent>
        </Card>

        {/* Gestión de plazas */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5 text-primary" />
              <CardTitle>Gestión de Plazas</CardTitle>
            </div>
            <CardDescription>Configura las áreas monitoreadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Plazas activas</Label>
              <div className="text-2xl font-bold">5</div>
            </div>
            <div className="space-y-2">
              <Label>Frecuencia de actualización</Label>
              <Input defaultValue="30 minutos" disabled />
            </div>
            <Button variant="outline" className="w-full">
              Administrar Plazas
            </Button>
            <Button variant="outline" className="w-full">
              Agregar Nueva Plaza
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
