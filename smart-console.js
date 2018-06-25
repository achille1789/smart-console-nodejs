/*
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2018, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

const reset = '\x1b[0m';
const nodeV = process.version.split('.');
const colors = {
    K: 30,  // black
    R: 31,  // red
    G: 32,  // green
    Y: 33,  // yellow
    B: 34,  // blue
    M: 35,  // magenta
    C: 36,  // cyan
    W: 37   // white
};
const styles = {
    b: 1,   // bold
    f: 2,   // faint
    u: 4,   // underline
    l: 5,   // blink
    n: 7,   // negative
    h: 8    // hidden
};
const cb = () => '';
const setStyle = (...value) => {
    let style = '';
    for (const s of value) {
        style += `\x1b[${s}m`;
    }
    return style;
};
const path = () => {
    let stack = new Error().stack;
    let regex = /\(.*\/.*\)/g;
    let match;
    while (match = regex.exec(stack)) {
        if (!match[0].includes('smart-console')) {
            let path = match[0].split(':');
            return `[File: ${path[0].substring(1)}] [Line: ${path[1]}:${path[2].slice(0, -1)}] `;
        }
    }
    return '[File: not found] [Line: not found] ';
};
const logger = (getPath, ...style) => {
    return (text, ...extraParams) => console.log(setStyle(...style) + getPath() + text, ...extraParams, reset);
};
const c = {
    a: (...extraParams) => console.assert(...extraParams),                      // console.assert(...params)
    dir: (object, optObj) => console.dir(object, optObj),                       // console.dir(object, [optObj])
    cl: () => console.log('console.clear() needs at least node v8.3.0'),        // console.clear()
    c: (label) => console.log('console.count() needs at least node v8.3.0'),    // console.count([label])
    cr: (label) => console.log('console.countReset() needs at least node v8.3.0'), // console.countReset([label])
    e: (text, ...extraParams) => console.error(setStyle(31) + text, ...extraParams, reset), // console.error(text, [...extraParams])
    i: (text, ...extraParams) => console.warn(setStyle(36) + text, ...extraParams, reset),  // console.info(text, [...extraParams])
    l: (text, ...extraParams) => console.log(text, ...extraParams),             // console.log(text, [...extraParams])
    t: (label) => label ? console.time(label) : console.time(),                 // console.time([label])
    te: (label) => label ? console.timeEnd(label) : console.timeEnd(),          // console.timeEnd([label])
    tr: (...extraParams) => console.trace(...extraParams),                      // console.trace([text], [...params])
    w: (text, ...extraParams) => console.warn(setStyle(33) + text, ...extraParams, reset),  // console.warn(text, [...extraParams])
    j: (object, space = 4) => console.log(JSON.stringify(object, null, space)), // console.log(object, [space]) - for logging JSON objects
    v: (text, ...extraParams) => console.log(path() + text, ...extraParams)     // time + file path + console.log()
};

// node version >= 8.3.0
if (Number(nodeV[0].substring(1)) >= 8 && Number(nodeV[1]) >= 3) {
    c.cl = () => console.clear(),                                               // console.clear()
    c.c = (label) => label ? console.count(label) : console.count(),            // console.count([label])
    c.cr = (label) => label ? console.countReset(label) : console.countReset()  // console.countReset([label])
}
for (const [i, e] of Object.entries(styles)) {
    // log() style formatting
    c[`l${i}`] = logger(cb, e);
    c[`v${i}`] = logger(path, e);
}
for (const [i, e] of Object.entries(colors)) {
    // log() colors
    c[`l${i}`] = logger(cb, e);
    c[`v${i}`] = logger(path, e);
    // log() bold + colors
    c[`lb${i}`] = logger(cb, styles.b, e);
    c[`vb${i}`] = logger(path, styles.b, e);
    // log() underline + bold + colors
    c[`lu${i}`] = logger(cb, styles.u, styles.b, e);
    c[`vu${i}`] = logger(path, styles.u, styles.b, e);
    // log() blink + bold + colors
    c[`ll${i}`] = logger(cb, styles.l, styles.b, e);
    c[`vl${i}`] = logger(path, styles.l, styles.b, e);
    // log() bold + background colors
    c[`l${i}BG`] = logger(cb, styles.b, e + 10);
    c[`v${i}BG`] = logger(path, styles.b, e + 10);
}

module.exports = { c };
