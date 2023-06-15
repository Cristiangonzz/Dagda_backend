import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategoriaEntityDomain } from 'src/domain/entities/sub-categoria.entity.domain';
import { CategoriaMySqlEntity } from './categoria-mysql.entity';

@Entity('subCategoria', { schema: 'public' })
export class SubCategoriaMySqlEntity extends SubCategoriaEntityDomain {
  @PrimaryGeneratedColumn('uuid')
  subCategoriaId?: string;

  @Column({unique: true})
  nombre?: string;
  @Column()
  vigente?: boolean;
 

  @ManyToMany(
    () => CategoriaMySqlEntity,
    (categoria) => categoria.sub_categoria,
    {
      cascade:['insert','update' , 'remove']
    }
  )
  @JoinColumn()
  categoria?: CategoriaMySqlEntity;
}

