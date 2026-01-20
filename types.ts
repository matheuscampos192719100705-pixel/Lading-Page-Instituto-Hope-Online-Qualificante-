
import React from 'react';

export interface Course {
  name: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  courses: string[];
}

export interface Benefit {
  title: string;
  description: string;
  // Added React import at the top to fix the 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}