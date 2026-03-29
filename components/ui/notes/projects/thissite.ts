import { Note } from '../types';

const thissite: Note = {
  id: 'thissite',
  folder: 'projects',
  title: 'this site',
  subtitle: 'kingstonkoh.com',
  body: '',
  sections: [{ heading: 'info', body: 'my public inbox of experiments' },
    { heading: 'next', body: '[x] port https://kkohs.com/\'s content to this site; maybe replace "kingston\'s experiments" section?\n[x] add ideas from actual notes app to \'what\' note, want to \ncreate vertical side docks and features to minimise/maximise apps accordingly - remember to update about note ', checklist: true },
    ],
  pinned: false,
};

export default thissite;
