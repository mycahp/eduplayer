import { Video } from './video';

export interface Lesson {
    name: string;
    description: string;
    videoList: Video[];
}
