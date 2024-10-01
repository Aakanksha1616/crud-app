import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { StructuralNgForDirectiveComponent } from './structural-ng-for-directive/structural-ng-for-directive.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataBindingComponent,
    PipeComponent,
    TwoWayDataBindingComponent,
    AssignmentComponent,
    DirectivePracticeComponent,
    StructuralNgForDirectiveComponent,
    NgSwitchExampleComponent,
    AttributeDirectiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
