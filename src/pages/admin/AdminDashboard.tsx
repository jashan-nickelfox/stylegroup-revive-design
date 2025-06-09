
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { Package, Users, Mail, Calendar, TrendingUp, Settings, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    products: 0,
    services: 0,
    quoteRequests: 0,
    bookingRequests: 0,
    heroContent: 0,
    testimonials: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState({
    quotes: [],
    bookings: [],
    messages: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentInquiries();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [products, services, quotes, bookings, hero, testimonials] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact' }),
        supabase.from('services').select('id', { count: 'exact' }),
        supabase.from('quote_requests').select('id', { count: 'exact' }),
        supabase.from('booking_requests').select('id', { count: 'exact' }),
        supabase.from('hero_content').select('id', { count: 'exact' }),
        supabase.from('testimonials').select('id', { count: 'exact' }),
      ]);

      setStats({
        products: products.count || 0,
        services: services.count || 0,
        quoteRequests: quotes.count || 0,
        bookingRequests: bookings.count || 0,
        heroContent: hero.count || 0,
        testimonials: testimonials.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentInquiries = async () => {
    try {
      const [quotes, bookings, messages] = await Promise.all([
        supabase
          .from('quote_requests')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('booking_requests')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5),
      ]);

      setRecentInquiries({
        quotes: quotes.data || [],
        bookings: bookings.data || [],
        messages: messages.data || [],
      });
    } catch (error) {
      console.error('Error fetching recent inquiries:', error);
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
      title: 'Testimonials',
      value: stats.testimonials,
      icon: MessageSquare,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      href: '/admin/testimonials',
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
    {
      title: 'Manage Testimonials',
      description: 'Add customer reviews',
      href: '/admin/testimonials',
      icon: MessageSquare,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Inquiries</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/admin/inquiries')}
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Latest Quote Requests</h4>
                  <div className="space-y-2">
                    {recentInquiries.quotes.slice(0, 3).map((quote: any) => (
                      <div key={quote.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <span className="font-medium text-sm">{quote.full_name}</span>
                          <p className="text-xs text-gray-500">{quote.product_interest || 'General inquiry'}</p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {format(new Date(quote.created_at), 'MMM dd')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Latest Booking Requests</h4>
                  <div className="space-y-2">
                    {recentInquiries.bookings.slice(0, 3).map((booking: any) => (
                      <div key={booking.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <span className="font-medium text-sm">{booking.first_name} {booking.last_name}</span>
                          <p className="text-xs text-gray-500">
                            {format(new Date(booking.preferred_date), 'MMM dd, yyyy')}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Latest Contact Messages</h4>
                  <div className="space-y-2">
                    {recentInquiries.messages.slice(0, 2).map((message: any) => (
                      <div key={message.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <span className="font-medium text-sm">{message.first_name} {message.last_name}</span>
                          <p className="text-xs text-gray-500 truncate max-w-40">{message.subject}</p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {format(new Date(message.created_at), 'MMM dd')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
