/*!
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2017, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

// console object
var c = {
    a: (...extraParam) => console.assert(...extraParam),                    // console.assert()
    dir: (param) => console.dir(param),                                     // console.dir() - non-standard method
    e: (text, ...extraParam) => console.error(text, ...extraParam),         // console.error()
    i: (text, ...extraParam) => console.info(text, ...extraParam),          // console.info()
    l: (text, ...extraParam) => console.log(text, ...extraParam),           // console.log()
    p: (param) => param ? console.profile(param) : console.profile(),       // console.profile()
    pe: () => console.profileEnd(),                                         // console.profileEnd()
    t: (param) => param ? console.time(param) : console.time(),             // console.time()
    te: (param) => param ? console.timeEnd(param) : console.timeEnd(),      // console.timeEnd()
    w: (text, ...extraParam) => console.warn(text, ...extraParam),          // console.warn()
    j: (object, space) => console.log(JSON.stringify(object, null, space || 4)),    // console.log() - for logging JSON objects

    // log() style formatting
    lb: (text, ...extraParam) => console.log("\x1b[1m" + text + "\x1b[0m", ...extraParam),   // bold
    lf: (text, ...extraParam) => console.log("\x1b[2m" + text + "\x1b[0m", ...extraParam),   // faint
    lu: (text, ...extraParam) => console.log("\x1b[4m" + text + "\x1b[0m", ...extraParam),   // underline
    ll: (text, ...extraParam) => console.log("\x1b[5m" + text + "\x1b[0m", ...extraParam),   // blink
    ln: (text, ...extraParam) => console.log("\x1b[7m" + text + "\x1b[0m", ...extraParam),   // negative
    lh: (text, ...extraParam) => console.log("\x1b[8m" + text + "\x1b[0m", ...extraParam),   // hidden
    // log() colors
    lK: (text, ...extraParam) => console.log("\x1b[30m" + text + "\x1b[0m", ...extraParam),  // black
    lR: (text, ...extraParam) => console.log("\x1b[31m" + text + "\x1b[0m", ...extraParam),  // red
    lG: (text, ...extraParam) => console.log("\x1b[32m" + text + "\x1b[0m", ...extraParam),  // green
    lY: (text, ...extraParam) => console.log("\x1b[33m" + text + "\x1b[0m", ...extraParam),  // yellow
    lB: (text, ...extraParam) => console.log("\x1b[34m" + text + "\x1b[0m", ...extraParam),  // blue
    lM: (text, ...extraParam) => console.log("\x1b[35m" + text + "\x1b[0m", ...extraParam),  // magenta
    lC: (text, ...extraParam) => console.log("\x1b[36m" + text + "\x1b[0m", ...extraParam),  // cyan
    lW: (text, ...extraParam) => console.log("\x1b[37m" + text + "\x1b[0m", ...extraParam),  // white
    // log() bold + colors
    lbK: (text, ...extraParam) => console.log("\x1b[1m\x1b[30m" + text + "\x1b[0m", ...extraParam),  // black
    lbR: (text, ...extraParam) => console.log("\x1b[1m\x1b[31m" + text + "\x1b[0m", ...extraParam),  // red
    lbG: (text, ...extraParam) => console.log("\x1b[1m\x1b[32m" + text + "\x1b[0m", ...extraParam),  // green
    lbY: (text, ...extraParam) => console.log("\x1b[1m\x1b[33m" + text + "\x1b[0m", ...extraParam),  // yellow
    lbB: (text, ...extraParam) => console.log("\x1b[1m\x1b[34m" + text + "\x1b[0m", ...extraParam),  // blue
    lbM: (text, ...extraParam) => console.log("\x1b[1m\x1b[35m" + text + "\x1b[0m", ...extraParam),  // magenta
    lbC: (text, ...extraParam) => console.log("\x1b[1m\x1b[36m" + text + "\x1b[0m", ...extraParam),  // cyan
    lbW: (text, ...extraParam) => console.log("\x1b[1m\x1b[37m" + text + "\x1b[0m", ...extraParam),  // white
    // log() underline + bold + colors
    luK: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[30m" + text + "\x1b[0m", ...extraParam),  // black
    luR: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[31m" + text + "\x1b[0m", ...extraParam),  // red
    luG: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[32m" + text + "\x1b[0m", ...extraParam),  // green
    luY: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[33m" + text + "\x1b[0m", ...extraParam),  // yellow
    luB: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[34m" + text + "\x1b[0m", ...extraParam),  // blue
    luM: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[35m" + text + "\x1b[0m", ...extraParam),  // magenta
    luC: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[36m" + text + "\x1b[0m", ...extraParam),  // cyan
    luW: (text, ...extraParam) => console.log("\x1b[4m\x1b[1m\x1b[37m" + text + "\x1b[0m", ...extraParam),  // white
    // log() blink + bold + colors
    llK: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[30m" + text + "\x1b[0m", ...extraParam),  // black
    llR: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[31m" + text + "\x1b[0m", ...extraParam),  // red
    llG: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[32m" + text + "\x1b[0m", ...extraParam),  // green
    llY: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[33m" + text + "\x1b[0m", ...extraParam),  // yellow
    llB: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[34m" + text + "\x1b[0m", ...extraParam),  // blue
    llM: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[35m" + text + "\x1b[0m", ...extraParam),  // magenta
    llC: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[36m" + text + "\x1b[0m", ...extraParam),  // cyan
    llW: (text, ...extraParam) => console.log("\x1b[5m\x1b[1m\x1b[37m" + text + "\x1b[0m", ...extraParam),  // white
    // log() bold + background colors
    lKBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[40m" + text + "\x1b[0m", ...extraParam),  // black
    lRBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[41m" + text + "\x1b[0m", ...extraParam),  // red
    lGBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[42m" + text + "\x1b[0m", ...extraParam),  // green
    lYBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[43m" + text + "\x1b[0m", ...extraParam),  // yellow
    lBBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[44m" + text + "\x1b[0m", ...extraParam),  // blue
    lMBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[45m" + text + "\x1b[0m", ...extraParam),  // magenta
    lCBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[46m" + text + "\x1b[0m", ...extraParam),  // cyan
    lWBG: (text, ...extraParam) => console.log("\x1b[1m\x1b[47m" + text + "\x1b[0m", ...extraParam),  // white
};

// process object
const p = {
    a: () => process.abort(),
    cpu: (param) => param ? process.cpuUsage(param) : process.cpuUsage(),
    cwd: () => process.cwd(),
    h: (param) => param ? process.hrtime(param) : process.hrtime(),
    mu: () => process.memoryUsage(),
    ut: () => process.uptime(),
};

module.exports = {
    c: c,
    p: p,
}
