import { useState } from 'react';
import { useRoute } from 'wouter';
import { Play, Clock, Eye, ChevronRight, List, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  duration: string;
  orderIndex: number;
  views: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  totalDuration: string;
  totalVideos: number;
  views: number;
  featured: boolean;
}

function PlaylistPage() {
  const [, params] = useRoute('/course/:id');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);

  // Mock data - would come from API in real implementation
  const course: Course = {
    id: params?.id || '1',
    title: 'Complete Machine Learning Masterclass',
    description: 'Master machine learning from fundamentals to advanced applications. This comprehensive course covers everything from basic algorithms to deep learning and practical implementation.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675',
    category: 'AI Series',
    totalDuration: '4h 32m',
    totalVideos: 8,
    views: 15420,
    featured: true
  };

  const videos: Video[] = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Machine Learning Fundamentals - Complete Introduction',
      description: 'Comprehensive overview of machine learning concepts, algorithms, and real-world applications',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:30',
      orderIndex: 1,
      views: 2847392
    },
    {
      id: '3JZ_D3ELwOQ',
      title: 'Python for Data Science - Setup & Environment',
      description: 'Setting up your development environment with Python, Jupyter notebooks, and essential data science libraries',
      thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
      duration: '22:15',
      orderIndex: 2,
      views: 1923847
    },
    {
      id: 'kqUvjADi-S0',
      title: 'Data Preprocessing and Feature Engineering',
      description: 'Advanced techniques for cleaning, transforming, and engineering features from raw data',
      thumbnailUrl: 'https://img.youtube.com/vi/kqUvjADi-S0/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/kqUvjADi-S0',
      duration: '35:42',
      orderIndex: 3,
      views: 1534623
    },
    {
      id: 'VuwjwmYQOWg',
      title: 'Linear Regression - Theory and Implementation',
      description: 'Deep dive into linear regression algorithms, mathematical foundations, and practical implementation',
      thumbnailUrl: 'https://img.youtube.com/vi/VuwjwmYQOWg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/VuwjwmYQOWg',
      duration: '28:18',
      orderIndex: 4,
      views: 1274539
    },
    {
      id: '7VeUPuFGJHk',
      title: 'Classification Algorithms Masterclass',
      description: 'Comprehensive guide to decision trees, random forests, SVM, and ensemble methods',
      thumbnailUrl: 'https://img.youtube.com/vi/7VeUPuFGJHk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/7VeUPuFGJHk',
      duration: '45:20',
      orderIndex: 5,
      views: 987432
    },
    {
      id: 'aircAruvnKk',
      title: 'Neural Networks and Deep Learning',
      description: 'Introduction to neural networks, backpropagation, and deep learning architectures',
      thumbnailUrl: 'https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
      duration: '42:33',
      orderIndex: 6,
      views: 2156789
    },
    {
      id: 'IpGxLWOIZy4',
      title: 'Model Evaluation and Validation',
      description: 'Learn about cross-validation, performance metrics, and avoiding overfitting',
      thumbnailUrl: 'https://img.youtube.com/vi/IpGxLWOIZy4/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/IpGxLWOIZy4',
      duration: '31:45',
      orderIndex: 7,
      views: 834672
    },
    {
      id: 'rVviNyIR-fI',
      title: 'Real-World ML Project Deployment',
      description: 'End-to-end machine learning project from development to production deployment',
      thumbnailUrl: 'https://img.youtube.com/vi/rVviNyIR-fI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/rVviNyIR-fI',
      duration: '52:18',
      orderIndex: 8,
      views: 1456789
    }
  ];

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl font-semibold text-foreground">{course.title}</h1>
                <p className="text-sm text-muted-foreground">{course.category}</p>
              </div>
            </div>
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="xl:hidden flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <List className="w-5 h-5 mr-2" />
              Playlist
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row">
        {/* Main Video Player */}
        <div className={`flex-1 ${showPlaylist ? 'xl:pr-8' : ''}`}>
          <div className="p-4 lg:p-6 xl:p-8">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6 relative max-w-5xl mx-auto xl:max-w-none">
              {currentVideo.videoUrl ? (
                <iframe
                  src={currentVideo.videoUrl}
                  title={currentVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img 
                    src={currentVideo.thumbnailUrl} 
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="text-primary-foreground text-2xl ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-white text-sm">
                    {currentVideo.duration}
                  </div>
                </>
              )}
            </div>

            {/* Video Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                {currentVideo.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {currentVideo.description}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {currentVideo.duration}
                </span>
              </div>
            </div>

            {/* Course Description */}
            <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto xl:max-w-none">
              <h3 className="text-xl font-semibold mb-3 text-foreground">About This Course</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {course.totalDuration}
                </span>
                <span>{course.totalVideos} videos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className={`fixed xl:relative right-0 top-0 h-full w-full sm:w-96 xl:w-80 2xl:w-96 bg-card border-l border-border transition-transform duration-300 ${
          showPlaylist ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
        } ${showPlaylist ? '' : 'xl:hidden'} z-50 xl:z-auto`}>
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Course Content</h3>
              <button
                onClick={() => setShowPlaylist(false)}
                className="xl:hidden text-muted-foreground hover:text-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              {videos.length} videos • {course.totalDuration}
            </p>
          </div>
          
          <div className="overflow-y-auto h-full pb-20">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-full text-left p-4 border-b border-border hover:bg-muted/50 transition-colors ${
                  index === currentVideoIndex ? 'bg-primary/10 border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="flex space-x-3">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title}
                      className="w-16 h-9 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      {index === currentVideoIndex ? (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      ) : (
                        <Play className="text-white w-3 h-3" />
                      )}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-black/60 px-1 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-medium mb-1 line-clamp-2 ${
                      index === currentVideoIndex ? 'text-primary' : 'text-foreground'
                    }`}>
                      {index + 1}. {video.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile/tablet playlist */}
      {showPlaylist && (
        <div 
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowPlaylist(false)}
        />
      )}
    </div>
  );
}

export default PlaylistPage;