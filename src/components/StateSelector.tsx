import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface State {
  id: string;
  name: string;
  flag?: string;
}

interface StateSelectorProps {
  selectedState: State | null;
  onStateSelect: (state: State) => void;
}

const INDIAN_STATES: State[] = [
  { id: 'karnataka', name: 'Karnataka' },
  { id: 'tamil_nadu', name: 'Tamil Nadu' },
  { id: 'maharashtra', name: 'Maharashtra' },
  { id: 'punjab', name: 'Punjab' },
  { id: 'west_bengal', name: 'West Bengal' },
  { id: 'rajasthan', name: 'Rajasthan' },
  { id: 'kerala', name: 'Kerala' },
  { id: 'andhra_pradesh', name: 'Andhra Pradesh' },
];

const StateSelector: React.FC<StateSelectorProps> = ({ selectedState, onStateSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleStateSelect = (state: State) => {
    onStateSelect(state);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="max-w-md mx-auto">
        
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-background border-2 border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-200 shadow-card"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Selected State</p>
              <p className="font-display font-semibold text-foreground">
                {selectedState ? selectedState.name : 'Choose your state...'}
              </p>
            </div>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-xl shadow-card-hover overflow-hidden">
            <div className="py-2">
              {INDIAN_STATES.map((state) => (
                <button
                  key={state.id}
                  onClick={() => handleStateSelect(state)}
                  className={`w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-150 flex items-center gap-3 ${
                    selectedState?.id === state.id ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    selectedState?.id === state.id ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`} />
                  <span className="font-display">{state.name}</span>
                  {selectedState?.id === state.id && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Overlay to close dropdown */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}

      </div>

      {/* Selected State Info */}
      {selectedState && (
        <div className="mt-6 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              Loading regional ingredients for {selectedState.name}...
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

export default StateSelector;