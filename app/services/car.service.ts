import { Injectable }    from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private car_http_url = 'http://localhost:9080/car';  // URL to web api
    private advertiser_http_url = 'http://localhost:9090';
    private ad_http_url = 'http://localhost:9080/';


    constructor(private http: Http) { }

    getCars(){
        return this.http.get(this.car_http_url)
            .map(res => res.json());

    }

    findPremijumAd(){
        return this.http.get(this.ad_http_url + '/v1/find')
            .map(res => res.json());
    }

    findAdvertiser(advertiser_code : any){
        return this.http.get(this.advertiser_http_url + '/advertiser?code=' + advertiser_code)
            .map(res => res.json());

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}