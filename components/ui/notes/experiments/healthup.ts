import { Note } from '../types';

const healthUp: Note = {
  id: 'health-up',
  folder: 'experiments',
  title: 'health-up',
  subtitle: 'personal health app for recovery',
  body: '',
  sections: [
    { heading: 'info', body: 'health-up is a personal health app designed for my recovery. \ni\'ve experienced the costs of deprived information due to my lack of care with my personal health information and tracking, and information leakage between my healthcare team. \n\nas such i\'ve created this app to better manage my health information as i convalescence from frequent memory and cognitive deficiencies as i recover. i\'m a lot better now but i know that this app would help me had i had it earlier.' },
    { heading: 'next', body: '', checklist: true },
    { heading: 'current', body: 'testing', image: '' },
  ],
  pinned: false,
};

export default healthUp;