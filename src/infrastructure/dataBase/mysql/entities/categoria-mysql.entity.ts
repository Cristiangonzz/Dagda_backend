import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { CursoMySqlEntity } from './curso-mysql.entity';
import { SubCategoriaMySqlEntity } from './sub-categoria-mysql.entity';

@Entity('categoria', { schema: 'public' })
export class CategoriaMySqlEntity extends CategoriaDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  categoriaId: string;

  @Column({ unique: true })
  nombre: string;

  @Column()
  vigente?: boolean;


  @OneToMany(
    () => CursoMySqlEntity,
    (curso) => curso.categoria,
  )
  curso?: CursoMySqlEntity[];

  @ManyToMany(
    () => SubCategoriaMySqlEntity,
    (sub) => sub.categoria,
  )
  sub_categoria?: SubCategoriaMySqlEntity;

}
