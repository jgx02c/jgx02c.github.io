import { createBoard } from '@wixc3/react-board';
import { SkillsProject } from '../../../components/skills-project/skills-project';

export default createBoard({
    name: 'SkillsProject',
    Board: () => <SkillsProject />,
    isSnippet: true,
});
