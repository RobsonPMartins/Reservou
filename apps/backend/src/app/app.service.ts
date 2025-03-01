import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHealthCheck(): { message: string } {
    return { message: 'API rodando!' };
  }

}
// service