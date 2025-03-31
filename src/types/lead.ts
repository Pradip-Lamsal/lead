// Lead status types
export type LeadStatus = 'Converted' | 'Cold' | 'Warm' | 'Lost' | 'Initiated';

// Lead source types
export type LeadSource = 'Online' | 'Walk-in';

// Service types
export type ServiceType = 'Wedding Package';

// Lead interface
export interface Lead {
  id: string;
  name: string;
  phoneNumber: string;
  inquiryDate: string;
  lastActivity: string;
  serviceType: ServiceType;
  leadSource: LeadSource;
  leadStatus: LeadStatus;
}

// Stats interface
export interface LeadStats {
  allTimeLeads: number;
  newLeadsThisWeek: number;
  convertedLeads: number;
  pendingFollowups: number;
  warmLeads: number;
  coldLeads: number;
  lostLeads: number;
} 