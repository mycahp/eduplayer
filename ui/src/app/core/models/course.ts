import { Lesson } from './lesson';

export interface Course {
    _id: string;
    description: string;
    title: string;
    professor: string;
    img?: string;
    lessons: Lesson[]
}
