import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { SearchPipe } from './search.pipe';
import { SharedModule } from './shared/shared.module';
console.log('app module calling........');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    TestComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    PipeComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
