/*!
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2017, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

function textToJSON (text) {
    var newText = text;
    if (typeof text === 'object') newText = JSON.stringify(text); //Only stringify if the variable is JSON
    return newText;
}

var c = {
    a: (...extraParam) => console.assert(textToJSON(...extraParam)),                    // console.assert()
    dir: (param) => console.dir(param),                                     // console.dir() - non-standard method
    e: (text, ...extraParam) => console.error(textToJSON(text), ...extraParam),         // console.error()
    i: (text, ...extraParam) => console.info(textToJSON(text), ...extraParam),          // console.info()
    l: (text, ...extraParam) => console.log(textToJSON(text), ...extraParam),           // console.log()
    p: (param) => param ? console.profile(param) : console.profile(),       // console.profile()
    pe: () => console.profileEnd(),                                         // console.profileEnd()
    t: (param) => param ? console.time(param) : console.time(),             // console.time()
    te: (param) => param ? console.timeEnd(param) : console.timeEnd(),      // console.timeEnd()
    w: (text, ...extraParam) => console.warn(textToJSON(text), ...extraParam),          // console.warn()

    // log() style formatting
    lb: (text, ...extraParam) => console.log("\x1b[1m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // bold
    lf: (text, ...extraParam) => console.log("\x1b[2m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // faint
    lu: (text, ...extraParam) => console.log("\x1b[4m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // underline
    ll: (text, ...extraParam) => console.log("\x1b[5m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // blink
    ln: (text, ...extraParam) => console.log("\x1b[7m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // negative
    lh: (text, ...extraParam) => console.log("\x1b[8m" + textToJSON(text) + "\x1b[0m", ...extraParam),   // hidden
    // log() colors
    lK: (text, ...extraParam) => console.log("\x1b[30m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // black
    lR: (text, ...extraParam) => console.log("\x1b[31m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // red
    lG: (text, ...extraParam) => console.log("\x1b[32m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // green
    lY: (text, ...extraParam) => console.log("\x1b[33m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // yellow
    lB: (text, ...extraParam) => console.log("\x1b[34m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // blue
    lM: (text, ...extraParam) => console.log("\x1b[35m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // magenta
    lC: (text, ...extraParam) => console.log("\x1b[36m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // cyan
    lW: (text, ...extraParam) => console.log("\x1b[37m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // white
    // log() bold + colors
    lbK: (text, ...extraParam) => console.log("\x1b[1m\x1b[30m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // black
    lbR: (text, ...extraParam) => console.log("\x1b[1m\x1b[31m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // red
    lbG: (text, ...extraParam) => console.log("\x1b[1m\x1b[32m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // green
    lbY: (text, ...extraParam) => console.log("\x1b[1m\x1b[33m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // yellow
    lbB: (text, ...extraParam) => console.log("\x1b[1m\x1b[34m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // blue
    lbM: (text, ...extraParam) => console.log("\x1b[1m\x1b[35m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // magenta
    lbC: (text, ...extraParam) => console.log("\x1b[1m\x1b[36m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // cyan
    lbW: (text, ...extraParam) => console.log("\x1b[1m\x1b[37m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // white
    // log() underline + bold + colors
    luK: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[30m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // black
    luR: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[31m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // red
    luG: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[32m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // green
    luY: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[33m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // yellow
    luB: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[34m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // blue
    luM: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[35m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // magenta
    luC: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[36m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // cyan
    luW: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[37m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // white
    // log() blink + bold + colors
    llK: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[30m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // black
    llR: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[31m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // red
    llG: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[32m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // green
    llY: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[33m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // yellow
    llB: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[34m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // blue
    llM: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[35m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // magenta
    llC: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[36m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // cyan
    llW: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[37m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // white
    // log() bold + background colors
    lKBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[40m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // black
    lRBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[41m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // red
    lGBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[42m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // green
    lYBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[43m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // yellow
    lBBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[44m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // blue
    lMBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[45m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // magenta
    lCBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[46m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // cyan
    lWBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[47m" + textToJSON(text) + "\x1b[0m", ...extraParam),  // white
}

module.exports = {c: c}
