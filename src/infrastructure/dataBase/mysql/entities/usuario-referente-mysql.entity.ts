import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';

@Entity('usuarioReferencia', { schema: 'public' })
export class UsuarioReferenciaMySqlEntity extends  UsuarioReferenciaDomainEntity{
  @PrimaryGeneratedColumn('uuid')
  usuarioReferenciaId: string;
  
  @Column()
  usu_referente: string;

  @Column({unique: true})
  usu_referido: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  fecha_referencia?: Date;
}
