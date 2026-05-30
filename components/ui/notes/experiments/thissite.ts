import { Note } from '../types';

const thissite: Note = {
  id: 'thissite',
  folder: 'experiments',
  title: 'this site',
  subtitle: 'kingstonkoh.com',
  body: '',
  sections: [{ heading: 'info', body: 'my public inbox of experiments' },
    { heading: 'next', body: '[x] port https://kkohs.com/\'s content to this site; maybe replace "kingston\'s experiments" section?\n[x] add ideas from actual notes app to \'what\' note, want to ', checklist: true },
    ],
  pinned: false,
};

export default thissite;
