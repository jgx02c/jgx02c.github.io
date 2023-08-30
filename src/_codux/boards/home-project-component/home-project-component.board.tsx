import { createBoard } from '@wixc3/react-board';
import { HomeProjectComponent } from '../../../components/home-project-component/home-project-component';

export default createBoard({
    name: 'HomeProjectComponent',
    Board: () => <HomeProjectComponent />,
    isSnippet: true,
});
