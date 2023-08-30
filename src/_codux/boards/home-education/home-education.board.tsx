import { createBoard } from '@wixc3/react-board';
import { HomeEducation } from '../../../components/home-education/home-education';

export default createBoard({
    name: 'HomeEducation',
    Board: () => <HomeEducation />,
    isSnippet: true,
});
