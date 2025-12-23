import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  getHello(): string {
    return 'Hello Dog!';
  }

  introduce(): string {
    return 'I am a Dog!';
  }

  bark(): string {
    return 'Woof! Woof!';
  }

  modifyDog(body: any): string {
    return 'Dog modified!';
  }
}
