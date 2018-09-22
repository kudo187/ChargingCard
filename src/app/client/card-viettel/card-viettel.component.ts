import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-vietel',
  templateUrl: './card-viettel.component.html',
  styleUrls: ['./card-viettel.component.scss']
})
export class CardViettelComponent implements OnInit {
  pay;
  discount = 2.8;
  denominations;
  quantity = 1;
  constructor() { }

  ngOnInit() {
    $(".BlockBank a").click(function () {
      if ($("#infoGoldCharge").length != 0) {
        $("#infoGoldCharge .bankName").val($(this).attr("data-name"));
        $("#infoGoldCharge").show();
        $("html, body").stop().animate({ scrollTop: $("#infoGoldCharge").offset().top }, 400);
      } else if ($("#napTienMatSection").length != 0) {
        $("#napTienMatSection .bankName").val($(this).attr("data-name"));
        $("#napTienMatSection").show();
        $("html, body").stop().animate({ scrollTop: $("#napTienMatSection").offset().top - 15 }, 400);
      } else if ($("#muaTheGate").length != 0) {
        $("#muaTheGate .cardCost").val($(this).attr("data-cost"));
        $("#muaTheGate").show();
        $("html, body").stop().animate({ scrollTop: $("#muaTheGate").offset().top - 30 }, 400);
      }
    });
    $(".BlockBank ul li a").click(function () {
      $(".BlockBank ul li a").each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
  }

  resetPayAndPrice(price){
    this.denominations = price;
    this.pay = this.denominations - this.denominations * this.discount / 100 * this.quantity;
  }


}
