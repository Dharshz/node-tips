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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJFO0FBQzNFLHNDQUE4RDtBQUU5RCxvQ0FBdUM7QUFDdkMsbUJBQWlCO0FBQ2pCLDBFQUFtRjtBQUNuRixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0UsSUFBYSxhQUFhO0lBS3RCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLElBQUksQ0FBQztJQUcxQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUM7WUFDN0IsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDO2dCQUNqQixRQUFRLEVBQUUsa0JBQWtCO2FBQy9CLENBQUM7U0FDTCxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0RBQWtELEVBQUUsT0FBTyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7YUFDbEIsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUNELFVBQUMsQ0FBQztZQUNFLElBQUksT0FBTyxHQUFHO2dCQUNWLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUM7WUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7WUFDckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLGNBQVEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSw2QkFBNkI7S0FFN0MsQ0FBQztxQ0FNNEIsV0FBSTtHQUxyQixhQUFhLENBd0N6QjtBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbmltcG9ydCBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBWaWV3Q2xhc3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sJ1xyXG4gICAgLy8sY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGlwczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgc3RhdHVzT25lOiBTdHJpbmcgPSAnJztcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vaGlkZGVuLXdpbGR3b29kLTc1MDYxLmhlcm9rdWFwcC5jb20vdGlwcycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoeCA9PiB4Lmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgodHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHMudW5zaGlmdCh0eCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIGRhdGEnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNoZWNrIGludGVybmV0IENvbm5lY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBjb25uZWN0IHRvIEludGVybmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c09uZSA9IFwiVW5hYmxlIHRvIENvbm5lY3RcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHsgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICB9XHJcbn0iXX0=