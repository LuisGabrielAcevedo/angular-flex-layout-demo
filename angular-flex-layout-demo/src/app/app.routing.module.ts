import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { LayoutAlignComponent } from './components/layout-align/layout-align.component';

const routes: Routes = [
  { path: '', redirectTo: 'table-example', pathMatch: 'full' },
  {
    path: 'table-example',
    component: TableExampleComponent
  },
  {
    path: 'layout-align',
    component: LayoutAlignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
