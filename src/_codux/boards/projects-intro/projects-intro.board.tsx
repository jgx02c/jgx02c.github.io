import { createBoard } from '@wixc3/react-board';
import { ProjectsIntro } from '../../../components/projects-intro/projects-intro';

export default createBoard({
    name: 'ProjectsIntro',
    Board: () => <ProjectsIntro />,
    isSnippet: true,
});
