import 'reflect-metadata';
import { type INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppModule (bootstrap)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('bootstraps without error', () => {
    expect(app).toBeDefined();
  });

  it('GET /health returns 200 with correct body', () => {
    return request(app.getHttpServer()).get('/health').expect(200).expect({
      status: 'ok',
      service: 'atlas-api',
      version: '0.1.0',
    });
  });

  it('GET /unknown returns 404', () => {
    return request(app.getHttpServer()).get('/unknown').expect(404);
  });
});
