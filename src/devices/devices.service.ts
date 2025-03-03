import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDeviceDto: CreateDeviceDto) {
    return this.prismaService.devices.create({
      data: {
      ...createDeviceDto,
      device_name: createDeviceDto.device_name,
      last_active: createDeviceDto.last_active ?? new Date(),
      },
    });
  }

  findAll() {
    return this.prismaService.devices.findMany();
  }

  findOne(id: number) {
    return this.prismaService.devices.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return this.prismaService.devices.update({
      where: { id },
      data: updateDeviceDto,
    });
  }

  remove(id: number) {
    return this.prismaService.devices.delete({
      where: { id },
    });
  }
}
