import { Component } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {

  listeEmploi:Emploi[]=[];
  nombreOffre!:number
  searchtext!:string
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference: '1', titre: "Software ",entreprise:"Sagemcom", etat:true},
      {reference: '2', titre: "Développeur",entreprise:"EY", etat:true},
      {reference: '3', titre: "ChefDeProjet",entreprise:"InstaDeep", etat:false}
    ]

  }
 
  bilan(){
    this.nombreOffre=0
    for (let i =0;i<this.listeEmploi.length;i++)
    {
      if(this.listeEmploi[i].etat==true)
      this.nombreOffre++
    }
  }

  chercher(){
    this.listeEmploi=this.listeEmploi.filter(
      (listeemploiChercher)=>listeemploiChercher.entreprise.match(this.searchtext)
      
    )

  }
}
