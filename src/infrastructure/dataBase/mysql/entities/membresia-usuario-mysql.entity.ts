import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {  MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { MembresiaMySqlEntity } from './membresia-mysql.entity';
import { UsuarioMySqlEntity } from './usuario-mysql.entity';

@Entity('Membresia Usuario', { schema: 'public' })
export class MembresiaUsuarioMySqlEntity extends MembresiaUsuarioDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  membresiaUsuarioId: string;

  @OneToOne(() => UsuarioMySqlEntity, (u) => u.membresiaUsuario, {
    cascade: ['insert', 'update' , 'remove'],
    eager: true,
  })
  @JoinColumn()
  usuario?: UsuarioMySqlEntity;

  @ManyToOne(() => MembresiaMySqlEntity, (m) => m.membresiaUsuario, {
    cascade: ['insert', 'update' , 'remove'],
    eager: true,
  })
  @JoinColumn()
  membresia?: MembresiaMySqlEntity;

  @Column({ type: 'datetime' , default: () => 'CURRENT_TIMESTAMP'})
  fecha_creado?: Date | number;

  @Column()
  activo?: boolean;

  
}
