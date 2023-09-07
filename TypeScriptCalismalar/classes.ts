// class Ev{
//      private _odaSayisi:number;
//     _pencereSayisi:number;
//     _kat:number;
//     constructor(odaSayisi:number,pencereSayisi:number,kat:number){
//         this._odaSayisi = odaSayisi;
//         this._kat = kat;
//         this._pencereSayisi = pencereSayisi;
//     }
//     yemekYe(){
//         console.log(this._kat + " katlı evde" + "Yemek yendi")
//     }

// }

// let ev = new Ev(3,4,5)
// ev.yemekYe();
// console.log(ev._kat)


// // Inheritance

// class Kisi {
//     private _isim:string // sadece tanımlandığı class
//     protected isim1:string
//     public isim2:string

//     get isim():string{
//         return "Sayın: " + this._isim
//     }

//     set isim(ad:string){
//         this._isim = ad
//     }

//     kaydet(){
//         console.log("kişi kaydedildi")
//     }
// }

// class Musteri extends Kisi {
//     satisYap(){
//         // this.isim1;
//         // musteri.isim2;
//         console.log("satış yapıldı")
//     }
// }

// class Personel extends Kisi {
//     maasOde(){
//         console.log("maaş ödendi")
//     }
// }

// let musteri = new Musteri()



// musteri.isim = "Ceren";
// // console.log(musteri.isim);
// musteri.kaydet();
// musteri.satisYap();

// let personel = new Personel();
// personel.kaydet();
// personel.maasOde();