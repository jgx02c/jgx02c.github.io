import { createBoard } from '@wixc3/react-board';
import { NavHeader } from '../../../components/nav-header/nav-header';

export default createBoard({
    name: 'NavHeader',
    Board: () => <NavHeader />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1350
    }
});
