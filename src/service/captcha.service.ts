import { Provide } from '@midwayjs/core';
import path = require('path');
import { IUserOptions } from '../interface';
import createPuzzle from '../tool';
import * as fs from 'fs';

@Provide()
export class CaptchaService {
  async get() {
    const imageRes = await createPuzzle(
      path.join(__dirname, '../../docs/sunflower.jpg'),
      {
        bg: fs.createWriteStream(path.join(__dirname, 'bg.jpg')),
        puzzle: fs.createWriteStream(path.join(__dirname, 'puzzle.png')),
      }
    ).then(res => {
      console.log('res: ', res);
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
