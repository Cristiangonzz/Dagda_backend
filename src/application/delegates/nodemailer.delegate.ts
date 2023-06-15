import { IMensajeCorreoDomain } from "src/domain/interfaces/mensaje-correo.inteface.domain";
import { IUseCase } from "src/domain/interfaces/use-case.interface.domain";
import { INodeMailerDomainService } from "src/domain/services/nodemailer.service.domain";
import { NodeMailerUseCase } from "../useCase/nodemailer.usecase";

export class NodeMailerDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(
    private readonly nodeMailerService: INodeMailerDomainService<IMensajeCorreoDomain>,
   
    ) { }

  execute<Response>(...args: any[]): Promise<Response> {
    return this.delegate.execute(...args);
  }

  toNodeMailer(): void {
    this.delegate = new NodeMailerUseCase(this.nodeMailerService);
  }

 

 
}
