import { ApiProperty } from '@nestjs/swagger';

export class LiquidacionDetalleDto {



    @ApiProperty()
    readonly tipo_concepto_id: number;

    @ApiProperty()
    readonly valor: number;

    @ApiProperty()
    readonly activo: boolean;

    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

    @ApiProperty()
    readonly liquidacionbid: number;
}