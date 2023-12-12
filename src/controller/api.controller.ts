import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { CaptchaService } from '../service/captcha.service';

@Controller('/captcha')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  captchaService: CaptchaService;

  @Get('/get')
  async get() {
    const res = await this.captchaService.get();
    return { success: true, message: 'OK', data: res };
  }

  @Get('/check')
  async check() {
    const res = await this.captchaService.check();
    return { success: true, message: 'OK', data: res };
  }
}
