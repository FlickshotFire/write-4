import { Play, Eye, GraduationCap } from 'lucide-react';
import { Link } from 'wouter';

function VideoLearningSection() {
  const featuredVideo = {
    id: "threejs-course",
    title: "Advanced Three.js: Building Interactive 3D Experiences",
    description: "Master the art of creating stunning 3D web experiences with advanced Three.js techniques, shader programming, and performance optimization strategies.",
    thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675",
    duration: "45:32",
    totalDuration: "6h 45m",
    totalVideos: 8,
    tags: ["Three.js", "WebGL", "Advanced"],
    views: "2.1k",
  };

  const courses = [
    {
      id: "ml-fundamentals",
      title: "Complete Machine Learning Masterclass",
      description: "Introduction to ML algorithms and practical applications. Master machine learning from fundamentals to advanced techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "28:14",
      totalDuration: "8h 45m",
      totalVideos: 12,
      category: "AI Series",
      views: "1.2k",
    },
    {
      id: "react-performance",
      title: "React Performance Mastery",
      description: "Advanced techniques for building fast React applications. Complete guide to optimization strategies.",
      thumbnailUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "35:42",
      totalDuration: "5h 30m",
      totalVideos: 9,
      category: "Web Dev",
      views: "856",
    },
    {
      id: "devops-masterclass",
      title: "DevOps with Docker & Kubernetes",
      description: "Complete guide to containerization and orchestration. From basics to production deployment.",
      thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "52:18",
      totalDuration: "12h 15m",
      totalVideos: 15,
      category: "DevOps",
      views: "2.3k",
    },
    {
      id: "phaser-game-dev",
      title: "Game Development with Phaser.js",
      description: "Step-by-step game development from concept to deployment. Build complete games from scratch.",
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "41:05",
      totalDuration: "7h 20m",
      totalVideos: 10,
      category: "Game Dev",
      views: "1.8k",
    },
  ];

  return (
    <section id="videos" className="py-20" data-testid="video-learning-section">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated video content and hands-on tutorials designed to accelerate your technical growth and understanding.
          </p>
        </div>
        
        {/* Featured Video */}
        <div className="glass-card rounded-2xl overflow-hidden mb-12 max-w-5xl mx-auto" data-testid="featured-video">
          <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <img 
              src={featuredVideo.thumbnailUrl} 
              alt={featuredVideo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Link href={`/course/${featuredVideo.id}`}>
                <button 
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  data-testid="play-featured-video"
                >
                  <Play className="text-primary-foreground text-2xl ml-1" />
                </button>
              </Link>
            </div>
            <div className="absolute top-4 left-4 bg-accent px-3 py-1 rounded-lg text-accent-foreground text-sm font-medium">
              Featured
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-white text-sm">
              {featuredVideo.duration}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              {featuredVideo.title}
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              {featuredVideo.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {featuredVideo.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      index === 0 ? 'bg-primary/10 text-primary' :
                      index === 1 ? 'bg-accent/10 text-accent' :
                      'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-muted-foreground text-sm flex items-center space-x-4">
                <span>{featuredVideo.totalVideos} videos • {featuredVideo.totalDuration}</span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" /> {featuredVideo.views} views
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="video-grid">
          {courses.map((course) => (
            <Link key={course.id} href={`/course/${course.id}`}>
              <div 
                className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                data-testid={`course-card-${course.id}`}
              >
                <div className="aspect-video relative bg-gradient-to-br from-secondary to-muted">
                  <img 
                    src={course.thumbnailUrl} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button 
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                      data-testid={`play-course-${course.id}`}
                    >
                      <Play className="text-primary-foreground ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-white text-xs">
                    {course.totalVideos} videos
                  </div>
                  <div className="absolute top-2 left-2 bg-primary/80 px-2 py-1 rounded text-white text-xs">
                    Course
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{course.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${
                      course.category === 'AI Series' ? 'text-primary' : 
                      course.category === 'Web Dev' ? 'text-accent' :
                      course.category === 'DevOps' ? 'text-primary' :
                      'text-accent'
                    }`}>
                      {course.category}
                    </span>
                    <div className="text-muted-foreground text-sm">
                      <div className="flex items-center mb-1">
                        <Eye className="w-4 h-4 mr-1" /> {course.views}
                      </div>
                      <div className="text-xs">
                        {course.totalDuration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
            data-testid="button-explore-all-courses"
          >
            <GraduationCap className="inline-block w-4 h-4 mr-2" />
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export { VideoLearningSection };
export default VideoLearningSection;
