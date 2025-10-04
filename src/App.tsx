import React, { useState } from 'react';
import { ContactCard } from './components/ContactCard';
import { MemoryItem } from './components/MemoryItem';
import { VoiceButton } from './components/VoiceButton';
import { FollowUpCard } from './components/FollowUpCard';
import { Home, Users, Clock, Settings, MessageCircle, Mic, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Input } from './components/ui/input';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      name: 'Sarah Johnson',
      lastInteraction: '2 days ago',
      recentNote: 'Starting new job at Google next month. Excited about the role in Cloud Infrastructure.',
      tags: ['Work', 'Tech']
    },
    {
      name: 'Mike Chen',
      lastInteraction: '5 days ago',
      recentNote: 'Loves cappuccinos with oat milk. Daughter Emma (7) plays soccer. Anniversary is June 15th.',
      tags: ['Friend', 'Family']
    },
    {
      name: 'Emily Rodriguez',
      lastInteraction: '1 week ago',
      recentNote: 'Planning a trip to Japan in October. Interested in traditional ceramics and temples.',
      tags: ['Travel', 'Art']
    },
    {
      name: 'David Park',
      lastInteraction: '1 week ago',
      recentNote: 'Recently adopted a golden retriever named Max. Training for a marathon in November.',
      tags: ['Fitness', 'Pets']
    }
  ];

  const recentMemories = [
    {
      text: 'Talked with Sarah about her new job at Google starting next month',
      timestamp: '2 hours ago',
      person: 'Sarah Johnson'
    },
    {
      text: 'Mike mentioned his daughter Emma scored 3 goals in her soccer game',
      timestamp: '5 days ago',
      person: 'Mike Chen'
    },
    {
      text: 'Emily showed me photos from her research on Japanese pottery techniques',
      timestamp: '1 week ago',
      person: 'Emily Rodriguez'
    }
  ];

  const followUps = [
    {
      name: 'Sarah Johnson',
      suggestion: 'Congratulate her on starting at Google',
      reason: 'Job starts next month',
      priority: 'high' as const
    },
    {
      name: 'Mike Chen',
      suggestion: 'Ask about Emma\'s soccer tournament',
      reason: 'Anniversary coming up on June 15th',
      priority: 'medium' as const
    },
    {
      name: 'Emily Rodriguez',
      suggestion: 'Share Japan travel tips',
      reason: 'Trip planned for October',
      priority: 'medium' as const
    }
  ];

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.recentNote.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="size-full bg-background flex items-center justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-[430px] h-full bg-gradient-to-b from-slate-50 to-white flex flex-col relative shadow-2xl">
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-around border-b rounded-none bg-transparent h-12">
              <TabsTrigger value="home" className="flex-1">
                <Home className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex-1">
                <Users className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex-1">
                <Clock className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">
                <Settings className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="px-6 py-4 mt-0">
              <div className="flex flex-col items-center space-y-3">
                <VoiceButton />
                <span className="text-muted-foreground text-sm text-center max-w-xs leading-relaxed">
                  Add a memory or ask anything
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-foreground mb-3">Follow ups</h3>
                {followUps.map((followUp, idx) => (
                  <FollowUpCard key={idx} {...followUp} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="px-6 py-4 mt-0">
              <div className="mb-4">
                <h2 className="text-foreground mb-1">All Contacts</h2>
                <p className="text-muted-foreground text-sm">{filteredContacts.length} people in your network</p>
              </div>
              
              {/* Search Box */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search contacts, notes, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {filteredContacts.map((contact, idx) => (
                <ContactCard key={idx} {...contact} />
              ))}
              
              {filteredContacts.length === 0 && searchQuery && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No contacts found matching "{searchQuery}"</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent" className="px-6 py-4 mt-0">
              <div className="mb-4">
                <h2 className="text-foreground mb-1">Recent Memories</h2>
                <p className="text-muted-foreground text-sm">Your latest captured moments</p>
              </div>
              {recentMemories.map((memory, idx) => (
                <MemoryItem key={idx} {...memory} />
              ))}
            </TabsContent>

            <TabsContent value="settings" className="px-6 py-4 mt-0">
              <div className="mb-4">
                <h2 className="text-foreground mb-1">Settings</h2>
                <p className="text-muted-foreground text-sm">Manage your Memory2 preferences</p>
              </div>
              
              <div className="space-y-3">
                {['Voice Settings', 'Notifications', 'Privacy & Data', 'Backup & Sync', 'About Memory2'].map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full p-4 bg-white border border-border rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Safe Area */}
        <div className="h-8 bg-gradient-to-b from-slate-50 to-white" />
      </div>
    </div>
  );
}
