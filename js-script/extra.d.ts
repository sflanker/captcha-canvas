/// <reference types="node" />
import { CreateCaptchaOptions } from "./constants";
interface captchaValue {
    image: Buffer;
    text: string;
}
/**
 * Create custom captcha from scratch.
 * @async
 * @param {number} width Width of captcha image.
 * @param {number} height Height of captcha image.
 * @param {CreateCaptchaOptions} [option] Captcha text.
 * @returns
 */
export declare function createCaptcha(width: number, height: number, option?: CreateCaptchaOptions): captchaValue;
export {};
