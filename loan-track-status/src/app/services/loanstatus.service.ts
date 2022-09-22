
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Loan } from '../models/Loan';
import { LoanModel } from '../models/LoanModel';

@Injectable({
  providedIn: 'root'
})
export class LoanStatusService {

  private baseUrl="http://localhost:8088/bank";

  constructor(private http: HttpClient) { }



  getLoanById(id:number):Observable<Loan>{
    console.warn("checking for track: "+ id)
    return this.http.get<Loan>("http://localhost:8088/bank/"+id)   
    .pipe(map((res:any)=>{
      console.warn(res.status)
      return res;
    }))  
  }
 


  postUserForm(loanModel: LoanModel): Observable<any>{
    return this.http.post('https://putsreq.com/07tPrmWiACNyJzR5EH0B',loanModel);
     // return of(userSettings);
   }

}
