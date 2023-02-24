import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';
import { TemplateDrivenForumComponent } from './template-driven-forum/template-driven-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    ArticlesComponent,
    TemplateDrivenForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
