import { Provide } from '@midwayjs/core';
import path = require('path');
import createPuzzle from '../tool';

@Provide()
export class CaptchaService {
  async get() {
    // todo 随机背景图
    // todo 频控
    // todo 缓存
    const imageRes = await createPuzzle(
      path.join(__dirname, '../../resource/sunflower.jpg')
    ).then(res => {
      return res;
    });

    return imageRes;
  }

  async check() {
    // todo
    return {};
  }


}
