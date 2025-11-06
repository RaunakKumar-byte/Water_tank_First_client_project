import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing-module';
import { Pages } from './pages';
import { Home } from './home/home';
import { BookingForm } from './booking-form/booking-form';
import { Confirmation } from './confirmation/confirmation';
import { Contact } from './contact/contact';
import { MyBookings } from './my-bookings/my-bookings';


@NgModule({
  declarations: [
    Pages,
    Home,
    BookingForm,
    Confirmation,
    Contact,
    MyBookings
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
