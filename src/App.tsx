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
  const [memorySearchQuery, setMemorySearchQuery] = useState('');
  const [visibleMemories, setVisibleMemories] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const contacts = [
    {
      name: 'Sarah Chen',
      lastInteraction: '2 days ago',
      recentNote: 'Starting new job at Google next month. Excited about the role in Cloud Infrastructure.',
      tags: ['Work', 'Tech'],
      profilePic: 'sarah-testimonial.webp'
    },
    {
      name: 'Marcus Rodriguez',
      lastInteraction: '5 days ago',
      recentNote: 'Loves cappuccinos with oat milk. Daughter Emma (7) plays soccer. Anniversary is June 15th.',
      tags: ['Friend', 'Family'],
      profilePic: 'marcus-testimonial.webp'
    },
    {
      name: 'Emily Watson',
      lastInteraction: '1 week ago',
      recentNote: 'Planning a trip to Japan in October. Interested in traditional ceramics and temples.',
      tags: ['Travel', 'Art'],
      profilePic: 'emily-testimonial.webp'
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
      text: 'Remember to call the dentist for annual checkup appointment',
      timestamp: '1 hour ago',
      person: 'Me'
    },
    {
      text: 'Talked with Sarah about her new job at Google starting next month',
      timestamp: '2 hours ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus mentioned his daughter Emma scored 3 goals in her soccer game',
      timestamp: '5 days ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily showed me photos from her research on Japanese pottery techniques',
      timestamp: '1 week ago',
      person: 'Emily Watson'
    },
    {
      text: 'David shared photos of his new golden retriever Max playing in the park',
      timestamp: '1 week ago',
      person: 'David Park'
    },
    {
      text: 'Need to research new laptop options - current one is getting slow',
      timestamp: '1 week ago',
      person: 'Me'
    },
    {
      text: 'Sarah mentioned she\'s excited about the Cloud Infrastructure team at Google',
      timestamp: '2 weeks ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus talked about his anniversary plans for June 15th with his wife',
      timestamp: '2 weeks ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily discussed her upcoming trip to Japan and interest in traditional ceramics',
      timestamp: '3 weeks ago',
      person: 'Emily Watson'
    },
    {
      text: 'David mentioned he\'s training for a marathon in November',
      timestamp: '3 weeks ago',
      person: 'David Park'
    },
    {
      text: 'Sarah shared insights about her current role transition and career goals',
      timestamp: '1 month ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus talked about Emma\'s soccer team winning their championship game',
      timestamp: '1 month ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily shared her research on Japanese temple architecture and history',
      timestamp: '1 month ago',
      person: 'Emily Watson'
    },
    {
      text: 'David discussed his experience adopting Max and the training process',
      timestamp: '1 month ago',
      person: 'David Park'
    },
    {
      text: 'Sarah mentioned her excitement about working with cloud technologies',
      timestamp: '6 weeks ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus talked about his family\'s weekend plans and Emma\'s school activities',
      timestamp: '6 weeks ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily shared photos from her previous trip to Kyoto and favorite temples',
      timestamp: '6 weeks ago',
      person: 'Emily Watson'
    },
    {
      text: 'David mentioned his running routine and preparation for the marathon',
      timestamp: '6 weeks ago',
      person: 'David Park'
    },
    {
      text: 'Booked vacation time for December - need to plan trip details',
      timestamp: '6 weeks ago',
      person: 'Me'
    },
    {
      text: 'Sarah discussed her career transition and excitement about new opportunities',
      timestamp: '2 months ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus talked about his work-life balance and family priorities',
      timestamp: '2 months ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily shared her passion for traditional Japanese arts and crafts',
      timestamp: '2 months ago',
      person: 'Emily Watson'
    },
    {
      text: 'David discussed his fitness goals and motivation for running',
      timestamp: '2 months ago',
      person: 'David Park'
    },
    {
      text: 'Sarah mentioned her interest in cloud computing and infrastructure',
      timestamp: '2 months ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus talked about Emma\'s academic achievements and extracurricular activities',
      timestamp: '2 months ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily discussed her research methodology for studying Japanese culture',
      timestamp: '2 months ago',
      person: 'Emily Watson'
    },
    {
      text: 'David shared his experience with pet adoption and care responsibilities',
      timestamp: '2 months ago',
      person: 'David Park'
    },
    {
      text: 'Started learning Spanish on Duolingo - 30 day streak achieved',
      timestamp: '2 months ago',
      person: 'Me'
    },
    {
      text: 'Sarah talked about her professional development and learning goals',
      timestamp: '3 months ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus mentioned his family traditions and holiday celebrations',
      timestamp: '3 months ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily shared her academic background in art history and cultural studies',
      timestamp: '3 months ago',
      person: 'Emily Watson'
    },
    {
      text: 'David discussed his fitness journey and running community involvement',
      timestamp: '3 months ago',
      person: 'David Park'
    },
    {
      text: 'Sarah talked about her networking strategies and professional relationships',
      timestamp: '3 months ago',
      person: 'Sarah Chen'
    },
    {
      text: 'Marcus shared stories about Emma\'s growth and development milestones',
      timestamp: '3 months ago',
      person: 'Marcus Rodriguez'
    },
    {
      text: 'Emily discussed her travel philosophy and cultural immersion approach',
      timestamp: '3 months ago',
      person: 'Emily Watson'
    },
    {
      text: 'David mentioned his volunteer work with animal shelters and rescue organizations',
      timestamp: '3 months ago',
      person: 'David Park'
    },
    {
      text: 'Renewed gym membership - committed to 3x per week schedule',
      timestamp: '3 months ago',
      person: 'Me'
    },
    {
      text: 'Set up automatic bill payments for utilities and insurance',
      timestamp: '3 months ago',
      person: 'Me'
    }
  ];

  const followUps = [
    {
      name: 'Sarah Chen',
      suggestion: 'Congratulate her on starting at Google',
      reason: 'Job starts next month',
      priority: 'high' as const,
      profilePic: 'sarah-testimonial.webp'
    },
    {
      name: 'Marcus Rodriguez',
      suggestion: 'Ask about Emma\'s soccer tournament',
      reason: 'Anniversary coming up on June 15th',
      priority: 'medium' as const,
      profilePic: 'marcus-testimonial.webp'
    },
    {
      name: 'Emily Watson',
      suggestion: 'Share Japan travel tips',
      reason: 'Trip planned for October',
      priority: 'medium' as const,
      profilePic: 'emily-testimonial.webp'
    }
  ];

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.recentNote.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Get profile picture for a person
  const getProfilePic = (personName: string) => {
    if (personName === 'Me') {
      return 'me.webp'; // Profile pic for personal reminders
    }
    const contact = contacts.find(c => c.name === personName);
    return contact?.profilePic;
  };

  // Filter memories based on search query
  const filteredMemories = recentMemories.filter(memory =>
    memory.text.toLowerCase().includes(memorySearchQuery.toLowerCase()) ||
    memory.person.toLowerCase().includes(memorySearchQuery.toLowerCase())
  );

  // Reset visible memories when search query changes
  React.useEffect(() => {
    setVisibleMemories(10);
  }, [memorySearchQuery]);

  // Get visible memories for lazy loading
  const visibleMemoriesList = filteredMemories.slice(0, visibleMemories);

  // Handle scroll to load more memories with simulated network delay
  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 100 && 
        visibleMemories < filteredMemories.length && 
        !isLoadingMore) {
      
      setIsLoadingMore(true);
      
      // Simulate network delay (800-1500ms)
      const delay = Math.random() * 700 + 800;
      await new Promise(resolve => setTimeout(resolve, delay));
      
      setVisibleMemories(prev => Math.min(prev + 10, filteredMemories.length));
      setIsLoadingMore(false);
    }
  };

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
              
              {/* Search Box */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search memories or people..."
                  value={memorySearchQuery}
                  onChange={(e) => setMemorySearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <div 
                className="max-h-[calc(100vh-200px)] overflow-y-auto"
                onScroll={handleScroll}
              >
                {visibleMemoriesList.map((memory, idx) => (
                  <MemoryItem 
                    key={idx} 
                    {...memory} 
                    profilePic={getProfilePic(memory.person)}
                  />
                ))}
                
                {/* Loading indicator */}
                {isLoadingMore && (
                  <div className="text-center py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <p className="text-muted-foreground text-sm">Loading more memories...</p>
                    </div>
                  </div>
                )}
                
                {/* Load more prompt */}
                {!isLoadingMore && visibleMemories < filteredMemories.length && (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground text-sm">
                      Scroll down to load more memories...
                    </p>
                  </div>
                )}
                
                {/* No results found */}
                {filteredMemories.length === 0 && memorySearchQuery && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No memories found matching "{memorySearchQuery}"</p>
                  </div>
                )}
                
                {/* End of memories */}
                {!isLoadingMore && visibleMemories >= filteredMemories.length && filteredMemories.length > 10 && (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground text-sm">
                      You've reached the end of your memories
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="px-6 py-4 mt-0">
              <div className="mb-4">
                <h2 className="text-foreground mb-1">Settings</h2>
                <p className="text-muted-foreground text-sm">Manage your Memory2 preferences</p>
              </div>
              
              <div className="space-y-3">
                {['App integrations', 'Voice Settings', 'Notifications', 'Privacy & Data', 'Backup & Sync', 'About Memory2'].map((item, idx) => (
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
