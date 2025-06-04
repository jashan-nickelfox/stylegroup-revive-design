
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background_image: string | null;
  is_active: boolean;
}

const HeroManagement = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    try {
      const { data, error } = await supabase
        .from('hero_content')
        .select('*')
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      setHeroContent(data || {
        id: '',
        title: '',
        subtitle: '',
        description: '',
        background_image: null,
        is_active: true,
      });
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

  const handleSave = async () => {
    if (!heroContent) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('hero_content')
        .upsert({
          ...heroContent,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Hero content updated successfully',
      });
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

  const handleInputChange = (field: keyof HeroContent, value: string) => {
    if (!heroContent) return;
    setHeroContent({ ...heroContent, [field]: value });
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
          <h1 className="text-3xl font-bold text-gray-900">Hero Section Management</h1>
          <p className="text-gray-600">Manage the homepage hero section content</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Hero Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={heroContent?.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter hero title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={heroContent?.subtitle || ''}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  placeholder="Enter hero subtitle"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={heroContent?.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter hero description"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="background_image">Background Image URL</Label>
              <Input
                id="background_image"
                value={heroContent?.background_image || ''}
                onChange={(e) => handleInputChange('background_image', e.target.value)}
                placeholder="Enter image URL"
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {heroContent && (
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <h1 className="text-4xl font-bold mb-4">{heroContent.title}</h1>
                <h2 className="text-2xl text-gray-600 mb-4">{heroContent.subtitle}</h2>
                <p className="text-lg text-gray-700">{heroContent.description}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default HeroManagement;
