import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';

@Entity('usuario referente', { schema: 'public' })
export class UsuarioReferenciaMySqlEntity extends  UsuarioReferenciaDomainEntity{
  @PrimaryGeneratedColumn('uuid')
  usuarioReferenciaId: string;
  
  @Column()
  usuarioReferente?: string;

  @Column()
  usuario_referido?: number;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  fecha_referencia?: Date;
}
