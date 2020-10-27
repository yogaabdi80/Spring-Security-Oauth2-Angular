import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListRoutingModule } from './cart-list-routing.module';
import { CartListComponent } from './cart-list.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProdukService } from '../service/produk.service';


@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CartListRoutingModule,
    MatIconModule,
    MatInputModule
  ], providers:[ProdukService]
})
export class CartListModule { }