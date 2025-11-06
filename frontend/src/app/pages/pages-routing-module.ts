import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { BookingForm } from './booking-form/booking-form';
import { Confirmation } from './confirmation/confirmation';
import { Contact } from './contact/contact';
import { MyBookings } from './my-bookings/my-bookings';

const routes: Routes = [
    { path: "", component: Home },
  { path: "booking", component: BookingForm },
  { path: "confirmation", component: Confirmation },
  { path: "my-bookings", component: MyBookings },
  { path: "contact", component: Contact },
  { path: "**", redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
