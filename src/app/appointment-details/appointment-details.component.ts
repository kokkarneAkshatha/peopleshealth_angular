import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { SharedService } from '../shared.service';
import { ApoointmentService } from '../service/apoointment.service';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})

export class AppointmentDetailsComponent implements OnInit {
  appointment:Appointment[];
  constructor( private auth: AuthService,private sharedService: SharedService,private appointmentservice:ApoointmentService) { }

  ngOnInit() {
    this.sharedService.appointment.patient_id=sessionStorage.getItem("LoggedInUser");
    this.appointmentservice.Appoinmentdetails(this.sharedService.appointment).subscribe(data=>{this.appointment=data
     

    });

  }

}
