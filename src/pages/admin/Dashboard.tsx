
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpenIcon, 
  MessageSquareIcon, 
  FileTextIcon, 
  MailIcon 
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Dashboard = () => {
  const fetchDashboardStats = async () => {
    const [quotes, contacts, bookings, newsletters] = await Promise.all([
      supabase.from('quote_requests').select('id', { count: 'exact' }),
      supabase.from('contact_messages').select('id', { count: 'exact' }),
      supabase.from('booking_requests').select('id', { count: 'exact' }),
      supabase.from('newsletter_subscriptions').select('id', { count: 'exact' })
    ]);

    return {
      quotes: quotes.count ?? 0,
      contacts: contacts.count ?? 0,
      bookings: bookings.count ?? 0,
      newsletters: newsletters.count ?? 0
    };
  };

  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Quote Requests
              <FileTextIcon className="text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.quotes}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Contact Messages
              <MessageSquareIcon className="text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.contacts}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Booking Requests
              <BookOpenIcon className="text-purple-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.bookings}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Newsletter Subscribers
              <MailIcon className="text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.newsletters}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
