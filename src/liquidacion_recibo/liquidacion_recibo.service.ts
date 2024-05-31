import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LiquidacionRecibo } from './schemas/liquidacion_recibo_schema';
import { LiquidacionaReciboDto } from './dto/liquidacion_recibo';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.services';


@Injectable()
export class LiquidacionReciboService {

    constructor(@InjectModel(LiquidacionRecibo.name) private readonly tipoPlanModel: Model<LiquidacionRecibo>) { }

    async post(dto: LiquidacionaReciboDto): Promise<LiquidacionRecibo> {
        try {
            const liquidacionConcepto = new this.tipoPlanModel(dto);
            liquidacionConcepto.fecha_creacion = new Date();
            liquidacionConcepto.fecha_modificacion = new Date();
            liquidacionConcepto.activo = true;
            await this.tipoPlanModel.validate(liquidacionConcepto);
            return liquidacionConcepto.save();
        } catch (error) {
            return error;
        }
    }

    async getAll(dto: FilterDto): Promise<LiquidacionRecibo[]> {
        const filtersService = new FiltersService(dto);
        return await this.tipoPlanModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy())
            .exec();
    }

    async getById(id: string): Promise<LiquidacionRecibo> {
        try {
            return await this.tipoPlanModel.findById(id).exec();
        } catch (error) {
            return null;
        };
    }

    async getByLiquidacionId(id: string): Promise<LiquidacionRecibo> {
        try {
            return await this.tipoPlanModel.findOne({ 
                liquidacion_id: id,
                activo: true
            }).exec();
        } catch (error) {
            return null;
        };
    }

    async put(id: string, dto: LiquidacionaReciboDto): Promise<LiquidacionRecibo> {
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
