import { createBoard } from '@wixc3/react-board';
import { Skills } from '../../../components/skills/skills';

export default createBoard({
    name: 'Skills',
    Board: () => <Skills />,
    environmentProps: {
        canvasWidth: 992,
        windowWidth: 1906,
        windowHeight: 853,
    },
});
