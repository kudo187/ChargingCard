import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  developmentClick(){
    swal({
      type: 'warning',
      title: 'Dịch vụ đang phát triên...',
      text: '!!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
