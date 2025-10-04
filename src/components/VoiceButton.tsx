import { Mic } from 'lucide-react';
import { useState } from 'react';

export function VoiceButton() {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    setIsRecording(!isRecording);
    // Simulate recording
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-20 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all ${
        isRecording
          ? 'bg-red-500 scale-110 animate-pulse'
          : 'bg-gradient-to-br from-blue-500 to-blue-600 hover:scale-105'
      }`}
    >
      <Mic className="w-7 h-7 text-white" />
    </button>
  );
}
