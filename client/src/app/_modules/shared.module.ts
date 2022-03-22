<<<<<<< HEAD
import { NgxSpinnerModule } from 'ngx-spinner';
=======
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
<<<<<<< HEAD
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


=======
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {FileUploadModule} from 'ng2-file-upload';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
<<<<<<< HEAD
    NgxSpinnerModule
=======
    FileUploadModule,
    BsDatepickerModule.forRoot()
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
<<<<<<< HEAD
    NgxSpinnerModule
=======
    FileUploadModule,
    BsDatepickerModule
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
  ]
})
export class SharedModule { }
