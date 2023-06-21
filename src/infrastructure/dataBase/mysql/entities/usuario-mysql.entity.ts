import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MembresiaUsuarioMySqlEntity } from './membresia-usuario-mysql.entity';
import { IncripcionMySqlEntity } from './incripcion-mysql.entity';

@Entity('usuario', { schema: 'public' })
export class UsuarioMySqlEntity extends UsuarioDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  usuarioId: string;

  @Column()
  primer_nombre?: string;

  @Column()
  segundo_nombre?: string;

  @Column()
  primer_apellido?: string;

  @Column()
  segundo_apellido?: string;

  @Column()
  cod_telefono?: string;

  @Column({unique: true})
  telefono?: string;

  @Column({unique: true})
  usuario?: string;
  
  @Column()
  foto?: string;

  @Column()
  tipo_usuario?: number;
  
  @Column()
  clave?: string;

  @Column()
  usuario_verificado?: number;

  @Column({unique: true})
  email?: string;

  @Column()
  vigente?: boolean;

  @OneToOne(
    () => MembresiaUsuarioMySqlEntity,
    (sub) => sub.usuario,
  )
  membresiaUsuario?: MembresiaUsuarioMySqlEntity;


  @OneToMany(
    () => IncripcionMySqlEntity,
    (sub) => sub.usuario,
  )
  incripcion?: IncripcionMySqlEntity[];
  


}
