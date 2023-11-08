import { createBoard } from '@wixc3/react-board';
import { Sections } from '../../../components/sections/sections';

export default createBoard({
    name: 'Section',
    Board: () => <Sections />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1850,
        windowHeight: 985
    }
});
