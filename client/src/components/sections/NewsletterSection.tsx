import { ExternalLink } from 'lucide-react';

function NewsletterSection() {
  const handleDiscordJoin = () => {
    // Replace with your actual Discord invite link
    window.open('https://discord.gg/YOUR_DISCORD_INVITE', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10" data-testid="newsletter-section">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay <span className="gradient-text">Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our Discord community to connect with fellow developers, get help with DSA and Web Development, 
            and stay updated with the latest discussions.
          </p>
          
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <button 
              onClick={handleDiscordJoin}
              className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white px-12 py-6 rounded-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center text-lg font-semibold"
              data-testid="button-discord-join"
            >
              <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.191.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Our Discord Community
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
            
            <div className="flex items-center justify-center space-x-8 mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Active Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">DSA & Web Dev Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">24/7 Help Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NewsletterSection };
export default NewsletterSection;
