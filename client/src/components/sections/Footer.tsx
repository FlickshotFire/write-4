import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

function Footer() {
  const contentLinks = [
    { name: "Articles", href: "#articles" },
    { name: "Video Tutorials", href: "#videos" },
    { name: "Quick Thoughts", href: "#thoughts" },
    { name: "Course Series", href: "#videos" },
  ];

  const topicLinks = [
    { name: "AI & Machine Learning", href: "#" },
   ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="py-16 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">Aman Bhardwaj</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Sharing knowledge, building the future, and empowering the next generation of developers through 
              practical content and innovative teaching methods.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={social.label}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Content</h3>
            <ul className="space-y-3 text-muted-foreground">
              {contentLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Topics</h3>
            <ul className="space-y-3 text-muted-foreground">
              {topicLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-accent transition-colors"
                    data-testid={`topic-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Aman Bhardwaj. Built with Efforts & Time, Passion for Education , Innovation in Mind , Bounties as Soul & Heart as Contribution to Community.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
