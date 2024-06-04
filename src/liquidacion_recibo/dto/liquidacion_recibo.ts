import { ApiProperty } from '@nestjs/swagger';

export class LiquidacionaReciboDto {



    @ApiProperty()
    readonly recibo_id: string;

    @ApiProperty()
    readonly activo: boolean;

    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

    @ApiProperty()
    liquidacion_id: string;
}