import { createBoard } from '@wixc3/react-board';
import { Education } from '../../../components/education/education';

export default createBoard({
    name: 'Education',
    Board: () => <Education />,
    environmentProps: {
        canvasWidth: 743,
    },
});
