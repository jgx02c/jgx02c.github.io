import { HomeIntro } from '../components/home-intro/home-intro';
import { Dia } from '../components/dia/dia';
import { Finned } from '../components/finned/finned';

function HomePage() {
    return (
        <>
            <HomeIntro />
            <Dia />
            <Finned />
        </>
    );
}

export default HomePage;
