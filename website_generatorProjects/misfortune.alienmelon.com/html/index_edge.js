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
                            id: 'IMG_BACKGROUND',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_BACKGROUND.png",'0px','0px']
                        },
                        {
                            id: 'IMG_BACK_BLOOD',
                            type: 'image',
                            rect: ['-134px', '-144px', '633px', '825px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_BACK_BLOOD.png",'0px','0px']
                        },
                        {
                            id: 'IMG_COOKIES',
                            type: 'image',
                            rect: ['16px', '184px', '608px', '384px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_COOKIES.png",'0px','0px']
                        },
                        {
                            id: 'IMG_UI_RE',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '577px', '53px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_UI_RE.png",'0px','0px']
                        },
                        {
                            id: 'txt_question',
                            display: 'none',
                            type: 'text',
                            rect: ['63px', '15px', '474px', '17px', 'auto', 'auto'],
                            overflow: 'hidden',
                            text: "The response",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'IMG_ANOTHER_F20',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F20.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F19',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F19.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F18',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F18.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F17',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F17.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F16',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F16.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F15',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F15.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F14',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F14.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F13',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F13.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F12',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F12.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F11',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F11.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F10',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F10.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F09',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F09.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F08',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F08.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F07',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F07.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F06',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F06.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F05',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F05.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F04',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F04.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F03',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F03.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F02',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F02.png",'0px','0px']
                        },
                        {
                            id: 'IMG_ANOTHER_F01',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_ANOTHER_F01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F38',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F38.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F37',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F37.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F36',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F36.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F35',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F35.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F34',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F34.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F33',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F33.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F32',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F32.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F31',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F31.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F30',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F30.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F29',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F29.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F28',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F28.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F27',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F27.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F26',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F26.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F25',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F25.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F24',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F24.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F23',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F23.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F22',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F22.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F21',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F21.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F20',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F20.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F19',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F19.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F18',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F18.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F17',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F17.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F16',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F16.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F15',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F15.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F14',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F14.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F13',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F13.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F12',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F12.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F11',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F11.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F10',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F10.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F09',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F09.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F08',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F08.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F07',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F07.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F06',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F06.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F05',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F05.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F04',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F04.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F03',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F03.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F02',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F02.png",'0px','0px']
                        },
                        {
                            id: 'IMG_OPEN_F01',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IMG_OPEN_F01.png",'0px','0px']
                        },
                        {
                            id: 'IMG_UI_ANOTHER',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '597px', '167px', '43px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"IMG_UI_ANOTHER.png",'0px','0px']
                        },
                        {
                            id: 'IMG_TITLE',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '0px', '964px', '253px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"IMG_TITLE.png",'0px','0px']
                        },
                        {
                            id: 'IMG_UI_ASK',
                            display: 'block',
                            type: 'image',
                            rect: ['206px', '268px', '547px', '133px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"IMG_UI_ASK.png",'0px','0px']
                        },
                        {
                            id: 'txt_input',
                            display: 'block',
                            type: 'text',
                            rect: ['236px', '325px', '474px', '21px', 'auto', 'auto'],
                            text: "Put one here.",
                            align: "left",
                            font: ['Lucida Console, Monaco, monospace', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'BTN_OK',
                            display: 'block',
                            type: 'rect',
                            rect: ['446px', '354px', '71px', '34px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'txt_fortune',
                            display: 'none',
                            type: 'text',
                            rect: ['369px', '213px', '235px', '104px', 'auto', 'auto'],
                            text: "Don't eat the meat. It will turn you. Alternatively: don't trust your significant other. They are already turned.",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],['-6']]
                        },
                        {
                            id: 'AUD_BOOTUP01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: ['audio/AUD_BOOTUP01.mp3','audio/AUD_BOOTUP01.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'AUD_NEWCOOKIE01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audio/AUD_NEWCOOKIE01.mp3','audio/AUD_NEWCOOKIE01.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'AUD_OPENCOOKIE01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audio/AUD_OPENCOOKIE01.mp3','audio/AUD_OPENCOOKIE01.wav'],
                            preload: 'auto'
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
                    duration: 6884.75,
                    autoPlay: true,
                    labels: {
                        "menu": 0,
                        "startmenu": 619,
                        "start": 1500,
                        "fortune": 4073,
                        "another": 4500
                    },
                    data: [
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            2205,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            2252,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            3815,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            3879,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "opacity",
                            619,
                            644,
                            "easeOutQuad",
                            "${IMG_TITLE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            1977,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            2034,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            6080,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            6149,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            5798,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            5862,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            4919,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid243",
                            "display",
                            5235,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            5299,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            3687,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            3749,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            2988,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            3053,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid263",
                            "display",
                            5862,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            5935,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            2034,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            2094,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            2571,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            2626,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            2303,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            2355,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "opacity",
                            619,
                            837,
                            "easeOutQuad",
                            "${IMG_UI_ASK}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            3494,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            3555,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            3555,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            3622,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            2094,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            2153,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            4718,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            4785,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_RE}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            2205,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_RE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            2748,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            2806,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "top",
                            2205,
                            0,
                            "easeOutQuad",
                            "${txt_question}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            2864,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            2927,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_fortune}",
                            'none',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            4073,
                            0,
                            "easeOutQuad",
                            "${txt_fortune}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${txt_fortune}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            2355,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            2407,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            619,
                            0,
                            "easeOutQuad",
                            "${BTN_OK}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            3053,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            3116,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "top",
                            619,
                            838,
                            "easeOutQuad",
                            "${IMG_UI_ASK}",
                            '268px',
                            '-133px'
                        ],
                        [
                            "eid216",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid259",
                            "display",
                            5734,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            5798,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            3622,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            3687,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            2519,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            2571,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid267",
                            "display",
                            6008,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            6080,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F33}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F33}",
                            'none',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            3879,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            3946,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            2806,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            2864,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            619,
                            0,
                            "linear",
                            "${txt_input}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            5549,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            5610,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            5299,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            5363,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            4073,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            4136,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            3304,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            3371,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            2927,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid130",
                            "display",
                            2988,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            3116,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            3177,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            2407,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            2459,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            4571,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            2153,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            2205,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "top",
                            619,
                            644,
                            "easeOutQuad",
                            "${IMG_TITLE}",
                            '0px',
                            '-253px'
                        ],
                        [
                            "eid213",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            5935,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            6008,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            3371,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            3437,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F35}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F35}",
                            'none',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            4008,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            4073,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            4571,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            4649,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F34}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F34}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            3946,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            4008,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid234",
                            "display",
                            4649,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            4718,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            4785,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            4850,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            4199,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            4850,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            5235,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            5363,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            5430,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${txt_question}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            2205,
                            0,
                            "easeOutQuad",
                            "${txt_question}",
                            'none',
                            'block'
                        ],
                        [
                            "eid221",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            5430,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            5490,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid251",
                            "display",
                            5490,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "display",
                            5549,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            2252,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            2303,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            2626,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            2687,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid218",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid255",
                            "display",
                            5610,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            5673,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            4500,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid257",
                            "display",
                            5673,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid258",
                            "display",
                            5734,
                            0,
                            "easeOutQuad",
                            "${IMG_ANOTHER_F14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            3177,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid138",
                            "display",
                            3238,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_ANOTHER}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            4008,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_ANOTHER}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            4750,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_ANOTHER}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            1355,
                            0,
                            "easeOutQuad",
                            "${IMG_TITLE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            3749,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            3815,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            2459,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            2519,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_ASK}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            619,
                            0,
                            "linear",
                            "${IMG_UI_ASK}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_UI_ASK}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            4136,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            4199,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            3238,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            3304,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            2687,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            2748,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            3437,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            3494,
                            0,
                            "easeOutQuad",
                            "${IMG_OPEN_F26}",
                            'block',
                            'none'
                        ],
                            [ "eid1", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${AUD_BOOTUP01}', [] ] ],
                            [ "eid2", "trigger", 1500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${AUD_OPENCOOKIE01}', [] ] ],
                            [ "eid189", "trigger", 5234.5625, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${AUD_NEWCOOKIE01}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-137694492");
