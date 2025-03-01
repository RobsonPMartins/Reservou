import { Route } from '@angular/router';
import { HomeComponent } from './core/services/features/clients/pages/home/home.component';
import { CartComponent } from './core/services/features/clients/pages/cart/cart.component';
import { GerenciarComponent } from './core/services/features/admin/pages/gerenciar/gerenciar.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'admin',
        component: GerenciarComponent, canActivate: [AuthGuard]
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
]
// 