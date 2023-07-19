import React, { useEffect } from "react";
import "../assets/css/TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML5",
                "CSS3",
                "SASS",
                "JavaScript",
                "React",
                "Tailwind",
                "Storybook",
                "NodeJS",
                "Wordpress",
                "jQuery",
                "ES6",
                "GIT",
                "Bootstrap",        
            ];

            const options = {
                radius: 200,
                maxSpeed: "slow",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div className="text-shpere flex flex-col justify-center items-center">
                <h3 className="text-white font-space">
                    Framework and Technologies
                </h3>
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default TextShpere;