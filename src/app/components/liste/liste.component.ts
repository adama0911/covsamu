import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import {ReversePipe} from 'ngx-pipes';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../../services/admin.service';
import {} from 'ngx-pipes';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],

})

export class ListeComponent implements OnInit {

  public  dat = [];
  public datBig = [];
  public tabJrs = [];
  public mod=false;
  public motif =undefined;
  public jour;
  public datass=[];
  public login = false;
  public datas = [
  ]

  public datasSaves = [];

  public tabtestedCod=[];
  // public jours1 = [
  //   {
  //     code: "12313646",
  //     nom: "Thiaf",
  //     prenom: "Beug",
  //     sexe: "Homme",
  //     age: "35",
  //     telephone: "772354214",
  //     ville: "Dakar",
  //     niveaucascontact: "niveau cas-contact",
  //     region:"dakar",
  //     quartier:"Yoff",
  //     district: "Foire",
  //     matrimanial:"célibataire",
  //     nbrEnfants:"5",
  //     grossesse: "Non",
  //     nbrPersChezVous:"4",
  //     nbrPersChambre:"2",
  //     TravallezVous: "oui",
  //     domain:"Santé",
  //     scolarise:"oui",
  //     niveauCasContact:"8",
  //
  //     dateContact:"12/12/18",
  //     lienAvecCove:"oui",
  //     dateContactautorite:"12/12/18",
  //     contacter:"oui",
  //     lieuxFrenquenter:"dakar ville",
  //     symtom: "oui",
  //     autreMaladie: "rhume",
  //     medicaments: "paracetamole",
  //     heur: "matin"
  //   },
  //   {
  //     code: "17813646",
  //     nom: "Thiaf",
  //     prenom: "Beug",
  //     sexe: "Homme",
  //     age: "35",
  //     telephone: "772354214",
  //     ville: "Dakar",
  //     niveaucascontact: "niveau cas-contact",
  //     region:"dakar",
  //     quartier:"Yoff",
  //     district: "Foire",
  //     matrimanial:"célibataire",
  //     nbrEnfants:"5",
  //     grossesse: "Non",
  //     nbrPersChezVous:"4",
  //     nbrPersChambre:"2",
  //     TravallezVous: "oui",
  //     domain:"Santé",
  //     scolarise:"oui",
  //     niveauCasContact:"8",
  //     dateContact:"12/12/18",
  //     lienAvecCove:"oui",
  //     dateContactautorite:"12/12/18",
  //     contacter:"oui",
  //     lieuxFrenquenter:"dakar ville",
  //     symtom: "oui",
  //     autreMaladie: "rhume",
  //     medicaments: "paracetamole",
  //     heur: "soir"
  //   },
  // ]


  public bigData = [
  ]

  private patientUrl = "https://apitnt.bbstvnet.com/index.php/Cov/admin/patientssymptomes";
  //private patientUrl = "https://apitnt.bbstvnet.com/index.php/Cov/admin/patientssymptomes";

  constructor(private _httpClient:AdminService){

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this._httpClient.getItems(this.patientUrl).subscribe(data => {
        this.datass = data[1];
        console.log(this.datass);
        this.datas = this.datass;
        this.datas = this.datas.sort(this.dynamicsort("id","desc"))
        this.uniqueEls();

    });
  }


