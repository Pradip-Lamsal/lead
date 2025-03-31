'use client';

import { StatsCards } from '@/components/leads/StatsCards';
import { LeadsHeader } from '@/components/leads/LeadsHeader';
import { LeadsTable } from '@/components/leads/LeadsTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">My Leads</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Venues</span>
            <span className="mx-2">/</span>
            <span>My Leads</span>
          </div>
        </div>

        <StatsCards />
        <LeadsHeader />
        <LeadsTable />

        <div className="mt-4 flex items-center justify-between">
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
    </div>
  );
}
