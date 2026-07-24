import { HomeIntro } from '../components/home-intro/home-intro';
import { Dia } from '../components/dia/dia';
import { Ventures } from '../components/ventures/ventures';
import { SelectedProjects } from '../components/selected-projects/selected-projects';

function HomePage() {
    return (
        <>
            <HomeIntro />
            <Dia />
            <Ventures />
            <SelectedProjects />
        </>
    );
}

export default HomePage;
