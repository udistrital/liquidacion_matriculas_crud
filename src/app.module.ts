import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { LiquidacionModule } from './liquidacion/liquidacion.module';
import { environment } from './config/configuration';
import { LiquidacionConceptoModule } from './liquidacion_recibo/liquidacion_recibo.module';
import { LiquidacionDescuentoModule } from './liquidacion_detalle/liquidacion_detalle.module';

@Module({
  imports: [
    LiquidacionModule,
    LiquidacionConceptoModule,
    LiquidacionDescuentoModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://jared:123456789@localhost:27017/',{
      family:4
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
