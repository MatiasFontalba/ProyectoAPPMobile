import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerContraseniaPageRoutingModule } from './restablecer-contrasenia-routing.module';

import { RestablecerContraseniaPage } from './restablecer-contrasenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerContraseniaPageRoutingModule
  ],
  declarations: [RestablecerContraseniaPage]
})
export class RestablecerContraseniaPageModule {}
