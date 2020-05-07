import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import {ReversePipe} from 'ngx-pipes';



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],

})

export class ListeComponent implements OnInit {

  public mod=false;
  public motif =null;
  public jour;

  public datas = [
    {
      code: "12313646",
      nom: "Thiaf",
      prenom: "Beug",
      sexe: "Homme",
      age: "35",
      telephone: "772354214",
      ville: "Dakar",
      niveaucascontact: "niveau cas-contact",
      region:"dakar",
      quartier:"Yoff",
      district: "Foire",
      matrimanial:"célibataire",
      nbrEnfants:"5",
      grossesse: "Non",
      nbrPersChezVous:"4",
      nbrPersChambre:"2",
      TravallezVous: "oui",
      domain:"Santé",
      scolarise:"oui",
      niveauCasContact:"8",

      dateContact:"12/12/18",
      lienAvecCove:"oui",
      dateContactautorite:"12/12/18",
      contacter:"oui",
      lieuxFrenquenter:"dakar ville",
      symtom: "oui",
      autreMaladie: "rhume",
      medicaments: "paracetamole",
      jours: 1,

      temperature: 15,
      toux :"Oui",
      difresp: "Non",
      Malgorge: "Non",
      nezbouche:"oui",
      conjonctivite:"oui",
      mauxTete:"oui",
      douleurmusculaire:"oui",
      fatige:"non",
      vomi:"oui",
      diarrhee:"oui",
      perteOdora:"non",
      perteGout:"non",
      autreSigne:"non"
    },
    {
      code: "17813646",
      nom: "Thiaf",
      prenom: "Beug",
      sexe: "Homme",
      age: "35",
      telephone: "772354214",
      ville: "Dakar",
      niveaucascontact: "niveau cas-contact",
      region:"dakar",
      quartier:"Yoff",
      district: "Foire",
      matrimanial:"célibataire",
      nbrEnfants:"5",
      grossesse: "Non",
      nbrPersChezVous:"4",
      nbrPersChambre:"2",
      TravallezVous: "oui",
      domain:"Santé",
      scolarise:"oui",
      niveauCasContact:"8",
      dateContact:"12/12/18",
      lienAvecCove:"oui",
      dateContactautorite:"12/12/18",
      contacter:"oui",
      lieuxFrenquenter:"dakar ville",
      symtom: "oui",
      autreMaladie: "rhume",
      medicaments: "paracetamole",
      jours: 2,


      temperature: 34,
      toux :"Oui",
      difresp: "Non",
      Malgorge: "Non",
      nezbouche:"oui",
      conjonctivite:"oui",
      mauxTete:"oui",
      douleurmusculaire:"oui",
      fatige:"non",
      vomi:"oui",
      diarrhee:"oui",
      perteOdora:"non",
      perteGout:"non",
      autreSigne:"non"
    },
    {
      code: "55313646",
      nom: "Thiaf",
      prenom: "Beug",
      sexe: "Homme",
      age: "35",
      telephone: "772354214",
      ville: "Dakar",
      niveaucascontact: "niveau cas-contact",
      region:"dakar",
      quartier:"Yoff",
      district: "Foire",
      matrimanial:"célibataire",
      nbrEnfants:"5",
      grossesse: "Non",
      nbrPersChezVous:"4",
      nbrPersChambre:"2",
      TravallezVous: "oui",
      domain:"Santé",
      scolarise:"oui",
      niveauCasContact:"8",
      dateContact:"12/12/18",
      lienAvecCove:"oui",
      dateContactautorite:"12/12/18",
      contacter:"oui",
      lieuxFrenquenter:"dakar ville",
      symtom: "oui",
      autreMaladie: "rhume",
      medicaments: "paracetamole",
      jours: 3,


      temperature: 38,
      toux :"Oui",
      difresp: "Non",
      Malgorge: "Non",
      nezbouche:"oui",
      conjonctivite:"oui",
      mauxTete:"oui",
      douleurmusculaire:"oui",
      fatige:"non",
      vomi:"oui",
      diarrhee:"oui",
      perteOdora:"non",
      perteGout:"non",
      autreSigne:"non"


    },
  ]

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
    {
      jour: 1,
      datas:[
        {
          code: "12313646",
          nom: "Thiaf",
          prenom: "Beug",
          sexe: "Homme",
          age: "35",
          telephone: "772354214",
          ville: "Dakar",
          niveaucascontact: "niveau cas-contact",
          region:"dakar",
          quartier:"Yoff",
          district: "Foire",
          matrimanial:"célibataire",
          nbrEnfants:"5",
          grossesse: "Non",
          nbrPersChezVous:"4",
          nbrPersChambre:"2",
          TravallezVous: "oui",
          domain:"Santé",
          scolarise:"oui",
          niveauCasContact:"8",

          dateContact:"12/12/18",
          lienAvecCove:"oui",
          dateContactautorite:"12/12/18",
          contacter:"oui",
          lieuxFrenquenter:"dakar ville",
          symtom: "oui",
          autreMaladie: "rhume",
          medicaments: "paracetamole",
          heur: "matin",


          temperature: 36,
          toux :"Oui",
          difresp: "Non",
          Malgorge: "Non",
          nezbouche:"oui",
          conjonctivite:"oui",
          mauxTete:"oui",
          douleurmusculaire:"oui",
          fatige:"non",
          vomi:"oui",
          diarrhee:"oui",
          perteOdora:"non",
          perteGout:"non",
          autreSigne:"non",
          syntomesEntourage:"non"
        },
          {
            code: "17813646",
            nom: "Thiaf",
            prenom: "Beug",
            sexe: "Homme",
            age: "35",
            telephone: "772354214",
            ville: "Dakar",
            niveaucascontact: "niveau cas-contact",
            region:"dakar",
            quartier:"Yoff",
            district: "Foire",
            matrimanial:"célibataire",
            nbrEnfants:"5",
            grossesse: "Non",
            nbrPersChezVous:"4",
            nbrPersChambre:"2",
            TravallezVous: "oui",
            domain:"Santé",
            scolarise:"oui",
            niveauCasContact:"8",
            dateContact:"12/12/18",
            lienAvecCove:"oui",
            dateContactautorite:"12/12/18",
            contacter:"oui",
            lieuxFrenquenter:"dakar ville",
            symtom: "oui",
            autreMaladie: "rhume",
            medicaments: "paracetamole",
            heur: "soir",


            temperature: 36,
            toux :"Oui",
            difresp: "Non",
            Malgorge: "Non",
            nezbouche:"oui",
            conjonctivite:"oui",
            mauxTete:"oui",
            douleurmusculaire:"oui",
            fatige:"non",
            vomi:"oui",
            diarrhee:"oui",
            perteOdora:"non",
            perteGout:"non",
            autreSigne:"non",
            syntomesEntourage:"non"
          },
        ]
    },
    {
      jour: 2,
      datas:[
        {
          code: "12313646",
          nom: "Thiaf",
          prenom: "Beug",
          sexe: "Homme",
          age: "35",
          telephone: "772354214",
          ville: "Dakar",
          niveaucascontact: "niveau cas-contact",
          region:"dakar",
          quartier:"Yoff",
          district: "Foire",
          matrimanial:"célibataire",
          nbrEnfants:"5",
          grossesse: "Non",
          nbrPersChezVous:"4",
          nbrPersChambre:"2",
          TravallezVous: "oui",
          domain:"Santé",
          scolarise:"oui",
          niveauCasContact:"8",

          dateContact:"12/12/18",
          lienAvecCove:"oui",
          dateContactautorite:"12/12/18",
          contacter:"oui",
          lieuxFrenquenter:"dakar ville",
          symtom: "oui",
          autreMaladie: "rhume",
          medicaments: "paracetamole",
          heur: "matin",


          temperature: 36,
          toux :"Oui",
          difresp: "Non",
          Malgorge: "Non",
          nezbouche:"oui",
          conjonctivite:"oui",
          mauxTete:"oui",
          douleurmusculaire:"oui",
          fatige:"non",
          vomi:"oui",
          diarrhee:"oui",
          perteOdora:"non",
          perteGout:"non",
          autreSigne:"non",
          syntomesEntourage:"non"
        },
          {
            code: "17813646",
            nom: "Thiaf",
            prenom: "Beug",
            sexe: "Homme",
            age: "35",
            telephone: "772354214",
            ville: "Dakar",
            niveaucascontact: "niveau cas-contact",
            region:"dakar",
            quartier:"Yoff",
            district: "Foire",
            matrimanial:"célibataire",
            nbrEnfants:"5",
            grossesse: "Non",
            nbrPersChezVous:"4",
            nbrPersChambre:"2",
            TravallezVous: "oui",
            domain:"Santé",
            scolarise:"oui",
            niveauCasContact:"8",
            dateContact:"12/12/18",
            lienAvecCove:"oui",
            dateContactautorite:"12/12/18",
            contacter:"oui",
            lieuxFrenquenter:"dakar ville",
            symtom: "oui",
            autreMaladie: "rhume",
            medicaments: "paracetamole",
            heur: "soir",


            temperature: 36,
            toux :"Oui",
            difresp: "Non",
            Malgorge: "Non",
            nezbouche:"oui",
            conjonctivite:"oui",
            mauxTete:"oui",
            douleurmusculaire:"oui",
            fatige:"non",
            vomi:"oui",
            diarrhee:"oui",
            perteOdora:"non",
            perteGout:"non",
            autreSigne:"non",
            syntomesEntourage:"non"
          },
        ]
    },
    {
      jour: 3,
      datas:[
          {
            code: "12313646",
            nom: "Thiaf",
            prenom: "Beug",
            sexe: "Homme",
            age: "35",
            telephone: "772354214",
            ville: "Dakar",
            niveaucascontact: "niveau cas-contact",
            region:"dakar",
            quartier:"Yoff",
            district: "Foire",
            matrimanial:"célibataire",
            nbrEnfants:"5",
            grossesse: "Non",
            nbrPersChezVous:"4",
            nbrPersChambre:"2",
            TravallezVous: "oui",
            domain:"Santé",
            scolarise:"oui",
            niveauCasContact:"8",

            dateContact:"12/12/18",
            lienAvecCove:"oui",
            dateContactautorite:"12/12/18",
            contacter:"oui",
            lieuxFrenquenter:"dakar ville",
            symtom: "oui",
            autreMaladie: "rhume",
            medicaments: "paracetamole",
            heur: "matin",


            temperature: 36,
            toux :"Oui",
            difresp: "Non",
            Malgorge: "Non",
            nezbouche:"oui",
            conjonctivite:"oui",
            mauxTete:"oui",
            douleurmusculaire:"oui",
            fatige:"non",
            vomi:"oui",
            diarrhee:"oui",
            perteOdora:"non",
            perteGout:"non",
            autreSigne:"non",
            syntomesEntourage:"non"
          },
          {
            code: "17813646",
            nom: "Thiaf",
            prenom: "Beug",
            sexe: "Homme",
            age: "35",
            telephone: "772354214",
            ville: "Dakar",
            niveaucascontact: "niveau cas-contact",
            region:"dakar",
            quartier:"Yoff",
            district: "Foire",
            matrimanial:"célibataire",
            nbrEnfants:"5",
            grossesse: "Non",
            nbrPersChezVous:"4",
            nbrPersChambre:"2",
            TravallezVous: "oui",
            domain:"Santé",
            scolarise:"oui",
            niveauCasContact:"8",
            dateContact:"12/12/18",
            lienAvecCove:"oui",
            dateContactautorite:"12/12/18",
            contacter:"oui",
            lieuxFrenquenter:"dakar ville",
            symtom: "oui",
            autreMaladie: "rhume",
            medicaments: "paracetamole",
            heur: "soir",


            temperature: 36,
            toux :"Oui",
            difresp: "Non",
            Malgorge: "Non",
            nezbouche:"oui",
            conjonctivite:"oui",
            mauxTete:"oui",
            douleurmusculaire:"oui",
            fatige:"non",
            vomi:"oui",
            diarrhee:"oui",
            perteOdora:"non",
            perteGout:"non",
            autreSigne:"non",
            syntomesEntourage:"non"
          },
        ]
    }
  ]

  ngOnInit(): void {

  }

  modok():void{
    this.mod = false;
  }

  modno():void{
    this.mod = true;
  }

   includesStr(values, str) {
      return values.map(function (value) {
        return String(value);
      }).find(function (value) {
        return value.includes("Lets");
      });
    }

  onKey(event: any) { // without type info
    this.datas = this.datas.filter(function (item) {
      return !this.includesStr(Object.values(item), event.target.value);
    });

    console.log(event.target.value);

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

}
