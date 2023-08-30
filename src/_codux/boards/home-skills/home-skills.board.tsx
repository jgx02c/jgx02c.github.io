import { createBoard } from '@wixc3/react-board';
import { HomeSkills } from '../../../components/home-skills/home-skills';

export default createBoard({
    name: 'HomeSkills',
    Board: () => <HomeSkills />,
    isSnippet: true,
});
