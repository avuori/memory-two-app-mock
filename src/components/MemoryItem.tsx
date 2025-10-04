import { MessageSquare, Clock } from 'lucide-react';

interface MemoryItemProps {
  text: string;
  timestamp: string;
  person?: string;
}

export function MemoryItem({ text, timestamp, person }: MemoryItemProps) {
  return (
    <div className="flex gap-3 p-3 bg-accent/50 rounded-lg mb-2">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
        <MessageSquare className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        {person && <p className="text-sm text-foreground mb-1">{person}</p>}
        <p className="text-sm text-muted-foreground mb-1">{text}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
}
