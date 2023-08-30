import { createBoard } from '@wixc3/react-board';
import { NavFooter } from '../../../components/nav-footer/nav-footer';

export default createBoard({
    name: 'NavFooter',
    Board: () => <NavFooter />,
    isSnippet: true,
});
