<<<<<<< HEAD
import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
=======
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
<<<<<<< HEAD
  canDeactivate(
    component: MemberEditComponent): boolean {
      if (component.editForm.dirty) {
        return confirm('Are you sure you want to continue? Any unsaved Changes will be lost');
      }
    return true;
  }
  
=======
  canDeactivate(component: MemberEditComponent): boolean {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
    }
    return true;
  }

>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
}
