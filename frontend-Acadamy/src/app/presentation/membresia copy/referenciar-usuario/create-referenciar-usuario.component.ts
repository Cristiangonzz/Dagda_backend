import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-referenciar-usuario',
  templateUrl: './create-referenciar-usuario.component.html',
  styleUrls: ['./create-referenciar-usuario.component.css'],
})
export class CreateReferenciarUsuarioComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    //hay que guardar el id del referente en el localstorage para que despues de que se loge por si no tiene cuenta 
    localStorage.setItem(
      'referente',
      this.activatedRoute.snapshot.params['id']!
    );
    this.router.navigate([`/home`]);
  }
}
