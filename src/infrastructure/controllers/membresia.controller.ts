import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MembresiaDelegate } from 'src/application/delegates/membresia.delegate';
import { MembresiaService } from '../services/membresia.service';
import { CrearMembresiaDto } from '../dto/create/create-membresia.dto';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { UpdateMembresiaDto } from '../dto/create/update-membresia.dto';

@ApiTags('membresia')
@Controller('membresia')
export class MembresiaController {
  private readonly useCase: MembresiaDelegate;
  constructor(
    private readonly membresiaService: MembresiaService,
    ) {
    this.useCase = new MembresiaDelegate(this.membresiaService);
  }

  @ApiOperation({ summary: 'create  Membresia' })
  @Post()
  createMembresia(
    @Body() newMembresia: CrearMembresiaDto,
  ): Observable<MembresiaDomainEntity> {
    this.useCase.toCreateMembresia();
    return this.useCase.execute(newMembresia);
  }

  @ApiOperation({ summary: 'update  Membresia' })
  @Put('update/:nombre')
  updateMembresia(
    @Param('nombre') nombre: string,
    @Body() newMembresia: UpdateMembresiaDto,
  ): Observable<MembresiaDomainEntity> {
    this.useCase.toUpdateMembresia();
    return this.useCase.execute(nombre, newMembresia);
  }

  @ApiOperation({ summary: 'Get Id Membresia' })
  @Get('getId/:id')
  getIdMembresia(
    @Param('id') id: string,
  ): Observable<MembresiaDomainEntity> {
    this.useCase.toFindIdMembresia();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'Get Email Membresia' })
  @Get('getNombre/:nombre')
  getNombreMembresia(
    @Param('nombre') nombre: string,
  ): Observable<MembresiaDomainEntity> {
    this.useCase.toFindNombreMembresia();
    return this.useCase.execute(nombre);
  }


  @ApiOperation({ summary: 'Delete  Membresia'})
  @Delete('delete/:nombre')
  deleteMembresia(@Param('nombre') nombre: string): Observable<boolean> {
    this.useCase.toDeleteMembresia();
    return this.useCase.execute(nombre);
  }

  @ApiOperation({ summary: 'find All Membresia' })
  @Get()
  findAllMembresia(): Observable<MembresiaDomainEntity[]> {
    this.useCase.toFindAllMembresia();
    return this.useCase.execute();
  }
}
