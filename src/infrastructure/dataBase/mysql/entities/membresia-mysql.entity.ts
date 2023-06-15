import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { MembresiaUsuarioMySqlEntity } from './membresia-usuario-mysql.entity';

@Entity('membresia', { schema: 'public' })
export class MembresiaMySqlEntity extends MembresiaDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  membresiaId: string;

  @Column({unique: true})
  nombre?: string;

  @Column()
  vigente?: boolean;

  @Column()
  puede_referenciar?: boolean;

  @Column()
  costo?: number;

  @OneToMany(
    () => MembresiaUsuarioMySqlEntity,
    (sub) => sub.membresia,
  )
  membresiaUsuario?: MembresiaUsuarioMySqlEntity[];

}
