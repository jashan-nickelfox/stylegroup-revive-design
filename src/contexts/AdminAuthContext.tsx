
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  id: string;
  email: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAdmin(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('admin_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // For demo purposes, check against the known admin credentials
      if (email === 'admin@stylegroup.com.au' && password === 'admin123') {
        const adminUser = {
          id: 'admin-user-id',
          email: email
        };
        
        setUser(adminUser);
        setIsAdmin(true);
        localStorage.setItem('admin_user', JSON.stringify(adminUser));
        
        return { error: null };
      } else {
        return { error: { message: 'Invalid email or password' } };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { error: { message: 'Login failed. Please try again.' } };
    }
  };

  const signOut = async () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('admin_user');
  };

  const value = {
    user,
    isAdmin,
    loading,
    signIn,
    signOut,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
