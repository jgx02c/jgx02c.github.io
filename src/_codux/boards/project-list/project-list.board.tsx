import { createBoard } from '@wixc3/react-board';
import { ProjectList } from '../../../components/project-list/project-list';

export default createBoard({
    name: 'ProjectList',
    Board: () => <ProjectList />,
    environmentProps: {
        windowWidth: 2402,
        windowHeight: 851,
        canvasWidth: 1432,
    },
});
