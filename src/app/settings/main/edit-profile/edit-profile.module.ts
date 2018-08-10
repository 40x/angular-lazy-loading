import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    EditProfileRoutingModule
  ],
  declarations: [EditComponent]
})
export class EditProfileModule { }
