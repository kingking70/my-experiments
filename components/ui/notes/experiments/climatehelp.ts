import { Note } from '../types';

const climatehelp: Note = {
  id: 'climatehelp',
  folder: 'experiments',
  title: 'cli-mate.help',
  subtitle: 'cli & climate help',
  body: '',
  sections: [
    { heading: 'info', body: 'cli-mate.help is a wordplay with cli (aka tech) and climate. cli is an acronym for command line interface; mate refers to a friend; climate refers to the planet\'s health.\n\ncurrently, i\'m using this website to store and educate myself on private and malleabe tech, and bio(medical)engineered products through mostly writings and some mini interactive games.' },
    { heading: 'next', body: '', checklist: true },
    { heading: 'current', body: 'https://cli-mate.help/', image: '/climatehelp-current.png' },
  ],
  pinned: false,
};

export default climatehelp;
