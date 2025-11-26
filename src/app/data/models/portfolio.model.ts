export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    tags: string[];
    imageUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface PersonalInfo {
    name: string;
    role: string;
    location: string;
    email: string;
    phone?: string[];
    linkedin: string;
    github?: string;
    bio: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
