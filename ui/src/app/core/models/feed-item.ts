import { User } from './user';

export interface FeedItem {
    author: User;
    date: string;
    content: string;
    displayTime: number;
    video: string;
    course: string;
    professorComment: boolean;
    response: string;
    _id: string;
}
