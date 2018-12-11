import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import {BoardsComponent} from '../app/crud/boards/boards.component'
import { BoardsDetailComponent } from '../app/crud/boards-detail/boards-detail.component';
import { BoardsCreateComponent } from '../app/crud/boards-create/boards-create.component';
import { BoardsEditComponent } from '../app/crud/boards-edit/boards-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardsCompanyComponent } from './crud-company/boards-company/boards-company.component';
import { BoardsCreateCompanyComponent } from './crud-company/boards-create-company/boards-create-company.component';
import { BoardsDetailCompanyComponent } from './crud-company/boards-detail-company/boards-detail-company.component';
import { BoardsEditCompanyComponent } from './crud-company/boards-edit-company/boards-edit-company.component';


// IMPORTANT
// Add your own project credentials to environments/*.ts




@NgModule({
  declarations: [AppComponent, BoardsComponent,
    BoardsDetailComponent,
    BoardsCreateComponent,
    BoardsEditComponent,
    BoardsCompanyComponent,
    BoardsCreateCompanyComponent,
    BoardsDetailCompanyComponent,
    BoardsEditCompanyComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
