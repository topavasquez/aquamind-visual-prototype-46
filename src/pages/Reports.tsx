import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockMonthlyData } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Droplets, TrendingDown, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Reports = () => {
  const totalConsumption = mockMonthlyData.reduce((sum, item) => sum + item.consumption, 0);
  const totalSaved = mockMonthlyData.reduce((sum, item) => sum + item.saved, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reportes</h1>
          <p className="text-muted-foreground">Análisis de consumo y ahorro hídrico</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Consumo Total</CardTitle>
            <Droplets className="w-4 h-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {(totalConsumption / 1000).toFixed(1)}k L
            </div>
            <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ahorro Total</CardTitle>
            <TrendingDown className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {(totalSaved / 1000).toFixed(1)}k L
            </div>
            <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Eficiencia</CardTitle>
            <Calendar className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {((totalSaved / (totalConsumption + totalSaved)) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Promedio de ahorro</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfica de consumo y ahorro */}
      <Card>
        <CardHeader>
          <CardTitle>Consumo vs Ahorro Mensual</CardTitle>
          <CardDescription>Comparación de litros consumidos y ahorrados</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={mockMonthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Bar 
                dataKey="consumption" 
                fill="hsl(var(--secondary))" 
                name="Consumo (L)" 
                radius={[8, 8, 0, 0]}
              />
              <Bar 
                dataKey="saved" 
                fill="hsl(var(--success))" 
                name="Ahorro (L)" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Resumen mensual */}
      <Card>
        <CardHeader>
          <CardTitle>Detalle Mensual</CardTitle>
          <CardDescription>Registro histórico de consumo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockMonthlyData.map((item) => (
              <div 
                key={item.month}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <span className="font-medium">{item.month}</span>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">Consumo:</span>
                    <span className="font-semibold">{item.consumption.toLocaleString()} L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span className="text-muted-foreground">Ahorro:</span>
                    <span className="font-semibold text-success">{item.saved.toLocaleString()} L</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
