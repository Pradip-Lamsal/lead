import { create } from 'zustand';
import { Lead, LeadStats } from '../types/lead';

interface LeadStore {
  leads: Lead[];
  stats: LeadStats;
  searchQuery: string;
  dateFilter: string;
  statusFilter: string;
  setSearchQuery: (query: string) => void;
  setDateFilter: (date: string) => void;
  setStatusFilter: (status: string) => void;
  filteredLeads: Lead[];
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
  {
    id: '3',
    name: 'Niraj Bhandari',
    phoneNumber: '9845678901',
    inquiryDate: 'October 5, 2024',
    lastActivity: 'March 10, 2025',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Converted'
  },
  {
    id: '4',
    name: 'Kiran Adhikari',
    phoneNumber: '9812345678',
    inquiryDate: 'December 15, 2024',
    lastActivity: 'October 30, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Cold'
  },
  {
    id: '5',
    name: 'Suman Thapa',
    phoneNumber: '9934567890',
    inquiryDate: 'February 28, 2025',
    lastActivity: 'November 15, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Warm'
  },
  {
    id: '6',
    name: 'Anita Gurung',
    phoneNumber: '9967890123',
    inquiryDate: 'March 15, 2025',
    lastActivity: 'January 20, 2025',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Lost'
  },
  {
    id: '7',
    name: 'Sanjay Joshi',
    phoneNumber: '9889012345',
    inquiryDate: 'November 30, 2024',
    lastActivity: 'February 5, 2025',
    serviceType: 'Wedding Package',
    leadSource: 'Walk-in',
    leadStatus: 'Converted'
  },
  {
    id: '8',
    name: 'Puja Sharma',
    phoneNumber: '9989012345',
    inquiryDate: 'January 10, 2025',
    lastActivity: 'December 1, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Walk-in',
    leadStatus: 'Initiated'
  },
  {
    id: '9',
    name: 'Deepa Chhetri',
    phoneNumber: '9878901234',
    inquiryDate: 'December 10, 2024',
    lastActivity: 'October 12, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Walk-in',
    leadStatus: 'Initiated'
  },
  {
    id: '10',
    name: 'Maya Rai',
    phoneNumber: '9978901234',
    inquiryDate: 'October 25, 2024',
    lastActivity: 'February 7, 2025',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Converted'
  }
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

export const useLeadStore = create<LeadStore>((set, get) => ({
  leads: mockLeads,
  stats: mockStats,
  searchQuery: '',
  dateFilter: '',
  statusFilter: '',
  filteredLeads: mockLeads,
  setSearchQuery: (query) => {
    const leads = get().leads;
    const dateFilter = get().dateFilter;
    const statusFilter = get().statusFilter;
    const filteredLeads = leads.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(query.toLowerCase()) ||
        lead.phoneNumber.includes(query) ||
        lead.inquiryDate.toLowerCase().includes(query.toLowerCase()) ||
        lead.serviceType.toLowerCase().includes(query.toLowerCase());

      const matchesDate = !dateFilter || filterByDate(lead.inquiryDate, dateFilter);
      const matchesStatus = !statusFilter || lead.leadStatus.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesDate && matchesStatus;
    });
    set({ searchQuery: query, filteredLeads });
  },
  setDateFilter: (date) => {
    const leads = get().leads;
    const searchQuery = get().searchQuery;
    const statusFilter = get().statusFilter;
    const filteredLeads = leads.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phoneNumber.includes(searchQuery) ||
        lead.inquiryDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.serviceType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDate = !date || filterByDate(lead.inquiryDate, date);
      const matchesStatus = !statusFilter || lead.leadStatus.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesDate && matchesStatus;
    });
    set({ dateFilter: date, filteredLeads });
  },
  setStatusFilter: (status) => {
    const leads = get().leads;
    const searchQuery = get().searchQuery;
    const dateFilter = get().dateFilter;
    const filteredLeads = leads.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phoneNumber.includes(searchQuery) ||
        lead.inquiryDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.serviceType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDate = !dateFilter || filterByDate(lead.inquiryDate, dateFilter);
      const matchesStatus = !status || lead.leadStatus.toLowerCase() === status.toLowerCase();

      return matchesSearch && matchesDate && matchesStatus;
    });
    set({ statusFilter: status, filteredLeads });
  },
}));

// Helper function to filter by date
function filterByDate(dateStr: string, filter: string): boolean {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  switch (filter) {
    case 'today':
      return date.toDateString() === today.toDateString();
    case 'yesterday':
      return date.toDateString() === yesterday.toDateString();
    case 'last7days':
      const last7Days = new Date(today);
      last7Days.setDate(last7Days.getDate() - 7);
      return date >= last7Days && date <= today;
    case 'thisMonth':
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return date >= firstDayOfMonth && date <= today;
    case 'lastMonth':
      const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      return date >= firstDayOfLastMonth && date <= lastDayOfLastMonth;
    default:
      return true;
  }
} 