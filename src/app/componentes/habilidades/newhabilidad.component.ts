import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  nombreH: string;
  nivelH: number;

  constructor(private habilidadS: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidad = new Habilidad(this.nombreH, this.nivelH);
    this.habilidadS.save(habilidad).subscribe(
      data =>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }

}