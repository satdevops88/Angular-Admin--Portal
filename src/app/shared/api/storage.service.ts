import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import Amplify, { Storage } from 'aws-amplify';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class StorageService {

    key: string = '';
    imageUrl: string = '';

    constructor(private router: Router, private toastr: ToastrService) {
        Amplify.configure({
            Auth: {
                identityPoolId: 'eu-central-1:be3cd5fc-7f95-46e3-84c4-9b60276c24db',
                region: 'eu-central-1',
                userPoolId: 'eu-central-1_Xu9wkyrJW',
                userPoolWebClientId: '4rgedo14aelde4pubhassf11jd'
            },
            Storage: {
                bucket: 'static.publiers.com', //REQUIRED -  Amazon S3 bucket
                region: 'eu-central-1', //REQUIRED -  bucket region
            }
        });
    }

    getKey() {
        return this.key;
    }

    setKey(key: string) {
        this.key = key;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    setImageUrl(imageUrl: string) {
        this.imageUrl = imageUrl;
    }

    getImage(imageName: string): Promise<any> {
        return Storage.get(imageName, { expires: 600000 });
    }

    uploadImage(imageName: string, file: any): Promise<any> {
        console.log('uploadImage started');
        return Storage.put(imageName, file);

    }

    RemoveImage(imageName: string) {
        console.log(imageName);
        Storage.remove(imageName)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

}
