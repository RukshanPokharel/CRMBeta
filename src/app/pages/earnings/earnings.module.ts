import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarningsPageRoutingModule } from './earnings-routing.module';

import { EarningsPage } from './earnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarningsPageRoutingModule
  ],
  declarations: [EarningsPage]
})
export class EarningsPageModule {}
