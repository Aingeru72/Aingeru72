import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage, TabRef } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'shoplist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/shoplist/shoplist.module').then(m => m.ShoplistPageModule)
          }
        ]
      },
      {
        path: TabRef.NEVERA,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/fridge/fridge.module').then(m => m.FridgePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: `/tabs/${TabRef.NEVERA}`, // Default open tab2 (center tab)
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: `/tabs/${TabRef.NEVERA}`, // Default open tab2 (center tab)
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
