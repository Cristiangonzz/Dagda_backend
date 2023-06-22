import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriaMySqlEntity } from './categoria-mysql.entity';
import { IncripcionMySqlEntity } from './incripcion-mysql.entity';
import { IProgramaCursoDomain } from 'src/domain/interfaces/programa-curso.interface.domain';

@Entity('curso', { schema: 'public' })
export class CursoMySqlEntity extends CursoDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  cursoId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creada?: Date;

  @Column({ unique: true })
  titulo: string;
  @Column()
  imagen?: string;
  @Column()
  descripcion?: string;

  @Column()
  detalle?: string;
  @Column()
  precio?: number;
  @Column()
  vigente?: boolean;
  
  @Column({ type: 'json', nullable: true })
  programa?: IProgramaCursoDomain[];
//al hacer la consulta a la base de datos tengo que convertir 
//const programaCurso: IProgramaCursoDomain[] = JSON.parse(curso.programa);

  @ManyToOne(() => CategoriaMySqlEntity, (categoria) => categoria.curso, {
    cascade: ['insert', 'update', 'remove'],
   // eager: true, 
  })
  @JoinColumn({ name: 'categoriaId' })
  categoria: CategoriaMySqlEntity;

  @OneToMany(
    () => IncripcionMySqlEntity,
    (sub) => sub.curso,
  )
  incripcion?: IncripcionMySqlEntity[];
}

//subCategoria?: ISubCategoriaDomain;
