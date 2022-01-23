let myName = "Tom";
let myAge = 20;
let myfn = function(){
    return "My name is" + myName + "! I'm '" + myAge + "years old."
}
let myClass =  class myClass {
    static a = "yeah!";
}


let AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: '<h1>我的第一个 Angular 应用</h1>'
    })
        .Class({
            constructor: function() {}
        });


let AppModule =
    ng.core.NgModule({
        imports: [ ng.platformBrowser.BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ]
    })
        .Class({
            constructor: function() {}
        });

export { myName, myAge, myfn, myClass , AppModule}