import { Module } from '@nestjs/common';

import { ParamsInterceptor } from './params-interceptor';

@Module({
  controllers: [],
  providers: [ParamsInterceptor],
  exports: [ParamsInterceptor],
})
export class ParamsModule {}
