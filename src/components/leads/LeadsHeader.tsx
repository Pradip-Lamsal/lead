import { useState } from 'react';
import { Search } from 'lucide-react';
import { useLeadStore } from '@/store/useLeadStore';
import { AddLeadModal } from './AddLeadModal';

export const LeadsHeader = () => {
  const { setSearchQuery, setDateFilter, setStatusFilter } = useLeadStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        {/* Left side filters */}
        <div className="flex gap-4 items-center">
          {/* Date filter */}
          <select
            className="min-w-[120px] py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7days">Last 7 days</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
          </select>

          {/* Status filter */}
          <select
            className="min-w-[120px] py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
            <option value="initiated">Initiated</option>
          </select>
        </div>

        {/* Right side search and add button */}
        <div className="flex gap-4 items-center w-full sm:w-auto">
          {/* Search input */}
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by Name, Phone, Date, Service..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Add New Lead button */}
          <button 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add New Lead
          </button>
        </div>
      </div>

      <AddLeadModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </>
  );
}; 