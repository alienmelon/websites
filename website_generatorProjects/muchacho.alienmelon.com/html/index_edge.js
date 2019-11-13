/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'architects-daughter, sans-serif': '<script src=\"http://use.edgefonts.net/architects-daughter:n4:all.js\"></script>'        },
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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'UI',
                            symbolName: 'UI',
                            type: 'rect',
                            rect: ['108px', '15px', '840', '605', 'auto', 'auto']
                        },
                        {
                            id: 'Button_Srouce',
                            type: 'image',
                            rect: ['0', '0', '97px', '94px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Button_Srouce.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '640px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,150,255,1.00)"]
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
            "UI": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Title_Back',
                            type: 'image',
                            rect: ['651px', '0px', '189px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Title_Back.gif', '0px', '0px']
                        },
                        {
                            id: 'Title_01',
                            type: 'image',
                            rect: ['0px', '3px', '744px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Title_01.png', '0px', '0px']
                        },
                        {
                            id: 'Title_02',
                            type: 'image',
                            rect: ['669px', '39px', '162px', '108px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Title_02.png', '0px', '0px']
                        },
                        {
                            id: 'Muchacho',
                            type: 'image',
                            rect: ['17px', '248px', '183px', '357px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Muchacho.gif', '0px', '0px']
                        },
                        {
                            id: 'Text_Back',
                            type: 'image',
                            rect: ['198px', '135px', '504px', '238px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Text_Back.png', '0px', '0px']
                        },
                        {
                            rect: ['222px', '375px', '278px', '73px', 'auto', 'auto'],
                            id: 'btn_muchachofy',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_muchachofy.png', '0px', '0px']
                        },
                        {
                            rect: ['543px', '375px', '158px', '43px', 'auto', 'auto'],
                            id: 'btn_clear',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_clear.png', '0px', '0px']
                        },
                        {
                            rect: ['232px', '138px', '458px', '219px', 'auto', 'auto'],
                            font: ['architects-daughter, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal', 'break-word', ''],
                            id: 'txt_input',
                            text: '',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '840px', '605px']
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
})("EDGE-143933853");
