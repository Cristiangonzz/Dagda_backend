import { UsuarioReferenciaDomainEntity } from '../entities/usuario-referencia.entity.domain';
import { BaseService } from './base.service.domain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class UsuarioReferenciaService extends BaseService<UsuarioReferenciaDomainEntity> {}
