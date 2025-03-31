import { create } from 'zustand';
import { Lead, LeadStats } from '../types/lead';

interface LeadStore {
  leads: Lead[];
  stats: LeadStats;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Ravi Poudel',
    phoneNumber: '9823456789',
    inquiryDate: 'November 20, 2024',
    lastActivity: 'November 25, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Converted',
  },
  {
    id: '2',
    name: 'Rajesh Koirala',
    phoneNumber: '9923456789',
    inquiryDate: 'February 22, 2025',
    lastActivity: 'November 12, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Walk-in',
    leadStatus: 'Cold',
  },
  // Add more mock data as shown in the image
];

const mockStats: LeadStats = {
  allTimeLeads: 125,
  newLeadsThisWeek: 6,
  convertedLeads: 89,
  pendingFollowups: 28,
  warmLeads: 19,
  coldLeads: 9,
  lostLeads: 5,
};

export const useLeadStore = create<LeadStore>((set) => ({
  leads: mockLeads,
  stats: mockStats,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
})); 