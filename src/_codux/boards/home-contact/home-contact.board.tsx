import { createBoard } from '@wixc3/react-board';
import { HomeContact } from '../../../components/home-contact/home-contact';

export default createBoard({
    name: 'HomeContact',
    Board: () => <HomeContact />,
    isSnippet: true,
});
