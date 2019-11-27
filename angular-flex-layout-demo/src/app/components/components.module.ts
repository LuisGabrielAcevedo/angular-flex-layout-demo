import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example/table-example.component';
import { LayoutAlignComponent } from './layout-align/layout-align.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CommonAppModule } from '../common/common.module';

@NgModule({
  declarations: [TableExampleComponent, LayoutAlignComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    CommonAppModule
  ]
})
export class ComponentsModule { }
