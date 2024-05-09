import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'liquidacion' })
export class Liquidacion extends Document {


    @Prop({ required: false })
    tercero_id: number;

    @Prop({ required: false })
    periodo_id: number;

    @Prop({ required: false })
    programa_academico_id: number;

    @Prop({ required: false })
    tipo_programa_id: number;

    @Prop({ required: true })
    activo: boolean

    @Prop({ required: true })
    fecha_creacion: Date

    @Prop({ required: true })
    fecha_modificacion: Date

}

export const SchemaLiquidacion = SchemaFactory.createForClass(Liquidacion);