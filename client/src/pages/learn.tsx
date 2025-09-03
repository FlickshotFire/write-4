import { Link } from 'wouter';
import { ArrowLeft, Play, Clock, Eye, GraduationCap, Star, Users } from 'lucide-react';
import { FloatingNav } from '@/components/layout/FloatingNav';

function LearnPage() {
  const featuredCourse = {
    id: "dsa-masterclass",
    title: "Complete Data Structures & Algorithms Masterclass",
    description: "Master DSA from basics to advanced concepts. Comprehensive preparation for coding interviews at top tech companies with 200+ problems solved.",
    thumbnailUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675",
    duration: "52:30",
    totalDuration: "25h 45m",
    totalVideos: 45,
    tags: ["DSA", "Algorithms", "Interview Prep"],
    views: "5.2k",
    rating: 4.9,
    students: 3247
  };

  const courses = [
    {
      id: "arrays-strings",
      title: "Arrays and Strings Mastery",
      description: "Deep dive into array and string algorithms. Master two-pointers, sliding window, and string manipulation techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "28:14",
      totalDuration: "4h 32m",
      totalVideos: 12,
      category: "DSA",
      views: "2.1k",
      rating: 4.8,
      students: 1892
    },
    {
      id: "trees-graphs",
      title: "Trees and Graphs Complete Guide",
      description: "Master tree traversals, graph algorithms, DFS, BFS, and advanced tree/graph problems for coding interviews.",
      thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "45:22",
      totalDuration: "8h 15m",
      totalVideos: 18,
      category: "DSA",
      views: "1.8k",
      rating: 4.9,
      students: 1456
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming Mastery",
      description: "Conquer DP problems with systematic approaches. From basic memoization to advanced optimization techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "38:45",
      totalDuration: "6h 30m",
      totalVideos: 15,
      category: "DSA",
      views: "1.5k",
      rating: 4.8,
      students: 967
    },
    {
      id: "react-fullstack",
      title: "React Full-Stack Development",
      description: "Build complete web applications with React, Node.js, Express, and MongoDB. From basics to production deployment.",
      thumbnailUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "35:42",
      totalDuration: "12h 30m",
      totalVideos: 24,
      category: "Web Development",
      views: "3.2k",
      rating: 4.9,
      students: 2156
    },
    {
      id: "javascript-advanced",
      title: "Advanced JavaScript & ES6+",
      description: "Master modern JavaScript concepts: closures, promises, async/await, modules, and advanced ES6+ features.",
      thumbnailUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "42:15",
      totalDuration: "7h 45m",
      totalVideos: 16,
      category: "Web Development",
      views: "2.8k",
      rating: 4.8,
      students: 1823
    },
    {
      id: "css-responsive",
      title: "CSS Grid, Flexbox & Responsive Design",
      description: "Master modern CSS layout techniques. Build beautiful, responsive websites with Grid, Flexbox, and mobile-first design.",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=338",
      duration: "32:18",
      totalDuration: "5h 20m",
      totalVideos: 14,
      category: "Web Development",
      views: "2.3k",
      rating: 4.7,
      students: 1634
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
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 glow-blue">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-primary">Learning Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Video <span className="gradient-text">Learning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master cutting-edge technologies through comprehensive video courses designed by industry experts.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Course */}
      <div className="container mx-auto px-6 mb-24">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden relative group">
                <img 
                  src={featuredCourse.thumbnailUrl} 
                  alt={featuredCourse.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Link href={`/course/${featuredCourse.id}`}>
                    <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="text-primary-foreground text-xl ml-1" />
                    </button>
                  </Link>
                </div>
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-white text-sm">
                  {featuredCourse.duration}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">{featuredCourse.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredCourse.description}</p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {featuredCourse.totalDuration}
                </span>
                <span>{featuredCourse.totalVideos} videos</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredCourse.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/course/${featuredCourse.id}`}>
                <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 w-fit">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* All Courses */}
      <div className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">All Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link key={course.id} href={`/course/${course.id}`}>
              <div 
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={course.thumbnailUrl} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="text-primary-foreground ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/60 px-2 py-1 rounded text-white text-xs">
                    {course.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-xs">
                    {course.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {course.description}
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.totalDuration}
                    </span>
                    <span>{course.totalVideos} videos</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnPage;