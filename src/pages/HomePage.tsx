import { HomeIntro } from '../components/home-intro/home-intro';
import { Flagship } from '../components/flagship/flagship';
import { Ventures } from '../components/ventures/ventures';
import { SelectedProjects } from '../components/selected-projects/selected-projects';

function HomePage() {
    return (
        <>
            <HomeIntro />
            <Flagship />
            <Ventures />
            <SelectedProjects />
        </>
    );
}

export default HomePage;
