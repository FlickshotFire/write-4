import { Link } from 'wouter';
import { ArrowLeft, User, Mail, Github, Linkedin, Twitter, Code, Briefcase, Award } from 'lucide-react';
import { FloatingNav } from '@/components/layout/FloatingNav';

function AboutPage() {
  const skills = [
    "React & Next.js", "TypeScript", "Node.js", "Python", "Machine Learning",
    "Three.js", "WebGL", "Docker", "Kubernetes", "AWS", "PostgreSQL", "MongoDB"
  ];

  const achievements = [
    {
      icon: Code,
      title: "10+ Years Experience",
      description: "Full-stack development and system architecture"
    },
    {
      icon: Briefcase,
      title: "50+ Projects",
      description: "Successfully delivered web applications and AI solutions"
    },
    {
      icon: Award,
      title: "Tech Leadership",
      description: "Leading teams and mentoring developers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="glass-card rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <img 
                      src="https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg"
                      alt="Aman Bhardwaj"
                      className="w-full h-full rounded-full object-cover ring-4 ring-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span className="gradient-text">Aman Bhardwaj</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Full-Stack Developer, AI Enthusiast, and Technology Educator passionate about creating 
                    innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 mb-6">
                    <a href="mailto:aman@example.com" className="p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300 group">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a href="https://github.com/amanbhardwaj" className="p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300 group">
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a href="https://linkedin.com/in/amanbhardwaj" className="p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300 group">
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a href="https://twitter.com/amanbhardwaj" className="p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300 group">
                      <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="glass-card rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate technologist with over a decade of experience in full-stack development, 
                  artificial intelligence, and system architecture. My journey began with a curiosity about 
                  how technology can solve complex problems and improve people's lives.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Throughout my career, I've had the privilege of working with startups and enterprises, 
                  helping them build scalable web applications, implement AI solutions, and create 
                  innovative user experiences. I believe in the power of clean code, thoughtful design, 
                  and continuous learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest developments in AI, 
                  creating educational content, or working on open-source projects that give back 
                  to the developer community.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="glass-card rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-center font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Current Focus</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Web Applications</h3>
                    <p className="text-muted-foreground">Building intelligent applications that leverage machine learning to enhance user experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Educational Technology</h3>
                    <p className="text-muted-foreground">Creating platforms and tools that make learning programming and technology more accessible.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Open Source Contributions</h3>
                    <p className="text-muted-foreground">Contributing to the developer community through open-source projects and educational content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;