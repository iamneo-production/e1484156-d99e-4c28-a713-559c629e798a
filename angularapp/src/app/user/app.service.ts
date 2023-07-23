import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type CallBackFunction = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BookedEventDetails: any = []
  singleEventDetails:any
  DeletionId: number;
  EditingId: number;
  BookEventThemeName : any;
  eventId:number;

  constructor(private http: HttpClient) { }

  GetBookedEvent() {
    return this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/user/getAllThemes');
  }

  GetBookedEventById(eventId:number,cb:CallBackFunction){
    (this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/user/getBookedTheme/'+eventId).subscribe((response) => {
      cb(response);
    }
    ));
  }

  DeleteBookedEvent(item: any) {
    if (confirm("Are you sure want to delete this event ??")) {
      this.http.delete('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/user/deleteTheme/' + item.eventId).subscribe(res => console.log(res));
    }
  }

  AddEvent(theme:any[],event: any, food: string,addon:string,userId:number,total:number) {
    
    this.http.post(
      'https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/user/bookTheme',
      {
        "applicantAddress": event.applicantAddress,
        "applicantEmail": event.applicantEmail,
        "applicantMobile": event.applicantMobile,
        "applicantName": event.applicantName,
        "eventAddress": theme[0]['themeAddress'],
        "eventDate": event.eventDate,
        "eventTime": event.eventTime,
        "eventmenuIds": food,
        "themeId": (theme[0]['themeId']),
        "addOnIds": addon,
        "EventCost": total.toString(),
        "noOfPeople":event.noOfPeople,
        "userID": userId
      }).subscribe(res => console.log(res));
    alert('Event Booked')
  }

  
  EditEvent(theme:any,eventid:number,event: any, food: string,addon:string,userid:number,total:number) {
      this.http.put('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/user/editTheme/' + eventid, {
        "eventId":eventid,
        "applicantAddress": event.applicantAddress,
        "applicantEmail": event.applicantEmail,
        "applicantMobile": event.applicantMobile,
        "applicantName": event.applicantName,
        "eventAddress": theme.themeAddress,
        "eventDate": event.eventDate,
        "eventTime": event.eventTime,
        "eventmenuIds": food,
        "themeId": theme.themeId,
        "addOnIds": addon,
        "EventCost": total,
        "noOfPeople":event.noOfPeople,
        "userId": userid
      }).subscribe(res => console.log(res));
  }
}
