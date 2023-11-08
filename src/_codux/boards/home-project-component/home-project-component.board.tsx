import { createBoard } from '@wixc3/react-board';
import { HomeProjectComponent } from '../../../components/home-project-component/home-project-component';

export default createBoard({
    name: 'HomeProjectComponent',
    Board: () => <HomeProjectComponent id={0} title={''} description={''} imageUrl={''} madeWith1={''} madeWith2={''} madeWith3={''} madeWith4={''} madeWith5={''} madeWith6={''} demo={false} demoLink={''} code={false} codeLink={''} live={false} liveLink={''} />,
    isSnippet: true,
});
