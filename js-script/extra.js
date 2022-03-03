"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCaptcha = void 0;
const _1 = require(".");
/**
 * Create custom captcha from scratch.
 * @async
 * @param {number} width Width of captcha image.
 * @param {number} height Height of captcha image.
 * @param {CreateCaptchaOptions} [option] Captcha text.
 * @returns
 */
function createCaptcha(width, height, option = {}) {
    const captcha = new _1.Captcha(width, height);
    const decoyCount = Math.floor(width * height / 2500);
    if (!option.decoy)
        option.decoy = {};
    if (!option.decoy.total)
        option.decoy.total = decoyCount;
    captcha.addDecoy(option.decoy);
    captcha.drawCaptcha(option.captcha);
    const text = captcha.text;
    captcha.drawTrace(option.trace);
    captcha.addDecoy({ opacity: 1 });
    return { image: captcha.png, text: captcha.text };
}
exports.createCaptcha = createCaptcha;
;
