import { createBoard } from '@wixc3/react-board';
import { WorkCardOne } from '../../../components/work-card-one/work-card-one';

export default createBoard({
    name: 'WorkCardOne',
    Board: () => <WorkCardOne />,
    isSnippet: true,
});
