import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LiquidacionDescuentoController } from './liquidacion_detalle.controller';
import { LiquidacionDetalleService } from './liquidacion_detalle.service';
import { LiquidacionDetalle, SchemaLiquidacionDescuento } from './schemas/liquidacion_detalle_schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: LiquidacionDetalle.name, schema: SchemaLiquidacionDescuento }])
  ],
  controllers: [LiquidacionDescuentoController],
  providers: [LiquidacionDetalleService]
})
export class LiquidacionDescuentoModule {}
