import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeraPaginaPage } from './primera-pagina';

@NgModule({
  declarations: [
    PrimeraPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeraPaginaPage),
  ],
})
export class PrimeraPaginaPageModule {}
