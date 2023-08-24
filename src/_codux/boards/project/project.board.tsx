import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

export default createBoard({
    name: 'Project',
    Board: () => <Project />,
    environmentProps: {
        canvasWidth: 822,
        canvasHeight: 279,
        windowHeight: 697,
    },
});
