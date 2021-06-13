import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxCalendarModule, IgxPrefixModule, IgxSelectModule, IgxDialogModule } from "igniteui-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { EventdaytableComponent } from './eventdaytable/eventdaytable.component';
import { Eventday15maioComponent } from './eventday15maio/eventday15maio.component';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { GroupComponent } from './group/group.component';
import { CoursesComponent } from './courses/courses.component';
import { IhcComponent } from './ihc/ihc.component';
import { IhcP3Component } from './ihc-p3/ihc-p3.component';
import { NewEventComponent } from './new-event/new-event.component';
import { LanguageComponent } from './language/language.component';
import { PdsComponent } from './pds/pds.component';
import { BdComponent } from './bd/bd.component';
import { PdsP3Component } from './pds-p3/pds-p3.component';
import { BdP3Component } from './bd-p3/bd-p3.component';
import { AccountComponent } from './account/account.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestarSigninComponent } from './testar-signin/testar-signin.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { IgxButtonModule, IgxToggleModule } from "igniteui-angular";
import { ComponentNameComponent } from './component-name/component-name.component';
import { HomeComponent } from './home/home.component';
import { SubgroupsComponent } from './subgroups/subgroups.component';
import { SemanalComponent } from './semanal/semanal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SidenavComponent,
    EventdaytableComponent,
    Eventday15maioComponent,
    GroupComponent,
    CoursesComponent,
    IhcComponent,
    IhcP3Component,
    NewEventComponent,
    LanguageComponent,
    PdsComponent,
    BdComponent,
    PdsP3Component,
    BdP3Component,
    AccountComponent,
    SigninComponent,
    RegisterComponent,
    TestarSigninComponent,
    CreateGroupComponent,
    ComponentNameComponent,
    HomeComponent,
    SubgroupsComponent,
    SemanalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxCalendarModule,
    IgxPrefixModule,
    IgxSelectModule,
    IgxDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    IgxButtonModule,
    IgxToggleModule,
  ],
  providers: [
    EventdaytableComponent,
    CreateGroupComponent,
    SemanalComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
