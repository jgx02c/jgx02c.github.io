import { createBoard } from '@wixc3/react-board';
import { Timeline } from '../../../components/timeline/timeline';

export default createBoard({
    name: 'Timeline',
    Board: () => <Timeline />,
    isSnippet: true,
});
