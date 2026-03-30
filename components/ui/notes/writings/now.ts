import { Note } from '../types';

const now: Note = {
  id: 'now',
  folder: 'writings',
  title: 'now',
  subtitle: '30 mar 2026',
  body: '',
  pinned: false,
  sections: [
    {
      heading: 'what i\'m up to',
      body: 'exploring buddhism superficially, trying to get used to machine learning content and my paid work. ultimately, i want to spend the rest of my awake time with creativity, laughter, and solemn in this order. my activities would vary but they fall under those themes. \n\nmy paid work isn\'t what i want to do. i need to reassess my life\'s trajectory when i\'m well enough to do so.'
    },
    {
      heading: 'next chapter',
      body: 'besides philosophy and tech, i want to attempt to build worlds through literature and art. i have not thought out about the art medium. i also want to try my hand in building my own company or companies. \n\nall ambitious ideas but i lack the energy to do so for now. i\'d probably attempt them at snail pace, antithetical to the recent ai climate.'
    }
  ],
};

export default now;
