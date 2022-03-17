import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CustomersPage],
})
export class CustomersPageModule {}
