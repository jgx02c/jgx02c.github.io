import { createBoard } from '@wixc3/react-board';
import { HomeBusiness } from '../../../components/home-business/home-business';

export default createBoard({
    name: 'HomeBusiness',
    Board: () => <HomeBusiness />,
    isSnippet: true,
});
