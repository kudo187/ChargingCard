import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggin = false;
  showLogin = false;
  username;
  surplus;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogin();
    this.funJavascript();
    if(sessionStorage.getItem('cl-isLoggedin'))
    {
      this.isLoggin = true;
      this.username = sessionStorage.getItem('cl-username');
      this.surplus = sessionStorage.getItem('cl-gold');
    } 
    else
    {
      this.isLoggin = false;
    }   
    
  }
  
  isLogin(){
    if(this.router.url === "/register")
    {
      this.showLogin = false;
    }
    else{
      this.showLogin = true;
    }
  }
  

  logOutUser(){
    sessionStorage.removeItem('cl-gold');
    sessionStorage.removeItem('cl-username');
    sessionStorage.removeItem('cl-isLoggedin');
    this.username = null;
    this.surplus = null;  
    this.isLoggin = false;
    this.router.navigate(['/home']);
  }
  funJavascript(){
    ( function( $ ) {
      $( document ).ready(function() {
      $('#cssmenu li.has-sub>a').on('click', function(){
          $(this).removeAttr('href');
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
          }
          else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
          }
        });
      
        $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
      
        if ($('#cssmenu').length != 0){
          (function getColor() {
            var r, g, b;
            var textColor = $('#cssmenu').css('color');
            textColor = textColor.slice(4);
            r = textColor.slice(0, textColor.indexOf(','));
            textColor = textColor.slice(textColor.indexOf(' ') + 1);
            g = textColor.slice(0, textColor.indexOf(','));
            textColor = textColor.slice(textColor.indexOf(' ') + 1);
            b = textColor.slice(0, textColor.indexOf(')'));
            var l = rgbToHsl(r, g, b);
            if (l > 0.7) {
              // $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
              $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
            }
            else
            {
              // $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
              $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
            }
          })();
        }
      
        function rgbToHsl(r, g, b) {
            r /= 255, g /= 255, b /= 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;
      
            if(max == min){
                h = s = 0;
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch(max){
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return l;
        }
      });
      } )( jQuery );
  }

}
