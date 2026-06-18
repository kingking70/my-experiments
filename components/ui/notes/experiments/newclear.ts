import { Note } from '../types';

const newclear: Note = {
  id: 'newclear',
  folder: 'experiments',
  title: 'newclear.website',
  subtitle: 'nuclear electricity energy education',
  body: '',
  sections: [
    { heading: 'info', body: 'subpage of cli-mate.help. acts as an interactive info hub for nuclear electricity education. demystifying nuclear goos and danger myths, providing facts and figures to help Singaporeans understand the benefits of nuclear energy.' },
    { heading: 'considerations', body: 'the average singaporean being most singaporeans who can read either at least one of the common languages in singapore: english, chinese, malay, tamil, hindi. and considering different ages and colour deficiencies. the goal here is simply reach, the audience of ordinary singaporeans. \n\n thus, the design is focused on accessibility, namely considering: language, age, font size, colour, wording-content, and minimal-to-little distractions. the last point being the lack of interactive or any media that simply pulls the attention away from the main focus aka content; fancy or artsy design just won’t cut it because it’d only reach a certain demographic which is self-limiting. e.g. comic strip design to relay info may work for the younger-to-working-adult crowd but the older/elderly crowd, whom usually holds the most sway in households and/or has more misconceptions on nuclear energy, may deem the info has unimportant and be either hesitant or unbothered to entertain the info seriously.' },
    { heading: 'next', body: '\n[x] check if languages are translated correctly\n maybe add images to background?', checklist: true },
    { heading: 'current', body: 'https://newclear.website'},
  ],
  pinned: false,
};

export default newclear;