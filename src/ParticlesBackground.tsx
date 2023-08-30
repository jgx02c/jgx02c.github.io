import { Particles } from "react-particles";

const ParticlesBackground = () => {
    return (
        <div className="App">
            <Particles 
            options={{
                background: {
                    color: "#0e378a",
                },
                fps_limit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "9fafca"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 400,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.5,
                            speed: 1,
                            sync: false,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5,
                        },
                        value: 1,
                    },
                },
            }}/>
        </div>
    )
}

export default ParticlesBackground;