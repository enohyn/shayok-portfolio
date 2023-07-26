import TagCloud from "TagCloud";
import React, { useEffect } from "react";
import "../assets/css/TextShpere.css";

// Importing TagCloud package
// const texts = [
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "JavaScript",
//     "React",
//     "Tailwind",
//     "Storybook",
//     "NodeJS",
//     "Wordpress",
//     "jQuery",
//     "ES6",
//     "GIT",
//     "Bootstrap",
// ];

const TextShpere = () => {
    // Animation settings for Text Cloud
    // useEffect(() => {
    //     return () => {
    //         const container = ".tagcloud";
    //         const texts = [
    //             "HTML5",
    //             "CSS3",
    //             "SASS",
    //             "JavaScript",
    //             "React",
    //             "Tailwind",
    //             "Storybook",
    //             "NodeJS",
    //             "Wordpress",
    //             "jQuery",
    //             "ES6",
    //             "GIT",
    //             "Bootstrap",        
    //         ];

    //         const options = {
    //             radius: 200,
    //             maxSpeed: "slow",
    //             initSpeed: "fast",
    //             keep: true,
    //         };

    //         TagCloud(container, texts, options);
    //     };
    // }, []);

    useEffect(() => {

        const container = '.tagcloud';
        let radii;
      
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

        function radiusValue() {
            if (window.screen.width <= 778) {
                radii = 150;
            } else {
                radii = 290;
            }
            return radii;
        }

        const options = {
            radius: radiusValue(),
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        };

        TagCloud(container, texts, options);
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