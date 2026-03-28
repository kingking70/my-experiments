import { Note } from '../types';

const newclear: Note = {
  id: 'newclear',
  folder: 'projects',
  title: 'newclear.website',
  subtitle: 'nuclear electricity',
  body: '',
  sections: [
    { heading: 'info', body: 'subpage of cli-mate.help. acts as an interactive info hub for nuclear electricity education. demystifying nuclear goos and danger myths.' },
    { heading: 'next', body: '', checklist: true },
    { heading: 'current', body: '', image: '' },
  ],
  pinned: false,
};

export default newclear;
