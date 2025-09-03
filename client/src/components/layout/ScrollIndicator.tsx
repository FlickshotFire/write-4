import { useScrollspy } from '@/hooks/useScrollspy';

export function ScrollIndicator() {
  const activeSection = useScrollspy(['home', 'articles', 'thoughts', 'videos']);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'articles', label: 'Articles' },
    { id: 'thoughts', label: 'Thoughts' },
    { id: 'videos', label: 'Videos' },
  ];
  
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50" data-testid="scroll-indicator">
      <div className="flex flex-col space-y-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary opacity-100'
                : 'bg-muted opacity-50'
            }`}
            data-testid={`scroll-indicator-${section.id}`}
          />
        ))}
      </div>
    </div>
  );
}
