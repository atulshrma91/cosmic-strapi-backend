
import { Database, BarChart3, Code, Settings, Layers, FileText, Users, Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "content", label: "Content Manager", icon: FileText },
    { id: "api", label: "API Explorer", icon: Code },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const collections = [
    { id: "articles", label: "Articles", icon: FileText },
    { id: "users", label: "Users", icon: Users },
    { id: "media", label: "Media", icon: Image },
    { id: "categories", label: "Categories", icon: Layers },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-black/20 backdrop-blur-xl border-r border-white/10">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Strapi Admin</h1>
            <p className="text-sm text-gray-400">Content Management</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Collections</h3>
          <div className="space-y-2">
            {collections.map((collection) => {
              const Icon = collection.icon;
              return (
                <button
                  key={collection.id}
                  onClick={() => setActiveSection("content")}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{collection.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
