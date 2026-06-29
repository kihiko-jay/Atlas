import { Test, type TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('returns the correct health response shape', () => {
    const result = controller.check();

    expect(result).toEqual({
      status: 'ok',
      service: 'atlas-api',
      version: '0.1.0',
    });
  });

  it('returns status "ok"', () => {
    const { status } = controller.check();
    expect(status).toBe('ok');
  });

  it('identifies the service as "atlas-api"', () => {
    const { service } = controller.check();
    expect(service).toBe('atlas-api');
  });
});
