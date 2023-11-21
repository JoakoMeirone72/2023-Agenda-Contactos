import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { Contacto } from '../interfaces/Contacto';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ContactsService extends ApiService {

  async create(contacto:Contacto):Promise<boolean>{
    if(contacto.id) return false;
    const res = await fetch(API+'Contact',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'Contact?id='+id,{
      method:'DELETE',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
    })
    if(res.status == 204){
      return true;
    } else{
      return false;
    }

  };
  
  async edit(contacto:Contacto):Promise<boolean>{
    if(!contacto.id) return false;
    const res = await fetch(API+'Contact?contactId='+contacto.id,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };
  
  async getAll():Promise<Contacto[]>{
    const res = await this.getAuth("Contact")
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id:number | string):Promise<Contacto | undefined>{
    const res = await this.getAuth("Contact/"+id);
    const resJson = await res.json();
    return resJson[0];
  };

}