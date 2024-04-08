import { ApiProperty } from '@nestjs/swagger';

export class LiquidacionDto {



    @ApiProperty()
    readonly tercero_id: number;

    @ApiProperty()
    readonly periodo_id: number;

    @ApiProperty()
    readonly programa_academico_id: number;

    @ApiProperty()
    readonly tipo_programa_id: number;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}