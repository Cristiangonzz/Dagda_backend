import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CursoDelegate } from 'src/application/delegates/curso.delegate';
import { CursoService } from '../services/curso.service';
import { CategoriaService } from '../services/categoria.service';
import { CrearCursoDto } from '../dto/create/create-curso.dto';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { UpdateCursoDto } from '../dto/create/update-curso.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
const path = require('path');
import { dirname, extname, join } from 'path';
@ApiTags('curso')
@Controller('curso')
export class CursoController {
  private readonly useCase: CursoDelegate;
  constructor(
    private readonly cursoService: CursoService,
    private readonly categoriaService: CategoriaService
    ) {
    this.useCase = new CursoDelegate(this.cursoService,this.categoriaService);
  }

  @ApiOperation({ summary: 'create  curso' })
  @Post('/create')
  createCurso(
    @Body() curso: CrearCursoDto,
  ): Observable<CursoDomainEntity> {
    this.useCase.toCreateCurso();
    return this.useCase.execute(curso);

  } 
  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './images',
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    }),
    limits: {
      fileSize: 100 * 1024 * 1024, // Tamaño máximo del archivo: 100 MB
      files: 1, // Número máximo de archivos permitidos: 1
    },
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(JPG|jpg|jpeg|JPEG|png|PNG|GIF|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
      }
      cb(null, true);
    },
  }))
  uploadImage(@UploadedFile() file) {
    console.log(file)
    const dato = "http://localhost:3000/"+file.path;
    return { filename: dato };
  
  }

  @Get('images/:filename')
  getImage(@Param('filename') filename: string, @Res() res: Response) {
    // const imagePath = path.resolve(`./images`,filename);
    // res.sendFile(imagePath);
    console.log(res.sendFile(filename, { root: './images' }))
    res.sendFile(filename, { root: './images' });
  }


  @ApiOperation({ summary: 'update  Curso' })
  @Put('update/:titulo')
  updateCurso(
    @Param('titulo') titulo: string,
    @Body() newCurso: UpdateCursoDto,
  ): Observable<CursoDomainEntity> {
    this.useCase.toUpdateCurso();
    return this.useCase.execute(titulo, newCurso);
  }

  @ApiOperation({ summary: 'Get Curso' })
  @Get('getId/:id')
  getIdCurso(
    @Param('id') id: string,
  ): Observable<CursoDomainEntity> {
    this.useCase.toFindIdCursos();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'Get Curso' })
  @Get('getTitulo/:titulo')
  getTituloCurso(
    @Param('titulo') titulo: string,
  ): Observable<CursoDomainEntity> {
    this.useCase.toFindTituloCursos();
    return this.useCase.execute(titulo);
  }


  @ApiOperation({ summary: 'Delete  Curso'})
  @Delete('delete/:titulo')
  deleteCurso(@Param('titulo') titulo: string): Observable<boolean> {
    this.useCase.toDeleteCurso();
    return this.useCase.execute(titulo);
  }

  @ApiOperation({ summary: 'find All Curso' })
  @Get()
  findAllCurso(): Observable<CursoDomainEntity[]> {
    this.useCase.toFindAllCursos();
    return this.useCase.execute();
  }
}


