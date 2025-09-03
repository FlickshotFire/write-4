import { type User, type InsertUser, type Course, type InsertCourse, type Video, type InsertVideo } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCourse(id: string): Promise<Course | undefined>;
  getAllCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  getVideo(id: string): Promise<Video | undefined>;
  getVideosByCourse(courseId: string): Promise<Video[]>;
  createVideo(video: InsertVideo): Promise<Video>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private videos: Map<string, Video>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.videos = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { 
      ...insertCourse, 
      id,
      totalVideos: 0,
      views: 0,
      featured: false,
      createdAt: new Date()
    };
    this.courses.set(id, course);
    return course;
  }

  async getVideo(id: string): Promise<Video | undefined> {
    return this.videos.get(id);
  }

  async getVideosByCourse(courseId: string): Promise<Video[]> {
    return Array.from(this.videos.values())
      .filter((video) => video.courseId === courseId)
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const id = randomUUID();
    const video: Video = { 
      ...insertVideo, 
      id,
      views: 0,
      createdAt: new Date(),
      courseId: insertVideo.courseId || null,
      videoUrl: insertVideo.videoUrl || null
    };
    this.videos.set(id, video);
    return video;
  }
}

export const storage = new MemStorage();
