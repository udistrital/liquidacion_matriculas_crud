import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { LiquidacionReciboService } from './liquidacion_recibo.service';
import { ApiTags } from '@nestjs/swagger';
import { LiquidacionaReciboDto } from './dto/liquidacion_recibo';
import { FilterDto } from 'src/filters/dto/filter.dto';



@ApiTags('liquidacion-recibo')
@Controller('liquidacion-recibo')
export class LiquidacionConceptoController {

    constructor(private liquidacionReciboService: LiquidacionReciboService) { }

    @Post()
    async post(@Res() res, @Body() dto: LiquidacionaReciboDto) {
        const tipoPlan = await this.liquidacionReciboService.post(dto);
        if (tipoPlan instanceof Error) {
            return res.status(HttpStatus.OK).json({
                Data: null,
                Message: tipoPlan.message,
                Status: "400",
                Success: false
            });
        } else {
            return res.status(HttpStatus.OK).json({
                Data: tipoPlan,
                Message: "Registration successfull",
                Status: "201",
                Success: true
            });
        }
    }

    @Get()
    async getAll(@Res() res, @Query() dto: FilterDto) {
        const tipoPlan = await this.liquidacionReciboService.getAll(dto);
        res.status(HttpStatus.OK).json(
            {
                Data: tipoPlan,
                Message: "Request succesfull",
                Status: "200",
                Success: true
            });
    }

    @Get('/:id')
    async get(@Res() res, @Param('id') id: string) {
  
      const tipoPlan = await this.liquidacionReciboService.getById(id);
      res.status(HttpStatus.OK).json(
        {
          Data: tipoPlan ? tipoPlan : null,
          Message: "Request succesfull",
          Status: "200",
          Success: true
        });
    }

    @Get('/recibo/:liquidacion_id')
    async getByLiquidacionId(@Res() res, @Param('liquidacion_id') id: string) {
  
      const tipoPlan = await this.liquidacionReciboService.getByLiquidacionId(id);
      res.status(HttpStatus.OK).json(
        {
          Data: tipoPlan ? tipoPlan : null,
          Message: "Request succesfull",
          Status: "200",
          Success: true
        });
    }

    
  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() dto:LiquidacionaReciboDto) {

    const tipoPlan = await this.liquidacionReciboService.put(id, dto);
    //if (!tipoPlan) throw new NotFoundException("not found resource");    
    if (tipoPlan instanceof Error) {
      return res.status(HttpStatus.OK).json({
        Data: null,
        Message: tipoPlan.message,
        Status: "400",
        Success: false
      });
    } else {
      return res.status(HttpStatus.OK).json({
        Data: tipoPlan,
        Message: "Update successfull",
        Status: "200",
        Success: true
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const tipoPlan = await this.liquidacionReciboService.getById(id);


    if (tipoPlan) {
      tipoPlan.activo = false

      const respuesta = await this.liquidacionReciboService.put(id, tipoPlan);
      if (respuesta instanceof Error) {
        return res.status(HttpStatus.OK).json({
          Data: null,
          Message: respuesta.message,
          Status: "400",
          Success: false
        });
      } else {
        return res.status(HttpStatus.OK).json({
          Data: respuesta,
          Message: "Delete successfull",
          Status: "200",
          Success: true
        });
      }
    } else {
      return res.status(HttpStatus.OK).json({
        Data: null,
        Message: "Record Not found",
        Status: "404",
        Success: true
      });
    }
  }


}
