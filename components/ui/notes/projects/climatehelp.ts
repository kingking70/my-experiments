import { Note } from '../types';

const climatehelp: Note = {
  id: 'climatehelp',
  folder: 'projects',
  title: 'cli-mate.help',
  subtitle: 'cli & climate help',
  body: '',
  sections: [
    { heading: 'info', body: 'cli-mate.help is a wordplay between cli and climate. cli is an acronym for command line interface while climate is the weather and prevailing trend.\n\nthis website aims to educate people on tech and energy through interactive games and news. the current focus is nuclear electricity and creating your own private tech.' },
    { heading: 'next', body: '', checklist: true },
    { heading: 'current', body: 'https://cli-mate.help/', image: '/climatehelp-current.png' },
  ],
  pinned: false,
};

export default climatehelp;
