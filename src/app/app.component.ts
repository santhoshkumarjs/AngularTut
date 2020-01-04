import { Component } from '@angular/core';
import { AuthService,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng-dynami-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public socialAuthService: AuthService){

  }

  public socialSignIn(socialPlatform:string){
    let socialPlatformProvider;
    alert(socialPlatform);
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
 
        console.log(userData);
 
            
      }
    );

  }
}
