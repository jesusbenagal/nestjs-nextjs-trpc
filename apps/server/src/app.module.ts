import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TrpcModule } from '@server/trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
