import { Injectable } from '@nestjs/common';
import { UpdateContentGenreDto } from './dto/update-content-genre.dto';
import { CreateContentGenresDto } from './dto/create-content-genre.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentGenreService {
  constructor(private readonly prisma: PrismaService) {}
  create(createContentGenreDto: CreateContentGenresDto) {
    return this.prisma.contentGenres.create({
      data: createContentGenreDto,
    })
  }

  findAll() {
    return this.prisma.contentGenres.findMany()
  }

  findOne(id: number) {
    return this.prisma.contentGenres.findUnique({
      where: {id}
    })
  }

  update(id: number, updateContentGenreDto: UpdateContentGenreDto) {
    return this.prisma.contentGenres.update({
      where: {id},
      data:updateContentGenreDto
    })
  }

  remove(id: number) {
    return this.prisma.contentGenres.delete({
      where:{id}
    })
  }
}
