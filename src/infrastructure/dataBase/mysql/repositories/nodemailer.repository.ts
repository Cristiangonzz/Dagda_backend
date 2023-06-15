import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { CategoriaMySqlEntity } from '../entities/categoria-mysql.entity';
import { NodeMailerMySqlEntity } from '../entities/nodemailer-mysql.entity';

@Injectable()
export class NodeMailerRepository {
  constructor(
    @InjectRepository(NodeMailerMySqlEntity)
    private readonly NodeMailerRepository: Repository<NodeMailerMySqlEntity>,
  ) {}

  sendMail(data: NodeMailerMySqlEntity): Promise<NodeMailerMySqlEntity>{

    return this.NodeMailerRepository.save(data);
  }

}
