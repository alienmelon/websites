/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"swfobject.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'GAME',
                            symbolName: 'GAME',
                            type: 'rect',
                            rect: ['0', '22.8%', '100%', '57.8%', 'auto', 'auto']
                        },
                        {
                            id: 'FRAME_LEFT',
                            type: 'rect',
                            rect: ['3px', '39px', '2px', '107.9%', 'auto', 'auto'],
                            fill: ["rgba(168,168,168,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'FRAME_RIGHT',
                            type: 'rect',
                            rect: ['auto', '39px', '2px', '107.9%', '5px', 'auto'],
                            fill: ["rgba(168,168,168,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'FRAME_TOP',
                            type: 'rect',
                            rect: ['5px', '39px', '104.2%', '1px', 'auto', 'auto'],
                            fill: ["rgba(168,168,168,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'FRAME_RIGHT_BLOCK',
                            type: 'rect',
                            rect: ['auto', '32px', '5px', '42px', '0px', 'auto'],
                            fill: ["rgba(0,0,171,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'FOOTER_BACK',
                            type: 'rect',
                            rect: ['0px', 'auto', '100%', '16px', 'auto', '0px'],
                            fill: ["rgba(0,168,170,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'IMG_FOOTER01',
                            type: 'image',
                            rect: ['7px', 'auto', '749px', '16px', 'auto', '0px'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_FOOTER01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_FOOTER_BYLINE',
                            type: 'image',
                            rect: ['auto', 'auto', '141px', '16px', '0px', '0px'],
                            cursor: 'help',
                            fill: ["rgba(0,0,0,0)",im+"IMG_FOOTER_BYLINE.png",'0px','0px']
                        },
                        {
                            id: 'IMG_HEADER',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '32px', 'auto', 'auto'],
                            fill: ["rgba(168,168,168,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'IMG_HEADER_SIDE01',
                            type: 'image',
                            rect: ['0', '0', '8px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_HEADER_SIDE01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_FLASH01',
                            display: 'block',
                            type: 'image',
                            rect: ['8', '0', '214px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_FLASH01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_HTML01',
                            display: 'block',
                            type: 'image',
                            rect: ['8', '16', '214px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_HTML01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_FLASH02',
                            display: 'none',
                            type: 'image',
                            rect: ['8', '0', '214px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_FLASH02.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BTN_SOURCE',
                            type: 'image',
                            rect: ['222', '0', '214px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_SOURCE.png",'0px','0px']
                        },
                        {
                            id: 'MAIN_NAV',
                            symbolName: 'MAIN_NAV',
                            type: 'rect',
                            rect: ['0px', '32', '346', '94', 'auto', 'auto']
                        },
                        {
                            id: 'IMG_BTN_HTML02',
                            display: 'none',
                            type: 'image',
                            rect: ['8', '16', '214px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"IMG_BTN_HTML02.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,171,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "HTML": 173,
                        "FLASH": 500
                    },
                    data: [
                        [
                            "eid4",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_BTN_FLASH01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_BTN_HTML01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            173,
                            0,
                            "linear",
                            "${IMG_BTN_HTML02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_BTN_HTML02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "left",
                            173,
                            0,
                            "linear",
                            "${MAIN_NAV}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "display",
                            173,
                            0,
                            "linear",
                            "${IMG_BTN_FLASH02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            500,
                            0,
                            "linear",
                            "${IMG_BTN_FLASH02}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "MAIN_NAV": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '346px', '94px', 'auto', 'auto'],
                            id: 'IMG_NAV01',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_NAV01.png', '0px', '0px']
                        },
                        {
                            rect: ['276px', '47px', '70px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'BTN_NEW_WINDOW',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(168,168,168,0.00)']
                        },
                        {
                            rect: ['1px', '47px', '241px', '33px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'BTN_NEW',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(168,168,168,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '346px', '94px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "GAME": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'GAME',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0', '0%', '100%', '119.4%', 'auto', 'auto'],
                            fill: ['rgba(0,19,43,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '57.8%']
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
})("EDGE-61129664");
