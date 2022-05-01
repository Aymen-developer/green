import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(public authService: AuthService,private elementRef:ElementRef,private http: HttpClient) { }
  
  ngOnInit(): void {
    localStorage.setItem("adminloc","Ben Arous") 
    localStorage.setItem("admintyp","type_chemical") 
    localStorage.setItem("capture", "1");
    this.getInfo();
    localStorage.setItem("picc1","assets/img/empty.jpg");
    localStorage.setItem("picc2","assets/img/empty.jpg");
    localStorage.setItem("picc3","assets/img/empty.jpg");
    localStorage.setItem("picc4","assets/img/empty.jpg");
    localStorage.setItem("picc5","assets/img/empty.jpg");
  }

  refresh(): void {
    window. location. reload();
    }


  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var loc = localStorage.getItem("adminloc") ;
      this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+"/.json",httpOptions).subscribe(responseData => {
       console.log(responseData);

    if (typeof responseData =="object") {
  
   Object.entries(responseData).map(a => {
      console.log(a[1])
  //@ts-ignore
   document.getElementById("admin_acc").insertAdjacentHTML('beforeend', ' <br><br><br> <div id="'+a[0]+'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/fr-news.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;'+a[1].location+' &nbsp;           <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].date+'   <img  id="'+a[0]+'remove" (click)="remove('+"'"+ a[0]+"'"+')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">     <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="'+a[0]+'modify" (click)="modifyn('+"'"+ a[0]+"'"+')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">     </h5> &nbsp;      <p class="card-text">'+a[1].type+'</p>      <p class="card-text bg-dark">'+"email:    "+a[1].email+'</p>  <p class="card-text bg-dark">'+"password:   "+a[1].password+'</p>       </div>  </div>');
   this.elementRef.nativeElement.querySelector('#'+ a[0]+'remove').addEventListener('click', this.remove.bind(this));
   this.elementRef.nativeElement.querySelector('#'+ a[0]+'modify').addEventListener('click', this.modifyn.bind(this));

         })
         ;
          }})
}


  // @ts-ignore
  remove(str) {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.authService.deleteUser(str);
    var loc = localStorage.getItem("adminloc") ;

    if (typeof str == "object") {
    var x = str.srcElement.id
    } else {x = str
      }
  
      x = x.replace('remove','');
      this.http.delete("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+"/"+x+".json",httpOptions).subscribe(responseData => {
      this.refresh();

  }) }

 


  // @ts-ignore
  modifyn(str) {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var h = String(today.getHours()).padStart(2, '0');
      var m = String(today.getMinutes()).padStart(2, '0');
      var s = String(today.getSeconds()).padStart(2, '0');
      var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
  
    var loc = localStorage.getItem("adminloc") ;
    if (typeof str == "object") {
      var x = str.srcElement.id
      } else {x = str
        }
    
        x = x.replace('modify','');
        console.log(x);
          this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+"/"+x+".json",httpOptions).subscribe(responseData => {
        console.log(responseData);
    if (typeof responseData =="object") {
    
  
     // @ts-ignore
     document.getElementById("admin_acc").insertAdjacentHTML('afterbegin', '<div id="'+x+'div" class="card text-white bg-secondary mb-3"> <div class="card-body"> <h5> <label for="idlocation">Location</label> <input type="text" class="form-control" id="idlocationx" placeholder="type"> <label for="idtypex">Type</label> <textarea type="textarea" class="form-control" id="idtypex" placeholder="type" rows="3"></textarea> <label for="idtitlex">email</label> <textarea type="textarea" class="form-control" id="idemailx" placeholder="email" rows="5" required></textarea>  <label for="idtitlex">password</label> <textarea type="textarea" class="form-control" id="idpasswordx" placeholder="password" rows="5" required></textarea> <br><button type="file" (click)="modify('+"'"+ x +"'"+')" accept="image/*" class="btn text-end btn-warning"> <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;" alt="">&nbsp; Modifier</button></h5> </div></div> ');
      this.modify(x);
  
    }})

  
  }
  
  
  // @ts-ignore
  modify(str) {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var h = String(today.getHours()).padStart(2, '0');
      var m = String(today.getMinutes()).padStart(2, '0');
      var s = String(today.getSeconds()).padStart(2, '0');
      var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
      this.authService.SetUserData(str)

    var loc = localStorage.getItem("adminloc") ;
  
  
    if (typeof str == "object") {
      var x = str.srcElement.id
      } else {x = str
        }
    
        x = x.replace('modify','');
  
  
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+"/.json",httpOptions).subscribe(responseData => {
      console.log(responseData);
  
  if (typeof responseData =="object") {
  

  // @ts-ignore
  document.getElementById("admin_acc").insertAdjacentHTML('afterbegin', ' <br><br><br> <div id="'+x+'div" <button type="file" (click)="modify('+"'"+ x+"'"+')" accept="image/*" class="btn text-end btn-warning"> <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;" alt="">&nbsp; Modifier</button></h5> </div></div> ');
  
    
  
        const object =  {
          email:(document.getElementById("emailx")as HTMLFormElement)['value'],
          password:(document.getElementById("passwordx")as HTMLFormElement)['value'],
          type: (document.getElementById("typex") as HTMLFormElement)['value'] ,
          location: loc,
          date: time,
           // @ts-ignore
      }
  
      this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/admin_acc/"+loc+"/"+x+".json",object,httpOptions).subscribe(responseDataa => {
      this.refresh();
    })
  
  
      }})
  
  
  
  }
    

  
}
