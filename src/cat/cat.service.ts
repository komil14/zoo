import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHello(): string {
    return 'Hello Cat!';
  }

  introduce(): string {
    return 'I am a Cat!';
  }
}
