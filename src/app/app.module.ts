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
      provider: new GoogleLoginProvider('<google app id>'),
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider:new FacebookLoginProvider('<facebook app id>'),
    },
    {
      id: LinkedinLoginProvider.PROVIDER_ID,
      provider:new LinkedinLoginProvider('<linkedin id>'),
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
