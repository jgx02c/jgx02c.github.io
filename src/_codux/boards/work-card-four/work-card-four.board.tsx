import { createBoard } from '@wixc3/react-board';
import { WorkCardFour } from '../../../components/work-card-four/work-card-four';

export default createBoard({
    name: 'WorkCardFour',
    Board: () => <WorkCardFour />,
    isSnippet: true,
});
