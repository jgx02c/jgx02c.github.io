import { createBoard } from '@wixc3/react-board';
import { Business } from '../../../components/business/business';

export default createBoard({
    name: 'Business',
    Board: () => <Business />
});
