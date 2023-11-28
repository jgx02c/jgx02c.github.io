import { createBoard } from '@wixc3/react-board';
import { TimelineComponentLeft } from '../../../components/timeline-component-left/timeline-component-left';

export default createBoard({
    name: 'TimelineComponentLeft',
    Board: () => <TimelineComponentLeft />,
    isSnippet: true,
});
