import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CoreComponent } from './core/core.component';
import { StudentWrapperComponent } from './student-wrapper/student-wrapper.component';
import { TeacherWrapperComponent } from './teacher-wrapper/teacher-wrapper.component';
import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoreComponent,
    StudentWrapperComponent,
    TeacherWrapperComponent,
    StaffWrapperComponent,
    GridListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
