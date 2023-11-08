import { createBoard } from '@wixc3/react-board';
import { WorkCardThree } from '../../../components/work-card-three/work-card-three';

export default createBoard({
    name: 'WorkCardThree',
    Board: () => <WorkCardThree />,
    isSnippet: true,
});
