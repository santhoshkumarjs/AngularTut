import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  DynamiSocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng-dynami-social-login';

export function getAuthConfiguration(){
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('1075848218678-tkgp8unjp7vkevabp9m46b6eadq8jsh3.apps.googleusercontent.com'),
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider:new FacebookLoginProvider('484379488882111'),
    },
    {
      id: LinkedinLoginProvider.PROVIDER_ID,
      provider:new LinkedinLoginProvider('8180bkobpl0zs1'),
    }
  ]);
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamiSocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthConfiguration
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
