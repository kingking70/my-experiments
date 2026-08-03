import { Note } from '../types';

const now: Note = {
  id: 'now',
  folder: 'writings',
  title: 'now',
  subtitle: '3 aug 2026',
  body: '',
  pinned: false,
  sections: [
    {
      heading: 'what i\'m up to',
      body: 'preparing my physical and mental state for work beginning 17 aug 2026.'
    },
    {
      heading: 'next chapter',
      body: 'i still want to build worlds through literature, art, philosophy, and tech. i will begin with writing and experimenting with small tech-based projects.'
    }
  ],
};

export default now;
