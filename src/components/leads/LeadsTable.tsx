import * as React from 'react';
import { Eye, Pencil } from 'lucide-react';
import { Lead } from '@/types/lead';
import { useLeadStore } from '@/store/useLeadStore';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// Status badge component with appropriate colors
const StatusBadge = ({ status }: { status: Lead['leadStatus'] }) => {
  const getStatusColor = (status: Lead['leadStatus']) => {
    switch (status) {
      case 'Converted':
        return 'success';
      case 'Warm':
        return 'warning';
      case 'Cold':
        return 'processing';
      case 'Lost':
        return 'error';
      case 'Initiated':
        return 'default';
      default:
        return 'default';
    }
  };

  return <Tag color={getStatusColor(status)}>{status}</Tag>;
};

// Source badge component
const SourceBadge = ({ source }: { source: Lead['leadSource'] }) => {
  const getSourceColor = (source: Lead['leadSource']) => {
    switch (source) {
      case 'Online':
        return 'blue';
      case 'Walk-in':
        return 'purple';
      default:
        return 'default';
    }
  };

  return <Tag color={getSourceColor(source)}>{source}</Tag>;
};

export function LeadsTable() {
  const { filteredLeads } = useLeadStore();

  const columns: ColumnsType<Lead> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 500,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Inquiry Date',
      dataIndex: 'inquiryDate',
      key: 'inquiryDate',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Last Activity',
      dataIndex: 'lastActivity',
      key: 'lastActivity',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Source',
      dataIndex: 'leadSource',
      key: 'leadSource',
      width: 100,
      render: (source: Lead['leadSource']) => <SourceBadge source={source} />,
    },
    {
      title: 'Status',
      dataIndex: 'leadStatus',
      key: 'leadStatus',
      width: 80,
      render: (status: Lead['leadStatus']) => <StatusBadge status={status} />,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 80,
      align: 'right',
      render: () => (
        <div className="flex justify-end gap-2">
          <button className="p-2 text-slate-400 hover:text-slate-600">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600">
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Table
        columns={columns}
        dataSource={filteredLeads}
        rowKey="id"
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
} 