import { createBoard } from '@wixc3/react-board';
import { Space } from '../../../components/space/space';

export default createBoard({
    name: 'Space',
    Board: () => <Space />
});
