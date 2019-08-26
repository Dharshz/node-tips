"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var dialogs = require("ui/dialogs");
require("rxjs/Rx");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.tips = [];
        this.statusOne = '';
        this.isLoading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.test();
    };
    HomeComponent.prototype.gotoTest = function () {
    };
    HomeComponent.prototype.test = function () {
        var _this = this;
        var options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Accept': 'application/json',
            })
        });
        return this.http.get('https://hidden-wildwood-75061.herokuapp.com/tips', options)
            .map(function (x) { return x.json(); })
            .subscribe(function (result) {
            _this.isLoading = false;
            result.forEach(function (tx) {
                _this.tips.unshift(tx);
            });
            console.log('have data');
        }, function (e) {
            var options = {
                title: "Check internet Connection",
                message: "Unable to connect to Internet",
                okButtonText: "OK"
            };
            dialogs.alert(options).then(function () {
                console.log("Showed");
            });
            _this.statusOne = "Unable to Connect";
            _this.isLoading = false;
        }, function () { _this.isLoading = false; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './components/home/home.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJFO0FBQzNFLHNDQUE4RDtBQUU5RCxvQ0FBdUM7QUFDdkMsbUJBQWlCO0FBQ2pCLDBFQUFtRjtBQUNuRixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0UsSUFBYSxhQUFhO0lBS3RCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLElBQUksQ0FBQztJQUcxQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQUEsaUJBMkJDO1FBMUJHLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQztZQUM3QixPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0IsQ0FBQztTQUNMLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsRUFBRSxPQUFPLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNsQixTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQ0QsVUFBQyxDQUFDO1lBQ0UsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLDJCQUEyQjtnQkFDbEMsT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLEVBQUUsY0FBUSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLDZCQUE2QjtLQUU3QyxDQUFDO3FDQU00QixXQUFJO0dBTHJCLGFBQWEsQ0E0Q3pCO0FBNUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFZpZXdDbGFzcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmh0bWwnXHJcbiAgICAvLyxjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aXBzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBzdGF0dXNPbmU6IFN0cmluZyA9ICcnO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb3RvVGVzdCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2hpZGRlbi13aWxkd29vZC03NTA2MS5oZXJva3VhcHAuY29tL3RpcHMnLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHggPT4geC5qc29uKCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKHR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzLnVuc2hpZnQodHgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGF2ZSBkYXRhJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDaGVjayBpbnRlcm5ldCBDb25uZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmFibGUgdG8gY29ubmVjdCB0byBJbnRlcm5ldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNPbmUgPSBcIlVuYWJsZSB0byBDb25uZWN0XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAoKSA9PiB7IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7IH0pO1xyXG4gICAgfVxyXG59Il19