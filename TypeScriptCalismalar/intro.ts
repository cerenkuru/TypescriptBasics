function greeter(name:string){
    return "Merhaba " + name
}


function greeting(name:string){
    return "Merhaba " + name
}
let message = greeter("Cerenku")
console.log(message)

let dogruMu : boolean = true
let sayilar: Array<number> = [1,2,3]
let dizi:[number,string] = [2,"ceku"]
enum Renk {Kirmizi=1,Siyah,Mavi}
let renk : Renk = Renk.Kirmizi


let deger : any = "Ceku"
let deger2 : void = undefined

function selamVer():void{ //boş dönsün istiyorsak.
    console.log("mrb")
    //return 5;
}

