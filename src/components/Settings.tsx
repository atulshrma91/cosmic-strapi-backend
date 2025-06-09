
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, Database, Shield, Globe, Bell, User, Key } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Configure your Strapi application settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white/5 border-white/10 mb-6">
          <TabsTrigger value="general" className="text-gray-400 data-[state=active]:text-white">
            <SettingsIcon className="w-4 h-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="database" className="text-gray-400 data-[state=active]:text-white">
            <Database className="w-4 h-4 mr-2" />
            Database
          </TabsTrigger>
          <TabsTrigger value="security" className="text-gray-400 data-[state=active]:text-white">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="api" className="text-gray-400 data-[state=active]:text-white">
            <Globe className="w-4 h-4 mr-2" />
            API
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Application Settings</CardTitle>
              <CardDescription className="text-gray-400">Configure basic application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Application Name</label>
                <Input defaultValue="My Strapi App" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Description</label>
                <Input defaultValue="A powerful headless CMS" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Admin URL</label>
                <Input defaultValue="https://admin.example.com" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Debug Mode</p>
                  <p className="text-sm text-gray-400">Enable debug logging</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Notification Settings</CardTitle>
              <CardDescription className="text-gray-400">Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-400">Receive email updates</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">System Alerts</p>
                  <p className="text-sm text-gray-400">Get notified of system events</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Content Updates</p>
                  <p className="text-sm text-gray-400">Notifications for content changes</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Database Configuration</CardTitle>
              <CardDescription className="text-gray-400">Configure your database connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Database Type</label>
                <Input defaultValue="PostgreSQL" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Host</label>
                <Input defaultValue="localhost" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Port</label>
                  <Input defaultValue="5432" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Database Name</label>
                  <Input defaultValue="strapi_db" className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Test Connection
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Security Settings</CardTitle>
              <CardDescription className="text-gray-400">Configure security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-400">Enable 2FA for admin accounts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">API Rate Limiting</p>
                  <p className="text-sm text-gray-400">Limit API requests per minute</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Session Timeout (minutes)</label>
                <Input defaultValue="30" className="bg-white/5 border-white/10 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">API Keys</CardTitle>
              <CardDescription className="text-gray-400">Manage your API access keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {["Production API Key", "Development API Key", "Read-only Key"].map((keyName, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{keyName}</p>
                      <p className="text-sm text-gray-400">sk_live_****************************</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Key className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                Generate New Key
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">API Configuration</CardTitle>
              <CardDescription className="text-gray-400">Configure API endpoints and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">API Base URL</label>
                <Input defaultValue="https://api.example.com" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">API Version</label>
                <Input defaultValue="v1" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">CORS Enabled</p>
                  <p className="text-sm text-gray-400">Allow cross-origin requests</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">GraphQL Endpoint</p>
                  <p className="text-sm text-gray-400">Enable GraphQL API</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
