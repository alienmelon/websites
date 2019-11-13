/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '"Lucida Console", Monaco, monospace': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'IMG_Background',
                            type: 'image',
                            rect: ['-196px', '-121px', '1353px', '883px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_Background.png",'0px','0px']
                        },
                        {
                            id: 'IMG_Title',
                            type: 'image',
                            rect: ['-175px', '-202px', '1025px', '245px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_Title.png",'0px','0px']
                        },
                        {
                            id: 'IMG_Stars',
                            type: 'image',
                            rect: ['-153px', '-93px', '1212px', '819px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_Stars.png",'0px','0px']
                        },
                        {
                            id: 'IMG_Bubble',
                            type: 'image',
                            rect: ['165px', '-62px', '837px', '681px', 'auto', 'auto'],
                            opacity: '0.49861316568047',
                            fill: ["rgba(0,0,0,0)",im+"IMG_Bubble.gif",'0px','0px']
                        },
                        {
                            id: 'IMG_Splat',
                            type: 'image',
                            rect: ['-27px', '-33px', '633px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_Splat.png",'0px','0px']
                        },
                        {
                            id: 'IMG_Hero',
                            type: 'image',
                            rect: ['21px', '165px', '231px', '465px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_Hero.png",'0px','0px']
                        },
                        {
                            id: 'txt_output',
                            type: 'text',
                            rect: ['356px', '74px', '544px', '486px', 'auto', 'auto'],
                            text: "You will become a hell lava beastlord after cheating death. Once you come to know your true origins you will defend the weak who will know you as bubblepumpkin master of darkwinter!",
                            align: "center",
                            font: ['"Lucida Console", Monaco, monospace', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '640px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-28299034");
