
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Package, Users, Mail, Calendar, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    products: 0,
    services: 0,
    quoteRequests: 0,
    bookingRequests: 0,
    heroContent: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [products, services, quotes, bookings, hero] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact' }),
        supabase.from('services').select('id', { count: 'exact' }),
        supabase.from('quote_requests').select('id', { count: 'exact' }),
        supabase.from('booking_requests').select('id', { count: 'exact' }),
        supabase.from('hero_content').select('id', { count: 'exact' }),
      ]);

      setStats({
        products: products.count || 0,
        services: services.count || 0,
        quoteRequests: quotes.count || 0,
        bookingRequests: bookings.count || 0,
        heroContent: hero.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats.products,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/admin/products',
    },
    {
      title: 'Active Services',
      value: stats.services,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/admin/services',
    },
    {
      title: 'Quote Requests',
      value: stats.quoteRequests,
      icon: Mail,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/admin/inquiries',
    },
    {
      title: 'Booking Requests',
      value: stats.bookingRequests,
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/admin/inquiries',
    },
    {
      title: 'Hero Content',
      value: stats.heroContent,
      icon: Settings,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      href: '/admin/hero',
    },
  ];

  const quickActions = [
    {
      title: 'Manage Hero Section',
      description: 'Update homepage hero content',
      href: '/admin/hero',
      icon: Settings,
    },
    {
      title: 'Add New Product',
      description: 'Expand your catalog',
      href: '/admin/products',
      icon: Package,
    },
    {
      title: 'Manage Services',
      description: 'Update service offerings',
      href: '/admin/services',
      icon: TrendingUp,
    },
    {
      title: 'Review Inquiries',
      description: 'Check customer requests',
      href: '/admin/inquiries',
      icon: Mail,
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {statCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(stat.href)}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <action.icon className="h-5 w-5 text-stylegroup-green" />
                      <div>
                        <span className="font-medium">{action.title}</span>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(action.href)}
                    >
                      Go
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Admin panel fully operational</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Database connection established</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Content management ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Customer inquiries tracking active</span>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">Operational</div>
                <div className="text-sm text-green-700">All systems running</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">Connected</div>
                <div className="text-sm text-blue-700">Database online</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Ready</div>
                <div className="text-sm text-purple-700">Content management</div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
