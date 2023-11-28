import { createBoard } from '@wixc3/react-board';
import { TimelineComonentRight } from '../../../components/timeline-comonent-right/timeline-comonent-right';

export default createBoard({
    name: 'TimelineComonentRight',
    Board: () => <TimelineComonentRight />,
    isSnippet: true,
});
