import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LiquidacionDetalle } from './schemas/liquidacion_detalle_schema';
import { LiquidacionDetalleDto } from './dto/liquidacion_detalle';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.services';




@Injectable()
export class LiquidacionDetalleService {

    constructor(@InjectModel(LiquidacionDetalle.name) private readonly tipoPlanModel: Model<LiquidacionDetalle>) {}

    async post( dto: LiquidacionDetalleDto): Promise<LiquidacionDetalle> {
        try {
            const liquidacionDescuento = new this.tipoPlanModel(dto);
            liquidacionDescuento.fecha_creacion = new Date();
            liquidacionDescuento.fecha_modificacion = new Date();
            liquidacionDescuento.activo = true;
            await this.tipoPlanModel.validate(liquidacionDescuento);
            return liquidacionDescuento.save();
        } catch (error) {
            return error;
        }
    }

    async getAll(dto: FilterDto): Promise<LiquidacionDetalle[]> {
        const filtersService = new FiltersService(dto);
        return await this.tipoPlanModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy())
            .exec();
    }

    async getById(id: string): Promise<LiquidacionDetalle> {
        try {
            return await this.tipoPlanModel.findById(id).exec();
        } catch (error) {
            return null;
        };
    }

    async put(id: string, dto: LiquidacionDetalleDto): Promise<LiquidacionDetalle> {
        try {
            dto.fecha_modificacion = new Date();
            await this.tipoPlanModel.validate(dto);
            await this.tipoPlanModel.findByIdAndUpdate(id, dto, { new: true }).exec();
            return await this.tipoPlanModel.findById(id).exec();
        } catch (error) {
            return error;
        }

    }

    async delete(id: string): Promise<any> {
        try {
        //    return await this.tipoPlanModel.findByIdAndRemove(id).exec();
        } catch (error) {
            return null;
        }

    }


}
