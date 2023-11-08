import { createBoard } from '@wixc3/react-board';
import { HomeWork } from '../../../components/home-work/home-work';

export default createBoard({
    name: 'HomeWork',
    Board: () => <HomeWork />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1566
    }
});
