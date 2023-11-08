import { createBoard } from '@wixc3/react-board';
import { HomeProjects } from '../../../components/home-projects/home-projects';

export default createBoard({
    name: 'HomeProjects',
    Board: () => <HomeProjects projects={[]} />,
    isSnippet: true,
});
