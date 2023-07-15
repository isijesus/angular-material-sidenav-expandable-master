import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { ViewClientsComponent } from './components/clients/components/view-clients/view-clients.component';
import { ClientsTableComponent } from './components/clients/components/clients-table/clients-table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewProductsComponent } from './components/products/view-products/view-products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ViewProvidersComponent } from './components/providers/view-providers/view-providers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EmailComponent } from './components/email/email.component';
import { NewEmailComponent } from './components/email/new-email/new-email.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ViewOrdersComponent } from './components/orders/view-orders/view-orders.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavWrapperComponent,
    // component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent }, 
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'info', component: InfoComponent },
      { path: 'user', component: UserComponent },
      { path: 'providers', component: ProvidersComponent },
      { path: 'providers/:id', component: ViewProvidersComponent },
      { path: 'providers/new', component: ViewProvidersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ViewProductsComponent },
      { path: 'products/new', component: ViewProductsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/:id', component: ViewClientsComponent },
      { path: 'clients/new', component: ViewClientsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:id', component: ViewClientsComponent },
      { path: 'orders/new', component: ViewClientsComponent },
      { path: 'purchases', component: PurchasesComponent },
      { path: 'purchases/:id', component: ViewOrdersComponent },
      { path: 'purchases/new', component: ViewOrdersComponent },
      { path: 'email', component: EmailComponent },
      { path: 'email/new', component: NewEmailComponent },
    ]
  },
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
