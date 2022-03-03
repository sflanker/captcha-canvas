import { Captcha } from ".";
import { CreateCaptchaOptions } from "./constants";

interface captchaValueSync {
    image: Buffer,
    text: string
}

interface captchaValue {
    image: Buffer,
    text: string
}

/**
 * Create custom captcha from scratch.
 * @async
 * @param {number} width Width of captcha image.
 * @param {number} height Height of captcha image.
 * @param {CreateCaptchaOptions} [option] Captcha text.
 * @returns
 */
export function createCaptcha(width: number, height: number, option: CreateCaptchaOptions = {}): captchaValue {
    const captcha = new Captcha(width, height);
    const decoyCount = Math.floor(width*height/2500);

    if(!option.decoy) option.decoy = {};
    if(!option.decoy.total) option.decoy.total = decoyCount;

    captcha.addDecoy(option.decoy);


    captcha.drawCaptcha(option.captcha);
    const text = captcha.text;

    captcha.drawTrace(option.trace);

    captcha.addDecoy({ opacity: 1 });

    return { image: captcha.png, text: captcha.text };
};
