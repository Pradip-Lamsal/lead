import * as React from 'react';
import { Lead } from '@/types/lead';
import { useLeadStore } from '@/store/useLeadStore';
import { Table, Tag, Button, Space } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

// Status badge component with appropriate colors
const StatusBadge = ({ status }: { status: Lead['leadStatus'] }) => {
  const getStatusColor = (status: Lead['leadStatus']) => {
    switch (status) {
      case 'Converted':
        return { color: '#ffffff', bgColor: '#22c55e' }; // green-500
      case 'Warm':
        return { color: '#ffffff', bgColor: '#eab308' }; // yellow-500
      case 'Cold':
        return { color: '#ffffff', bgColor: '#3b82f6' }; // blue-500
      case 'Lost':
        return { color: '#ffffff', bgColor: '#ef4444' }; // red-500
      case 'Initiated':
        return { color: '#ffffff', bgColor: '#8b5cf6' }; // purple-500
      default:
        return { color: '#ffffff', bgColor: '#6b7280' }; // gray-500
    }
  };

  const colors = getStatusColor(status);
  return (
    <Tag 
      style={{ 
        backgroundColor: colors.bgColor,
        color: colors.color,
        borderRadius: '9999px',
        padding: '4px 12px',
        border: 'none'
      }}
    >
      {status}
    </Tag>
  );
};

// Source badge component
const SourceBadge = ({ source }: { source: Lead['leadSource'] }) => {
  const getSourceColor = (source: Lead['leadSource']) => {
    switch (source) {
      case 'Online':
        return { color: '#4f46e5', bgColor: '#e0e7ff' }; // indigo-100 and indigo-600
      case 'Walk-in':
        return { color: '#db2777', bgColor: '#fce7f3' }; // pink-100 and pink-600
      default:
        return { color: '#4b5563', bgColor: '#f3f4f6' }; // gray-100 and gray-600
    }
  };

  const colors = getSourceColor(source);
  return (
    <Tag 
      style={{ 
        backgroundColor: colors.bgColor,
        color: colors.color,
        borderRadius: '9999px',
        padding: '4px 12px',
        border: 'none'
      }}
    >
      {source}
    </Tag>
  );
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
      title: 'Lead Status',
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
        <Space className='flex justify-end gap-0'>
          <Button 
            type="text" 
            icon={<EyeOutlined />} 
            className="text-slate-400 hover:text-slate-600"
          />
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            className="text-slate-400 hover:text-slate-600"
          />
        </Space>
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