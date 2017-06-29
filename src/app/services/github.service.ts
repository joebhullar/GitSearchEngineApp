import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string; 
    private client_id='f4afb9787df1c4eeb698';
    private client_secret='86137d746f1c54cf6d2afe525e873688610a8859';

    constructor(private _http:Http){
        console.log('GithubServiceReady...');
        this.username='joebhullar';
    }
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());

    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());

    } 

    updateUser(username:string){
        this.username = username;
    }   
    
}
