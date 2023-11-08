import { createBoard } from '@wixc3/react-board';
import { HomeSections } from '../../../components/home-sections/home-sections';

export default createBoard({
    name: 'HomeSections',
    Board: () => <HomeSections />,
    isSnippet: true,
});
