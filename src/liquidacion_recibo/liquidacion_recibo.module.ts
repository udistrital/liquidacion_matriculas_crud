import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LiquidacionConceptoController } from './liquidacion_recibo.controller';
import { LiquidacionReciboService } from './liquidacion_recibo.service';
import { LiquidacionRecibo, SchemaLiquidacionConcepto } from './schemas/liquidacion_recibo_schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: LiquidacionRecibo.name, schema: SchemaLiquidacionConcepto }])
  ],
  controllers: [LiquidacionConceptoController],
  providers: [LiquidacionReciboService],
})
export class LiquidacionConceptoModule {}
