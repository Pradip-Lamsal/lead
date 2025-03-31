import { useLeadStore } from '@/store/useLeadStore';

interface StatCardProps {
  label: string;
  value: number;
  variant?: 'default' | 'converted' | 'pending' | 'warm' | 'cold' | 'lost';
  isLast?: boolean;
}

const StatCard = ({ label, value, variant = 'default', isLast = false }: StatCardProps) => {
  const getColorClass = () => {
    switch (variant) {
      case 'converted':
        return 'text-green-600';
      case 'pending':
        return 'text-orange-500';
      case 'warm':
        return 'text-blue-600';
      case 'cold':
        return 'text-gray-600';
      case 'lost':
        return 'text-red-600';
      default:
        return 'text-gray-900';
    }
  };

  return (
    <div className={`p-4 ${!isLast ? 'border-r border-gray-200' : ''}`}>
      <div className="text-2xl font-semibold mb-1">
        <span className={getColorClass()}>{value}</span>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export const StatsCards = () => {
  const stats = useLeadStore((state) => state.stats);
  const cards: Array<Omit<StatCardProps, 'isLast'>> = [
    { label: "All Time Leads", value: stats.allTimeLeads },
    { label: "New Leads (This week)", value: stats.newLeadsThisWeek },
    { label: "Converted Leads", value: stats.convertedLeads, variant: "converted" as const },
    { label: "Pending Followups", value: stats.pendingFollowups, variant: "pending" as const },
    { label: "Warm Leads", value: stats.warmLeads, variant: "warm" as const },
    { label: "Cold Leads", value: stats.coldLeads, variant: "cold" as const },
    { label: "Lost Leads", value: stats.lostLeads, variant: "lost" as const }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6 bg-white rounded-sm">
      {cards.map((card, index) => (
        <StatCard
          key={card.label}
          {...card}
          isLast={index === cards.length - 1}
        />
      ))}
    </div>
  );
}; 