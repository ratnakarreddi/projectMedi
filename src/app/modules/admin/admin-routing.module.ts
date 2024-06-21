import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemMasterComponent } from './components/item-master/item-master.component';
import { FooterButtonsComponent } from './components/footer-buttons/footer-buttons.component';
import { ItemTypeComponent } from './components/item-type/item-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UomMasterComponent } from '../../uom-master/uom-master.component';
import { UnitmasterComponent } from '../../unitmaster/unitmaster.component';
import { GstmasterComponent } from '../../gstmaster/gstmaster.component';

const routes: Routes = [
  { path:'',component:AdminDashboardComponent ,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'item-master', component: ItemMasterComponent },
      { path: 'footer-buttons', component: FooterButtonsComponent },
      { path: 'item-type', component: ItemTypeComponent },
      { path: 'uom-master', component: UomMasterComponent },
      { path: 'unit-master', component: UnitmasterComponent },
      { path: 'gst-master', component: GstmasterComponent },


      

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
