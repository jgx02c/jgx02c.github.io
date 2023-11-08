import { createBoard } from '@wixc3/react-board';
import { WorkCardTwo } from '../../../components/work-card-two/work-card-two';

export default createBoard({
    name: 'WorkCardTwo',
    Board: () => <WorkCardTwo />,
    isSnippet: true,
});
