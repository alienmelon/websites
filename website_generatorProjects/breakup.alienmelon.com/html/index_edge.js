/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'give-you-glory, "Courier New", Courier, monospace': '<script src=\"http://use.edgefonts.net/give-you-glory:n4:all.js\"></script>',
            'annie-use-your-telescope, sans-serif': '<script src=\"http://use.edgefonts.net/annie-use-your-telescope:n4:all.js\"></script>'        },
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
                            id: 'Notepaper',
                            symbolName: 'Notepaper',
                            type: 'rect',
                            rect: ['135', '40', '675', '750', 'auto', 'auto']
                        },
                        {
                            id: 'IMG_Rose',
                            type: 'image',
                            rect: ['-70px', '440px', '525px', '415px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_Rose.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_Send',
                            type: 'image',
                            rect: ['615px', '720px', '155px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_Send.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_Another',
                            type: 'image',
                            rect: ['300px', '715px', '295px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_Another.png",'0px','0px']
                        },
                        {
                            id: 'txt_output',
                            type: 'text',
                            rect: ['183px', '118px', '593px', '591px', 'auto', 'auto'],
                            text: "Dear stud magnet,<br><br>I've been thinking about us a lot lately.<br>Things change. Now I am unemployed.<br>I am leaving because of Valentine's Day being over.<br>I am actually bread. It will never work.<br><br>Signed,<br>YOUR NAME HERE",
                            align: "center",
                            font: ['annie-use-your-telescope, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Button_Source',
                            type: 'image',
                            rect: ['0', '0', '97px', '94px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Button_Source.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '828px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(51,204,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Notepaper": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['15px', '0px', '645px', '750px', 'auto', 'auto'],
                            id: 'IMG_NotePaper01',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_NotePaper01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['10px', '35px', '665px', '665px', 'auto', 'auto'],
                            id: 'IMG_NotePaper02',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_NotePaper02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '25px', '670px', '690px', 'auto', 'auto'],
                            id: 'IMG_NotePaper03',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_NotePaper03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '675px', '750px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    labels: {
                        "1": 0,
                        "2": 147,
                        "3": 292
                    },
                    data: [
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_NotePaper02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            147,
                            0,
                            "linear",
                            "${IMG_NotePaper02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            292,
                            0,
                            "linear",
                            "${IMG_NotePaper02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_NotePaper01}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            147,
                            0,
                            "linear",
                            "${IMG_NotePaper01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_NotePaper03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            292,
                            0,
                            "linear",
                            "${IMG_NotePaper03}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-322261697");
