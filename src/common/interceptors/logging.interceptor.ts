import { IncomingMessage } from 'http';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const now = Date.now();
    const msg = context.getArgByIndex<IncomingMessage>(0);
    return next.handle().pipe(tap(() => console.log(msg.method, msg.url, `took ${Date.now() - now}ms`)));
  }
}