  patientDetails(ob){
    this.dat = []
    this.datBig = [];
    this.tabJrs = [];


    for(let i = 0 ; i < (this.datas).length; i++){
      if(ob.code==this.datas[i].code){
         this.dat.push(this.datas[i]);
       }
    }

    console.log(this.dat)
    let premiereJour = this.calculePremierJour(this.dat);

    // for(let i = 0 ; i < (this.dat).length; i++){
    //   let el={jour: 0,date:"",joursAvant:0,datas:[]};
    //
    //   if(!(this.tabJrs.includes(this.difBetweenTwoDates((this.dat[i]).date,premiereJour) + 1))){
    //     el.jour = this.difBetweenTwoDates ((this.dat[i]).date,premiereJour)+1;
    //     el.date = (this.dat[i]).date;
    //     this.tabJrs.push(el.jour);
    //     console.log("tabJrs",this.tabJrs)
    //     el.datas = [];
    //     for(let j = 0 ; j < (this.dat).length; j++){
    //       if((this.difBetweenTwoDates ((this.dat[i]).date,(this.dat[j]).date) + 1 ) == el.jour){
    //         el.datas.push((this.dat[j]));
    //       }
    //     }
    //
    //     this.datBig.push(el);
    //
    //     this.datBig = this.datBig.sort(this.dynamicsort("jour","desc"))
    //   }
    //
    // }
    //
    this.dat.forEach( (obj)=>{
        let el={jour: 0,date:"",joursAvant:0,datas:[]};

        if(!(this.tabJrs.includes(this.difBetweenTwoDates(obj.date,premiereJour) + 1))){
          el.jour = this.difBetweenTwoDates (obj.date,premiereJour)+1;
          el.date = obj.date;
          this.tabJrs.push(el.jour);
          console.log("tabJrs",this.tabJrs)
          el.datas = [];
          this.dat.forEach( (o)=>{
              if((this.difBetweenTwoDates (obj.date,o.date) + 1 ) == el.jour){
                el.datas.push(o);
              }
          });

          this.datBig.push(el);

          this.datBig = this.datBig.sort(this.dynamicsort("jour","desc"))
        }
    })

    this.bigData = this.datBig;
    console.log(this.bigData)
  }

  jourTester(tabj,jour){
      tabj.forEach( (o)=>{
         if(jour==o)
            return true;
      })
      return false;
  }

  modok():void{
    this.mod = false;
  }

  Llogin(){
     this.login = true;
  }
  modno(el):void{
    this.mod = true;
    this.patientDetails(el)
  }

  datasChange(){
     this.datas = this.datas;
     return true;
  }
   includesStr(values, str) {
      return values.map(function (value) {
        return String(value);
      }).find(function (value) {
        return value.includes("Lets");
      });
    }

  onKey(event: any) { // without type info*

      this.motif = event.target.value;
      let tabe = [];
      this.datas = [];

      if(this.motif.trim()=='')
        this.datass = this.datasSaves;
      else{
        this.datasSaves.forEach((ob)=>{
          if(((ob.code).search(this.motif) == 0) || ((ob.nom).search(this.motif) == 0)
        || ((ob.prenom).search(this.motif) == 0) || ((ob.sexe).search(this.motif) == 0) || ((ob.ville).search(this.motif) == 0 || (parseInt(this.motif)==this.truncate(this.age(ob.naissance))))){
              tabe.push(ob);
          }
        })
        this.datass = tabe;
      }
  }

  sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  todaye(){
    let d = new Date();
    let s = new String(); s = (d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds()+" "+d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()).toString();
    return s;
  }

  difBetweenTwoDates (str1,str2){
    let a = new Date(str1);
    let b = new Date(str2);
    return Math.floor(Math.abs(this.diffDate(a, b)));
  }

  diffDate(date1, date2) {
    return (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
  }

  calculePremierJour(tab){
    let min = 14;
    let minDate = "";
    let dif  = 0;
    tab.forEach((a)=>{
        tab.forEach((b)=>{
            dif  = this.difBetweenTwoDates (a.date,b.date)
            if(min > dif){
                min = dif;
                minDate = a.date;
            }
        })
    })

    return minDate;
  }

  uniqueEls(){
    let dans = false;
    this.datass = [];

    this.datas.forEach((ob)=>{

      this.tabtestedCod.forEach((obj)=>{
          if(ob.code==obj){
           dans = true;
          }

      })
      if(!dans){
        this.datass.push(ob)
        this.tabtestedCod.push(ob.code)
        dans = false;
      }else{
        dans = false;
      }
    })
    this.datasSaves = this.datass;

  }

  dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }

  }

  shortPatients(){
    let tabe = [];
    this.datas.forEach((ob)=>{
      if((ob.code).search(this.motif) == 1){
          tabe.push(ob);
      }
    })
  }

  age(la_date)
  {
      let a = new Date(la_date);
      return (Math.floor( (new Date).getTime() - a.getTime()) / (365.24*24*3600*1000));
  }

  truncate(value)
  {
      if (value < 0) {
          return Math.ceil(value);
      }

      return Math.floor(value);
  }

}
