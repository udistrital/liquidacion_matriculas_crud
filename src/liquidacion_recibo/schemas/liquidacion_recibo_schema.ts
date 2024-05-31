import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'liquidacion_recibo' })
export class LiquidacionRecibo extends Document {



    @Prop({ required: false })
    recibo_id: string;

    @Prop({ required: true })
    activo: boolean

    @Prop({ required: true })
    fecha_creacion: Date

    @Prop({ required: true })
    fecha_modificacion: Date

    @Prop({ required: true })
    liquidacion_id: string

}

export const SchemaLiquidacionConcepto = SchemaFactory.createForClass(LiquidacionRecibo);