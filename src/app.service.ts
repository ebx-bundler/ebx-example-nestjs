import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  database: string;
  constructor(config: ConfigService) {
    this.database = config.get('DATABASE', '');
  }
  getHello(): string {
    return 'Hello World! ' + this.database;
  }
}
