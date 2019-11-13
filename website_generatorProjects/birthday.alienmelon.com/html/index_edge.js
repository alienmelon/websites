/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'vt323, "Lucida Console", Monaco, monospace': '<script src=\"http://use.edgefonts.net/vt323:n4:all.js\"></script>'        },
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
                            id: 'IMG_FRAME',
                            type: 'image',
                            rect: ['-80px', '-50px', '1110px', '740px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_FRAME.png",'0px','0px']
                        },
                        {
                            id: 'txt_output',
                            type: 'text',
                            rect: ['11px', '481px', '941px', '148px', 'auto', 'auto'],
                            text: "Warmest regards for you being born. You may send my regards to your mother!",
                            font: ['vt323, "Lucida Console", Monaco, monospace', [40, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'IMG_CAKE',
                            type: 'image',
                            rect: ['270px', '70px', '440px', '410px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"CAKE_NOT_LIE.gif",'0px','0px']
                        },
                        {
                            id: 'Button_Source',
                            type: 'image',
                            rect: ['-177px', '-144px', '97px', '94px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Button_Source.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['-53px', '-25px', '1065px', '22px', 'auto', 'auto'],
                            text: "THE SOCIAL MEDIA \"HAPPY BIRTHDAY\" GENERATOR - Because all your friends keep having birthdays &amp; you sound like a broken record:<br>",
                            align: "center",
                            font: ['vt323, \'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(122,157,209,1.00)", "600", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '640px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(122,161,253,1.00)"]
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
})("EDGE-17787269");
