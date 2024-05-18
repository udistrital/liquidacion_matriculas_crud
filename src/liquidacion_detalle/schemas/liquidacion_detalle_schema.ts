import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'liquidacion_detalle' })
export class LiquidacionDetalle extends Document {



    @Prop({ required: true })
    tipo_concepto_id: number;

    @Prop({ required: true })
    concepto_id: number;

    @Prop({ required: true })
    valor: number;

    @Prop({ required: true })
    activo: boolean;

    @Prop({ required: true })
    fecha_creacion: Date;

    @Prop({ required: true })
    fecha_modificacion: Date

    @Prop({ required: true })
    liquidacionbid: string

}

export const SchemaLiquidacionDescuento = SchemaFactory.createForClass(LiquidacionDetalle);