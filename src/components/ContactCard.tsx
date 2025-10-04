import { User, Calendar, MapPin, Coffee } from 'lucide-react';
import { Card } from './ui/card';

interface ContactCardProps {
  name: string;
  lastInteraction: string;
  recentNote: string;
  icon?: string;
  tags?: string[];
}

export function ContactCard({ name, lastInteraction, recentNote, tags = [] }: ContactCardProps) {
  return (
    <Card className="p-4 mb-3 active:scale-[0.98] transition-transform cursor-pointer">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{recentNote}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{lastInteraction}</span>
          </div>
          {tags.length > 0 && (
            <div className="flex gap-1 mt-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
