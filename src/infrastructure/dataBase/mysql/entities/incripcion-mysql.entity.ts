import { IncripcionDomainEntity } from 'src/domain/entities/incripcion.entity.domain';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioMySqlEntity } from './usuario-mysql.entity';
import { CursoMySqlEntity } from './curso-mysql.entity';

@Entity('incripcion', { schema: 'public' })
export class IncripcionMySqlEntity extends IncripcionDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  incripcionId: string;

  @ManyToOne(() => CursoMySqlEntity, (m) => m.incripcion, {
    cascade: ['insert', 'update' , 'remove'],
    eager: true,
  })
  @JoinColumn({ name: 'cursoId'})
  curso?: CursoMySqlEntity;

  @ManyToOne(() => UsuarioMySqlEntity, (m) => m.incripcion, {
    cascade: ['insert', 'update' , 'remove'],
    eager: true,
  })
  @JoinColumn({ name: 'usuarioId'})
  usuario?: UsuarioMySqlEntity;


  @Column({ type: 'datetime' , default: () => 'CURRENT_TIMESTAMP'})
  fechaIncripcion?: Date;

  @Column()
  pago?: boolean;

}
