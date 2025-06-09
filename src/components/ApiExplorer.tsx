
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Copy, Code, Zap, Database, Globe } from "lucide-react";

const ApiExplorer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("/api/articles");
  const [method, setMethod] = useState("GET");

  const endpoints = [
    { path: "/api/articles", method: "GET", description: "Get all articles" },
    { path: "/api/articles/:id", method: "GET", description: "Get article by ID" },
    { path: "/api/articles", method: "POST", description: "Create new article" },
    { path: "/api/articles/:id", method: "PUT", description: "Update article" },
    { path: "/api/articles/:id", method: "DELETE", description: "Delete article" },
    { path: "/api/users", method: "GET", description: "Get all users" },
    { path: "/api/upload", method: "POST", description: "Upload media files" },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "POST": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "PUT": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "DELETE": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const sampleResponse = {
    data: [
      {
        id: 1,
        attributes: {
          title: "Getting Started with Strapi",
          content: "This is a comprehensive guide...",
          publishedAt: "2024-01-15T10:00:00.000Z",
          createdAt: "2024-01-15T09:30:00.000Z",
          updatedAt: "2024-01-15T10:00:00.000Z"
        }
      }
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 1
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">API Explorer</h1>
        <p className="text-gray-400">Test and explore your Strapi API endpoints</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedEndpoint(endpoint.path);
                    setMethod(endpoint.method);
                  }}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedEndpoint === endpoint.path && method === endpoint.method
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge className={getMethodColor(endpoint.method)}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm text-gray-300">{endpoint.path}</code>
                  </div>
                  <p className="text-xs text-gray-400">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Request
                </span>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  <Play className="w-4 h-4 mr-2" />
                  Send Request
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className={getMethodColor(method)}>
                    {method}
                  </Badge>
                  <Input
                    value={`https://api.example.com${selectedEndpoint}`}
                    readOnly
                    className="bg-white/5 border-white/10 text-gray-300"
                  />
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <Tabs defaultValue="headers" className="w-full">
                  <TabsList className="bg-white/5 border-white/10">
                    <TabsTrigger value="headers" className="text-gray-400 data-[state=active]:text-white">Headers</TabsTrigger>
                    <TabsTrigger value="body" className="text-gray-400 data-[state=active]:text-white">Body</TabsTrigger>
                    <TabsTrigger value="params" className="text-gray-400 data-[state=active]:text-white">Params</TabsTrigger>
                  </TabsList>
                  <TabsContent value="headers" className="mt-4">
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Header name" className="bg-white/5 border-white/10 text-white" />
                        <Input placeholder="Header value" className="bg-white/5 border-white/10 text-white" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="body" className="mt-4">
                    <textarea
                      className="w-full h-32 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 resize-none"
                      placeholder="Request body (JSON)"
                    />
                  </TabsContent>
                  <TabsContent value="params" className="mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Parameter name" className="bg-white/5 border-white/10 text-white" />
                      <Input placeholder="Parameter value" className="bg-white/5 border-white/10 text-white" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span className="flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Response
                </span>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    200 OK
                  </Badge>
                  <span className="text-sm text-gray-400">245ms</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-black/20 p-4 rounded-lg text-sm text-gray-300 overflow-auto">
                {JSON.stringify(sampleResponse, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApiExplorer;
