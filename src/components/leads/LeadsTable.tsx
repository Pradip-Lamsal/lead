import * as React from 'react';
import { Eye, Pencil } from 'lucide-react';
import { Lead } from '@/types/lead';

// Mock data that exactly matches the image
const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Ravi Poudel',
    phoneNumber: '9823456789',
    inquiryDate: 'November 20, 2024',
    lastActivity: 'November 25, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Online',
    leadStatus: 'Converted'
  },
  {
    id: '2',
    name: 'Rajesh Koirala',
    phoneNumber: '9923456789',
    inquiryDate: 'February 22, 2025',
    lastActivity: 'November 12, 2024',
    serviceType: 'Wedding Package',
    leadSource: 'Walk-in',
    leadStatus: 'Cold'
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

// Status badge component with appropriate colors
const StatusBadge = ({ status }: { status: Lead['leadStatus'] }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Converted':
        return 'bg-green-100 text-green-800';
      case 'Cold':
        return 'bg-orange-100 text-orange-800';
      case 'Warm':
        return 'bg-blue-100 text-blue-800';
      case 'Lost':
        return 'bg-red-100 text-red-800';
      case 'Initiated':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClasses()}`}>
      {status}
    </span>
  );
};

// Source badge component
const SourceBadge = ({ source }: { source: Lead['leadSource'] }) => {
  const isOnline = source === 'Online';
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      isOnline ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
    }`}>
      {source}
    </span>
  );
};

export const LeadsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inquiry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Activity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {mockLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {lead.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.inquiryDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.lastActivity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.serviceType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <SourceBadge source={lead.leadSource} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={lead.leadStatus} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button className="text-gray-600 hover:text-gray-900">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Pencil className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">View</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="text-sm text-gray-700">
          1-10 / 50
        </div>
      </div>
    </div>
  );
}; 