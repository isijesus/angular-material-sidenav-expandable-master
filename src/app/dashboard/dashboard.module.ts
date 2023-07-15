import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsTableComponent } from './components/clients/components/clients-table/clients-table.component';
import { ViewClientsComponent } from './components/clients/components/view-clients/view-clients.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ProductsComponent } from './components/products/products.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductsTableComponent } from './components/products/products-table/products-table.component';
import { ViewProductsComponent } from './components/products/view-products/view-products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ProvidersTableComponent } from './components/providers/providers-table/providers-table.component';
import { ViewProvidersComponent } from './components/providers/view-providers/view-providers.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { EmailComponent } from './components/email/email.component';
import { NewEmailComponent } from './components/email/new-email/new-email.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { PurchasesTableComponent } from './components/purchases/purchases-table/purchases-table.component';
import { ViewOrdersComponent } from './components/orders/view-orders/view-orders.component';
import { ViewPurchasesComponent } from './components/purchases/view-purchases/view-purchases.component';
import { LoginComponent } from './components/login/login.component';
import { EmailEditorModule } from 'angular-email-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [LoginComponent, SidenavWrapperComponent, DashboardComponent, InfoComponent, UserComponent, ClientsComponent, ClientsTableComponent, ViewClientsComponent, ProductsComponent, ProductsTableComponent, ViewProductsComponent, ProvidersComponent, OrdersComponent, PurchasesComponent, ProvidersTableComponent, ViewProvidersComponent, SummaryComponent, OrdersTableComponent, EmailComponent, NewEmailComponent, PurchasesTableComponent, ViewOrdersComponent, ViewPurchasesComponent, LoginComponent],
  imports: [
    CommonModule,

    DashboardRoutingModule,
    EmailEditorModule,
    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    // FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule,
    MatStepperModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    
  ]
})
export class DashboardModule { }
