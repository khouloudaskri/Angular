import { article } from './../core/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  listeArticles:article[]=[];
  titre="Les articles du jour";
  i=0;
  nombreArticles(){
    this.listeArticles.forEach(() => {  this.i++;
});
  }
  
  ngOnInit(): void {
    this.listeArticles=[
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'}, 
      {titre:'Les nouveauxparents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
    ]
    this.nombreArticles();
  }

 
}
