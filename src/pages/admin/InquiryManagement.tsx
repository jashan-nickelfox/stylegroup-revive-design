
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const InquiryManagement = () => {
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [bookingRequests, setBookingRequests] = useState([]);
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAllInquiries();
  }, []);

  const fetchAllInquiries = async () => {
    try {
      const [quotes, bookings, newsletters, messages] = await Promise.all([
        supabase.from('quote_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('booking_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter_subscriptions').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
      ]);

      setQuoteRequests(quotes.data || []);
      setBookingRequests(bookings.data || []);
      setNewsletterSubscriptions(newsletters.data || []);
      setContactMessages(messages.data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch inquiries',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inquiry Management</h1>
          <p className="text-gray-600">View and manage customer inquiries and subscriptions</p>
        </div>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="quotes">Quote Requests ({quoteRequests.length})</TabsTrigger>
            <TabsTrigger value="bookings">Booking Requests ({bookingRequests.length})</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages ({contactMessages.length})</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletter Subscriptions ({newsletterSubscriptions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <CardTitle>Quote Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Product Interest</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quoteRequests.map((request: any) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.full_name}</TableCell>
                        <TableCell>{request.email}</TableCell>
                        <TableCell>{request.phone}</TableCell>
                        <TableCell>{request.product_interest || 'Not specified'}</TableCell>
                        <TableCell>{format(new Date(request.created_at), 'MMM dd, yyyy')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Preferred Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookingRequests.map((request: any) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">
                          {request.first_name} {request.last_name}
                        </TableCell>
                        <TableCell>{request.email}</TableCell>
                        <TableCell>{request.phone}</TableCell>
                        <TableCell>{format(new Date(request.preferred_date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            request.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {request.status}
                          </span>
                        </TableCell>
                        <TableCell>{format(new Date(request.created_at), 'MMM dd, yyyy')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactMessages.map((message: any) => (
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">
                          {message.first_name} {message.last_name}
                        </TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.phone || 'Not provided'}</TableCell>
                        <TableCell>{message.subject}</TableCell>
                        <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                        <TableCell>{format(new Date(message.created_at), 'MMM dd, yyyy')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletters">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Subscribed Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {newsletterSubscriptions.map((subscription: any) => (
                      <TableRow key={subscription.id}>
                        <TableCell className="font-medium">{subscription.email}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            subscription.confirmed 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {subscription.confirmed ? 'Confirmed' : 'Pending'}
                          </span>
                        </TableCell>
                        <TableCell>{format(new Date(subscription.created_at), 'MMM dd, yyyy')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default InquiryManagement;
