
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus, Upload, X } from 'lucide-react';

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background_image: string | null;
  is_active: boolean;
}

const HeroManagement = () => {
  const [heroContents, setHeroContents] = useState<HeroContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingHero, setEditingHero] = useState<HeroContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    background_image: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('hero_content')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching hero content:', error);
        throw error;
      }

      console.log('Fetched hero content:', data);
      setHeroContents(data || []);
    } catch (error) {
      console.error('Error fetching hero content:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch hero content',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `hero/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('hero-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('hero-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, background_image: data.publicUrl });
      toast({
        title: 'Success',
        description: 'Image uploaded successfully',
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const heroData = {
        ...formData,
        is_active: true,
        updated_at: new Date().toISOString(),
      };

      if (editingHero) {
        const { error } = await supabase
          .from('hero_content')
          .update(heroData)
          .eq('id', editingHero.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Hero content updated successfully' });
      } else {
        const { error } = await supabase
          .from('hero_content')
          .insert([heroData]);

        if (error) throw error;
        toast({ title: 'Success', description: 'Hero content created successfully' });
      }

      resetForm();
      fetchHeroContent();
    } catch (error) {
      console.error('Error saving hero content:', error);
      toast({
        title: 'Error',
        description: 'Failed to save hero content',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (hero: HeroContent) => {
    setEditingHero(hero);
    setFormData({
      title: hero.title,
      subtitle: hero.subtitle,
      description: hero.description,
      background_image: hero.background_image || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this hero content?')) return;

    try {
      const { error } = await supabase
        .from('hero_content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({ title: 'Success', description: 'Hero content deleted successfully' });
      fetchHeroContent();
    } catch (error) {
      console.error('Error deleting hero content:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete hero content',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      background_image: '',
    });
    setEditingHero(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading hero content...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hero Section Management</h1>
            <p className="text-gray-600">Manage the homepage hero section content</p>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-stylegroup-green hover:bg-stylegroup-green/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Hero Content
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingHero ? 'Edit Hero Content' : 'Add New Hero Content'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter hero title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="Enter hero subtitle"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter hero description"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Background Image</Label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file);
                        }}
                        disabled={uploading}
                      />
                      {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
                    </div>
                    <Input
                      value={formData.background_image}
                      onChange={(e) => setFormData({ ...formData, background_image: e.target.value })}
                      placeholder="Or enter image URL"
                    />
                    {formData.background_image && (
                      <div className="relative">
                        <img
                          src={formData.background_image}
                          alt="Preview"
                          className="w-48 h-32 object-cover rounded border"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-1 right-1"
                          onClick={() => setFormData({ ...formData, background_image: '' })}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={saving || uploading}
                    className="bg-stylegroup-green hover:bg-stylegroup-green/90"
                  >
                    {saving ? 'Saving...' : editingHero ? 'Update Hero Content' : 'Create Hero Content'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Hero Content List ({heroContents.length} total)</CardTitle>
          </CardHeader>
          <CardContent>
            {heroContents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No hero content found. Add your first hero section to get started.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Subtitle</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heroContents.map((hero) => (
                    <TableRow key={hero.id}>
                      <TableCell>
                        {hero.background_image ? (
                          <img src={hero.background_image} alt="Hero" className="w-16 h-10 object-cover rounded" />
                        ) : (
                          <span className="text-gray-400">No image</span>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{hero.title}</TableCell>
                      <TableCell>{hero.subtitle}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          hero.is_active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {hero.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(hero)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(hero.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {heroContents.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                {heroContents[0] && (
                  <>
                    <h1 className="text-4xl font-bold mb-4">{heroContents[0].title}</h1>
                    <h2 className="text-2xl text-gray-600 mb-4">{heroContents[0].subtitle}</h2>
                    <p className="text-lg text-gray-700">{heroContents[0].description}</p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default HeroManagement;
