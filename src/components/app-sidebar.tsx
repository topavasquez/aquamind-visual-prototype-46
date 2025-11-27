import { LayoutDashboard, Map, Leaf, FileText, Settings, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Mapa", url: "/map", icon: Map },
  { title: "Plazas", url: "/plazas", icon: Leaf },
  { title: "Reportes", url: "/reports", icon: FileText },
  { title: "Configuración", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Droplets className="w-6 h-6 text-primary" />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="font-bold text-sm">AquaMind AI</span>
              <span className="text-xs text-muted-foreground">Chillán</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          {open && <span>Cerrar sesión</span>}
        </Button>
      </div>
    </Sidebar>
  );
}
