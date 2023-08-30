import { createBoard } from '@wixc3/react-board';
import { HomeIntro } from '../../../components/home-intro/home-intro';

export default createBoard({
    name: 'HomeIntro',
    Board: () => <HomeIntro />,
    isSnippet: true,
});
