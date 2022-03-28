import { DynamicModule, Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { isDev } from 'src/common/constants/common.constants';

@Module({})
export class UiModule {
  static register(): DynamicModule {
    return {
      module: UiModule,
      imports: [RenderModule.forRootAsync(Next({ dev: isDev }), { viewsDir: null })],
    };
  }
}
