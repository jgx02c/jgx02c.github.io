import { createBoard } from '@wixc3/react-board';
import { WorkCardFive } from '../../../components/work-card-five/work-card-five';

export default createBoard({
    name: 'WorkCardFive',
    Board: () => <WorkCardFive />,
    isSnippet: true,
});
