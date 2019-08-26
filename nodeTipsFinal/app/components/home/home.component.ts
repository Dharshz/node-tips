import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import dialogs = require("ui/dialogs");
import "rxjs/Rx";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
    selector: 'home',
    templateUrl: './components/home/home.html'
    //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    tips: Array<any> = [];
    statusOne: String = '';
    isLoading: boolean = true;

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.test();
    }

    test() {
        var options = new RequestOptions({
            headers: new Headers({
                'Accept': 'application/json',
            })
        });
        return this.http.get('https://hidden-wildwood-75061.herokuapp.com/tips', options)
            .map(x => x.json())
            .subscribe((result: any) => {
                this.isLoading = false;
                result.forEach((tx) => {
                    this.tips.unshift(tx);
                });
                console.log('have data');
            },
            (e) => {
                var options = {
                    title: "Check internet Connection",
                    message: "Unable to connect to Internet",
                    okButtonText: "OK"
                };
                dialogs.alert(options).then(() => {
                    console.log("Showed");
                });
                this.statusOne = "Unable to Connect";
                this.isLoading = false;
            }, () => { this.isLoading = false; });
    }
}