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
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
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
                if (window.screen.width <= 640) {
                    radii = 170;
                } else {
                    radii = 240;
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
        };
    }, []);

    //deployment code 
    // useEffect(() => {

    //     const container = '.tagcloud';
    //     let radii;
      
    //      const texts = [
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

    //     function radiusValue() {
    //         if (window.screen.width <= 640) {
    //             radii = 170;
    //         } else {
    //             radii = 260;
    //         }
    //         return radii;
    //     }


    //     const options = {
    //         radius: radiusValue(),
    //         maxSpeed: 'normal',
    //         initSpeed: 'normal',
    //         keep: true,
    //     };

    //     TagCloud(container, texts, options);
    // }, []);

    return (
        <>
            <div className="text-shpere flex flex-col justify-between items-center lg:h-1/2">
                <h3 className="text-white font-space">
                    Framework and Technologies
                </h3>
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold"></span>
            </div>
        </>
    );
};

export default TextShpere;