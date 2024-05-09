import { Module } from '@nestjs/common';
import { LiquidacionService } from './liquidacion.service';
import { LiquidacionController } from './liquidacion.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Liquidacion, SchemaLiquidacion } from './schemas/liquidacion.schemas';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Liquidacion.name, schema: SchemaLiquidacion }])
  ],
  providers: [LiquidacionService],
  controllers: [LiquidacionController]
})
export class LiquidacionModule { }
