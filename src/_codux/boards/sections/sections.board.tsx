import { createBoard } from '@wixc3/react-board';
import { Sections } from '../../../components/sections/sections';

export default createBoard({
    name: 'Section',
    Board: () => <Sections id={0} titleLogo={''} subText={''} description={''} linkText={''} link={''} image={''} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1850,
        windowHeight: 985
    }
});
