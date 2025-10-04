import { User, Calendar, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

interface FollowUpCardProps {
  name: string;
  suggestion: string;
  reason: string;
  priority?: 'high' | 'medium' | 'low';
  profilePic?: string;
}

export function FollowUpCard({ name, suggestion, reason, priority = 'medium', profilePic }: FollowUpCardProps) {
  const priorityColors = {
    high: 'from-red-400 to-red-600',
    medium: 'from-blue-400 to-blue-600',
    low: 'from-gray-400 to-gray-600'
  };

  return (
    <Card className="p-4 mb-3 active:scale-[0.98] transition-transform cursor-pointer border-l-4 border-l-blue-500">
      <div className="flex gap-3">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${priorityColors[priority]} flex items-center justify-center flex-shrink-0 overflow-hidden`}>
          {profilePic ? (
            <img 
              src={`/${profilePic}`} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-6 h-6 text-white" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{suggestion}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{reason}</span>
          </div>
        </div>
        <div className="flex items-center">
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}
