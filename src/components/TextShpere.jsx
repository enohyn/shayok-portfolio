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

<<<<<<< HEAD
        function radiusValue() {
            if (window.screen.width <= 778) {
                radii = 150;
            } else {
                radii = 200;
=======
            function radiusValue() {
                if (window.screen.width <= 778) {
                    radii = 150;
                } else {
                    radii = 200;
                }
                return radii;
>>>>>>> 036dffdaa09371e7f8439446f9d3d2a6c57bc50f
            }
    
            const options = {
                radius: radiusValue(),
                maxSpeed: 'fast',
            initSpeed: 'slow',
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
    //         if (window.screen.width <= 778) {
    //             radii = 150;
    //         } else {
    //             radii = 290;
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