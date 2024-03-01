import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  { path : "", component:HomeComponent},
  { path: "databinding", component:DatabindingComponent },
  { path: "test" , component : TestComponent},
  { path: 'directive', component : DirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
