import { HomeIntro } from '../components/home-intro/home-intro';
import { FounderTimeline, TimelineChapter } from '../components/founder-timeline/founder-timeline';
import { Optionality } from '../components/optionality/optionality';
import { Finned } from '../components/finned/finned';
import { Dia } from '../components/dia/dia';

function HomePage() {
    return (
        <>
            <HomeIntro />
            <FounderTimeline>
                <TimelineChapter year="2021" company="Optionality" tint="gold">
                    <Optionality />
                </TimelineChapter>
                <TimelineChapter year="2023" company="Finned" tint="silver">
                    <Finned />
                </TimelineChapter>
                <TimelineChapter year="2025" company="Dialogica AI" tint="maroon">
                    <Dia />
                </TimelineChapter>
            </FounderTimeline>
        </>
    );
}

export default HomePage;
