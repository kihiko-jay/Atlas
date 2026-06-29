import { Controller, Get } from '@nestjs/common';

const API_VERSION = '0.1.0';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'atlas-api',
      version: API_VERSION,
    };
  }
}
