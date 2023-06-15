import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { MensajeCorreoDomainEntity } from 'src/domain/entities/mensaje-correo.entity.domain';

@Entity('nodemailer', { schema: 'public' })
export class NodeMailerMySqlEntity extends MensajeCorreoDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreTo: string;

  @Column()
  emailFrom: string;
  @Column()
  emailTo: string;

  @Column()
  nombreFrom: string;

  @Column()
  subject: string;

  @Column()
  body: string;
}
