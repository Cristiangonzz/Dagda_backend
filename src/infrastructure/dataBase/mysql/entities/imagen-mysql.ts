import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('imagen', { schema: 'public' })
export class imagenMySqlEntity {
  @PrimaryGeneratedColumn('uuid')
  imagenId: string;

  @Column({ type: 'blob' }) // Cambiado a tipo 'blob' para almacenar datos binarios
  data: Buffer;

  @Column()
  nombre?: string;
}

//subCategoria?: ISubCategoriaDomain;
