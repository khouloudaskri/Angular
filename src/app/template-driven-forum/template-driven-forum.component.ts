import { driven } from './../core/driven';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forum',
  templateUrl: './template-driven-forum.component.html',
  styleUrls: ['./template-driven-forum.component.css']
})
export class TemplateDrivenForumComponent implements OnInit {
  Driven!:driven;
  titre1="Informations générales ";
  titre2="Informations de payement ";
 constructor() { }

 ngOnInit(): void {
   this.Driven= new driven();
   
 }
   ajouter(){
     console.log(this.Driven)
   }
 


}
