
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';

interface Testimonial {
  id: string;
  customer_name: string;
  customer_title?: string;
  customer_company?: string;
  testimonial_text: string;
  rating?: number;
  image_url?: string;
  is_featured: boolean;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

const TestimonialsManagement = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_title: '',
    customer_company: '',
    testimonial_text: '',
    rating: 5,
    image_url: '',
    is_featured: false,
    is_active: true,
    order_index: 0,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch testimonials',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq('id', editingTestimonial.id);

        if (error) throw error;
        toast({
          title: 'Success',
          description: 'Testimonial updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([formData]);

        if (error) throw error;
        toast({
          title: 'Success',
          description: 'Testimonial created successfully',
        });
      }

      setIsDialogOpen(false);
      setEditingTestimonial(null);
      resetForm();
      fetchTestimonials();
    } catch (error) {
      console.error('Error saving testimonial:', error);
      toast({
        title: 'Error',
        description: 'Failed to save testimonial',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      customer_name: testimonial.customer_name,
      customer_title: testimonial.customer_title || '',
      customer_company: testimonial.customer_company || '',
      testimonial_text: testimonial.testimonial_text,
      rating: testimonial.rating || 5,
      image_url: testimonial.image_url || '',
      is_featured: testimonial.is_featured,
      is_active: testimonial.is_active,
      order_index: testimonial.order_index,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: 'Success',
        description: 'Testimonial deleted successfully',
      });
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete testimonial',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      customer_name: '',
      customer_title: '',
      customer_company: '',
      testimonial_text: '',
      rating: 5,
      image_url: '',
      is_featured: false,
      is_active: true,
      order_index: 0,
    });
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, image_url: url }));
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
            <p className="text-gray-600">Manage customer testimonials and reviews</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { resetForm(); setEditingTestimonial(null); }}>
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer_name">Customer Name *</Label>
                    <Input
                      id="customer_name"
                      value={formData.customer_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, customer_name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer_title">Customer Title</Label>
                    <Input
                      id="customer_title"
                      value={formData.customer_title}
                      onChange={(e) => setFormData(prev => ({ ...prev, customer_title: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer_company">Company</Label>
                    <Input
                      id="customer_company"
                      value={formData.customer_company}
                      onChange={(e) => setFormData(prev => ({ ...prev, customer_company: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Select
                      value={formData.rating.toString()}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, rating: parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Star{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonial_text">Testimonial Text *</Label>
                  <Textarea
                    id="testimonial_text"
                    value={formData.testimonial_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, testimonial_text: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label>Customer Image</Label>
                  <ImageUpload
                    onImageUpload={handleImageUpload}
                    currentImageUrl={formData.image_url}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="order_index">Order Index</Label>
                    <Input
                      id="order_index"
                      type="number"
                      value={formData.order_index}
                      onChange={(e) => setFormData(prev => ({ ...prev, order_index: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_featured"
                      checked={formData.is_featured}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
                    />
                    <Label htmlFor="is_featured">Featured</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_active"
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                    />
                    <Label htmlFor="is_active">Active</Label>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingTestimonial ? 'Update' : 'Create'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Testimonials ({testimonials.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Testimonial</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{testimonial.customer_name}</div>
                        {testimonial.customer_title && (
                          <div className="text-sm text-gray-500">{testimonial.customer_title}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{testimonial.customer_company || 'N/A'}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {Array.from({ length: testimonial.rating || 0 }, (_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate">{testimonial.testimonial_text}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        {testimonial.is_featured && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          testimonial.is_active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {testimonial.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(new Date(testimonial.created_at), 'MMM dd, yyyy')}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(testimonial)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(testimonial.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default TestimonialsManagement;
