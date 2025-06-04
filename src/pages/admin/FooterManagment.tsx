import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FooterContent {
  id?: string;
  company_name: string;
  address: string;
  phone: string;
  email: string;
  social_facebook: string;
  social_instagram: string;
  social_linkedin: string;
  business_hours: string;
  created_at?: string;
  updated_at?: string;
}

const defaultFooter: FooterContent = {
  company_name: '',
  address: '',
  phone: '',
  email: '',
  social_facebook: '',
  social_instagram: '',
  social_linkedin: '',
  business_hours: '',
};

const FooterManagement = () => {
  const [footerContent, setFooterContent] = useState<FooterContent>(defaultFooter);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchFooterContent();
  }, []);

  const fetchFooterContent = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('footer_content').select('*').limit(1).single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching footer content:', error);
      toast({ title: 'Error', description: 'Failed to load footer content', variant: 'destructive' });
    } else if (data) {
      setFooterContent(data);
    }

    setLoading(false);
  };

  const handleChange = (field: keyof FooterContent, value: string) => {
    setFooterContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase.from('footer_content').upsert({
        ...footerContent,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({ title: 'Saved', description: 'Footer content updated successfully' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Failed to save footer content', variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Footer Section Management</h1>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Edit Footer Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ['Company Name', 'company_name'],
                ['Address', 'address'],
                ['Phone', 'phone'],
                ['Email', 'email'],
                ['Facebook Link', 'social_facebook'],
                ['Instagram Link', 'social_instagram'],
                ['LinkedIn Link', 'social_linkedin'],
              ].map(([label, key]) => (
                <div key={key} className="space-y-2">
                  <Label>{label}</Label>
                  <Input
                    value={footerContent[key as keyof FooterContent] || ''}
                    onChange={(e) => handleChange(key as keyof FooterContent, e.target.value)}
                  />
                </div>
              ))}

              <div className="space-y-2">
                <Label>Business Hours</Label>
                <Textarea
                  rows={4}
                  value={footerContent.business_hours}
                  onChange={(e) => handleChange('business_hours', e.target.value)}
                />
              </div>

              <Button onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default FooterManagement;
