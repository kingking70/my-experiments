import { Note } from '../types';

const now: Note = {
  id: 'now',
  folder: 'writings',
  title: 'now',
  subtitle: '30 may 2026',
  body: '',
  pinned: false,
  sections: [
    {
      heading: 'what i\'m up to',
      body: 'experimenting with projects, the first being nuclear electricity energy education for singapore. ultimately, i want to spend the rest of my awake time with creativity, laughter, and solemnity when necessary only in this order. my activities would vary but they fall under those themes. \n\nmy paid work isn\'t what i want to do. i need to reassess my life\'s trajectory when i\'m well enough to do so.'
    },
    {
      heading: 'next chapter',
      body: 'besides philosophy and tech, i want to attempt to build worlds through literature and art. i have not thought out about the art medium. i also want to try my hand in writing and experimenting with small tech-based projects.'
    }
  ],
};

export default now;
