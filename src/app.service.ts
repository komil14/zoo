import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public getDetail(): string {
    return 'This is the detail information.';
  }
}
