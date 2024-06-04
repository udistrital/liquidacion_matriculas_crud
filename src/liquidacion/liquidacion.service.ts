import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { LiquidacionDto } from './dto/liquidacion';
import { Liquidacion } from './schemas/liquidacion.schemas';
import { FilterDto } from '../filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.services';

@Injectable()
export class LiquidacionService {

    constructor(@InjectModel(Liquidacion.name) private readonly tipoPlanModel: Model<Liquidacion>) {}

    async post( dto: LiquidacionDto): Promise<Liquidacion> {
        try {
            const liquidacion = new this.tipoPlanModel(dto);
            liquidacion.fecha_creacion = new Date();
            liquidacion.fecha_modificacion = new Date();
            liquidacion.activo = true;
            await this.tipoPlanModel.validate(liquidacion);
            return liquidacion.save();
        } catch (error) {
            return error;
        }
    }

    async getAll(dto: FilterDto): Promise<Liquidacion[]> {
        const filtersService = new FiltersService(dto);
        return await this.tipoPlanModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy())
            .exec();
    }

    async getById(id: string): Promise<Liquidacion> {
        try {
            return await this.tipoPlanModel.findById(id).exec();
        } catch (error) {
            return null;
        };
    }

    async getByTerceroId(id: string): Promise<Liquidacion> {
        try {
            return await this.tipoPlanModel.findOne({ 
                tercero_id: id,
                activo: true
            }).exec();
        } catch (error) {
            return null;
        };
    }

    async put(id: string, dto: LiquidacionDto): Promise<Liquidacion> {
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
