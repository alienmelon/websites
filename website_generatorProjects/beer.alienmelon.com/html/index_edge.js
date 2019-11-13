/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'port-lligat-slab, serif, Corier, \'Corier New\', monospace': '<script src=\"http://use.edgefonts.net/port-lligat-slab:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.2.min.js"
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
                            id: 'IMG_BEER',
                            type: 'image',
                            rect: ['405px', '55px', '175px', '680px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_BEER.gif",'0px','0px']
                        },
                        {
                            id: 'IMG_RIBBON_BACK',
                            type: 'image',
                            rect: ['15px', '340px', '930px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_RIBBON_BACK.png",'0px','0px']
                        },
                        {
                            id: 'STARS',
                            symbolName: 'STARS',
                            type: 'rect',
                            rect: ['365', '575', '245', '55', 'auto', 'auto']
                        },
                        {
                            id: 'BTN_ANOTHER',
                            type: 'image',
                            rect: ['640px', '615px', '160px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"BTN_ANOTHER.gif",'0px','0px']
                        },
                        {
                            id: 'IMG_TEXT_SUGGEST',
                            type: 'image',
                            rect: ['52px', '281px', '400px', '71px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_TEXT_SUGGEST.png",'0px','0px']
                        },
                        {
                            id: 'txt_output',
                            type: 'text',
                            rect: ['121px', '360px', '719px', '249px', 'auto', 'auto'],
                            text: "",
                            font: ['port-lligat-slab, serif, Corier, \'Corier New\', monospace', [20, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'txt_intro',
                            type: 'text',
                            rect: ['0px', '-1px', '960px', '38px', 'auto', 'auto'],
                            text: "",
                            align: "center",
                            font: ['port-lligat-slab, serif, Corier, \'Corier New\', monospace', [29, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Button_Srouce',
                            type: 'image',
                            rect: ['0px', '0px', '97px', '94px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Button_Srouce.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '741px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(35,203,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "STARS": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '245px', '55px', 'auto', 'auto'],
                            id: 'IMG_STAR05',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_STAR05.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '245px', '55px', 'auto', 'auto'],
                            id: 'IMG_STAR04',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_STAR04.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '245px', '55px', 'auto', 'auto'],
                            id: 'IMG_STAR03',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_STAR03.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '245px', '55px', 'auto', 'auto'],
                            id: 'IMG_STAR02',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_STAR02.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '245px', '55px', 'auto', 'auto'],
                            id: 'IMG_STAR01',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_STAR01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '245px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "1": 0,
                        "2": 267,
                        "3": 500,
                        "4": 750,
                        "5": 1000
                    },
                    data: [
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_STAR03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_STAR03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            750,
                            0,
                            "linear",
                            "${IMG_STAR03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_STAR02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            267,
                            0,
                            "linear",
                            "${IMG_STAR02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_STAR02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            267,
                            0,
                            "linear",
                            "${IMG_STAR01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_STAR05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${IMG_STAR05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${IMG_STAR04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            750,
                            0,
                            "linear",
                            "${IMG_STAR04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${IMG_STAR04}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-410387353");
