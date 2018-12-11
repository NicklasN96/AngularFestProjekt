import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { AuthCompanyGuardService } from "./core/auth-company-guard.service";
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';
import { BoardsComponent } from './crud/boards/boards.component';
import { BoardsDetailComponent } from './crud/boards-detail/boards-detail.component';
import { BoardsCreateComponent } from './crud/boards-create/boards-create.component';
import { BoardsEditComponent } from "./crud/boards-edit/boards-edit.component";
import { CompanyloginComponent } from './ui/companylogin/companylogin.component';
import { CompanyformComponent } from './ui/companyform/companyform.component';
import { BoardsDetailCompanyComponent } from './crud-company/boards-detail-company/boards-detail-company.component';
import { BoardsEditCompanyComponent } from './crud-company/boards-edit-company/boards-edit-company.component';
import { BoardsCreateCompanyComponent } from './crud-company/boards-create-company/boards-create-company.component';


const routes: Routes = [
  { path: 'create-offer', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  // { path: 'boards', component: BoardsComponent, canActivate: [AuthGuard], data: { title: 'Boards List' } },
  { path: 'boards-details/:id', component: BoardsDetailComponent,canActivate: [AuthGuard],  data: { title: 'Boards Details' } },
  { path: 'boards-create', component: BoardsCreateComponent,canActivate: [AuthGuard], data: { title: 'Create Boards' } },
  { path: 'boards-edit/:id', component: BoardsEditComponent,canActivate: [AuthGuard], data: { title: 'Edit Boards' } },
  // { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'ssr', component: SsrPageComponent },

  //Company routes
  { path: 'login-company', component: CompanyloginComponent},
  { path: 'boards-details-company/:id', component: BoardsDetailCompanyComponent, canActivate: [AuthCompanyGuardService], data: { title: 'Boards Details' }},
  { path: 'boards-edit-company/:id', component: BoardsEditCompanyComponent,canActivate: [AuthCompanyGuardService], data: { title: 'Edit Boards' } },
  { path: 'boards-create-company/:id', component: BoardsCreateCompanyComponent,canActivate: [AuthGuard], data: { title: 'Create Boards' } },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
