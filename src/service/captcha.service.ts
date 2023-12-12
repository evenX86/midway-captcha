import { Provide } from '@midwayjs/core';
import path = require('path');
import { IUserOptions } from '../interface';
import createPuzzle from '../tool';

@Provide()
export class CaptchaService {
  async get() {
    const imageRes = await createPuzzle(
      path.join(__dirname, '../../resource/sunflower.jpg')
    ).then(res => {
      return res;
    });

    return imageRes;
  }

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
