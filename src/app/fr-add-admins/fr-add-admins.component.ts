import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-fr-add-admins',
  templateUrl: './fr-add-admins.component.html',
  styleUrls: ['./fr-add-admins.component.css']
})
export class FrAddAdminsComponent implements OnInit {

  constructor(
    public authService: AuthService,private elementRef:ElementRef,private http: HttpClient
  ) { }

  ngOnInit(): void {
    localStorage.setItem("adminloc","Ben Arous") 
    localStorage.setItem("admintyp","type_chemical") 
    localStorage.setItem("capture", "1");
  //  this.getInfo();
    localStorage.setItem("picc1","assets/img/empty.jpg");
    localStorage.setItem("picc2","assets/img/empty.jpg");
    localStorage.setItem("picc3","assets/img/empty.jpg");
    localStorage.setItem("picc4","assets/img/empty.jpg");
    localStorage.setItem("picc5","assets/img/empty.jpg");
  }
  
 // getInfo() {
 //   const httpOptions = {
 //     headers: new HttpHeaders()
  //  }
  //  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  //  httpOptions.headers.append('Content-Type', 'application/json');
  //  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
 //   var loc = localStorage.getItem("adminloc") ;

   //   this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/.json",httpOptions).subscribe(responseData => {
   //     console.log(responseData);

 /// if (typeof responseData =="object") {
  
   //Object.entries(responseData).map(a => {
   //   console.log(a[1])
   // @ts-ignore
   //document.getElementById("events").insertAdjacentHTML('afterbegin', ' <br><br><br> <div id="'+a[0]+'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/fr-news.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;'+a[1].title+' &nbsp;           <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].date_en+'   <img  id="'+a[0]+'remove" (click)="remove('+"'"+ a[0]+"'"+')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">     <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="'+a[0]+'modify" (click)="modifyn('+"'"+ a[0]+"'"+')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">     </h5> &nbsp;      <p class="card-text">'+a[1].subject+'</p>      <p class="card-text bg-dark">'+a[1].description+'</p>      <hr>      <img src="'+a[1].picture1+'" width="150" height="125">      <img src="'+a[1].picture2+'" width="150" height="125">      <img src="'+a[1].picture3+'" width="150" height="125">      <img src="'+a[1].picture4+'" width="150" height="125">      <img src="'+a[1].picture5+'" width="150" height="125">    </div>  </div>');
  // this.elementRef.nativeElement.querySelector('#'+ a[0]+'remove').addEventListener('click', this.remove.bind(this));
  // this.elementRef.nativeElement.querySelector('#'+ a[0]+'modify').addEventListener('click', this.modifyn.bind(this));

     //     })
    //      ;
    //      }})
//}



 // @ts-ignore
 send( email, password) {
  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  this.authService.SignUp(email,password);
  var loc = localStorage.getItem("adminloc") ;
  var typ = localStorage.getItem("admintyp") ;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var h = String(today.getHours()).padStart(2, '0');
  var m = String(today.getMinutes()).padStart(2, '0');
  var s = String(today.getSeconds()).padStart(2, '0');
  var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

  
 
 
      const object =  {
        email:(document.getElementById("emailx")as HTMLFormElement)['value'],
        password:(document.getElementById("passwordx")as HTMLFormElement)['value'],
        type: (document.getElementById("typex") as HTMLFormElement)['value'] ,
        location: loc,
        date: time,
         // @ts-ignore
  
    }

    this.http.post("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+".json",object,httpOptions).subscribe(responseDataa => {
      console.log(responseDataa);

  })


    }




}
