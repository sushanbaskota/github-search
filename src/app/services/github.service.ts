import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '0a47cc9481a9e130e9b0';
    private client_key = '3991b9e51070005db8834b3f1c3271f4e6ecefc9';

    constructor(private http: Http){
        console.log("service is ready ....");
        //this.username = "baskotasushan";
    }

    public getUser(){
        return this.http.get('http://api.github.com/users/'+ this.username + '?client_id='+this.client_id+'&client_secret='+this.client_key)
            .map(res => res.json());
    }

    public getRepo(){
        return this.http.get('http://api.github.com/users/'+ this.username + '/repos?client_id='+this.client_id+'&client_secret='+this.client_key)
            .map(res => res.json());
    }

    public updateUser(username: string){
        this.username = username;
    }
}