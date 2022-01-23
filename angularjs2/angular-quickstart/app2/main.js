import { myName, myAge, myfn, myClass ,AppModule} from "./test.js";
console.log(myfn());// My name is Tom! I'm 20 years old.
console.log(myAge);// 20
console.log(myName);// Tom
console.log(myClass.a );// yeah!


setInterval(
    () => console.log(AppModule),
    1000
);

document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule);
});