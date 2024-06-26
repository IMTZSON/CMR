// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../service/login/login.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard {
//   constructor(private router: Router, private loginService: LoginService) {}

//   canActivate(): boolean {
//     return this.checkAuth();
//   }

//   private checkAuth(): boolean {
//     if (this.loginService.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }

//   //   canMatch(): boolean {
//   //     if (this.checkAuth()) {
//   //         return this.isAuthenticatedRole()
//   //     }
//   //     return false
//   //   }

//   //   isAuthenticatedRole(): boolean{
//   //     if (typeof localStorage !== 'undefined'){
//   //       return 'ADMIN' == localStorage.getItem('role') || 'SUPERADMIN' == localStorage.getItem('role')
//   //     }
//   //     else{return false}
//   //   }
// }
