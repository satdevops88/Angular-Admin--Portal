import { Component, AfterViewChecked } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterViewChecked {

    toggleClass = 'ft-maximize';
    placement = 'bottom-right'
    public isCollapsed = true;

    constructor(private authenticationService: AuthService) {
        
    }

    ngAfterViewChecked() {
        setTimeout(() => {
            var wrapperDiv = document.getElementsByClassName("wrapper")[0];
            var dir = wrapperDiv.getAttribute("dir");
            if (dir === 'rtl') {
                this.placement = 'bottom-left';
            }
            else if (dir === 'ltr') {
                this.placement = 'bottom-right';
            }
        }, 3000);


    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }

    onLogout() {
        this.authenticationService.logout();
    }
}
