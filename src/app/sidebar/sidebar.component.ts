import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public commonService: CommonService) {  }

  sidebarItems = [
    {link: '/admin', label: 'Dashboard', icon: 'dashboard'},
    {label: 'Components', icon: 'apps', subItem: [
      {link: '/admin/components/buttons', label: 'buttons', icon: 'b'},
      {link: '/admin/components/grids', label: 'grid System', icon: 'gs'},
      {link: '/admin/components/panels', label: 'panels', icon: 'p'},
      // {link:'/components/alerts',label:'alerts',icon:'a'},
      // {link:'/components/notifications',label:'notifications',icon:'n'},
      {link: '/admin/components/icons', label: 'icons', icon: 'i'},
      {link: '/admin/components/typography', label: 'typography', icon: 't'},
    ]},
    {label: 'Forms', icon: 'ballot', subItem: [
      {link: '/admin/forms/basic', label: 'basic form', icon: 'bf'},
      {link: '/admin/forms/advance', label: 'advanced form', icon: 'af'},
      {link: '/admin/forms/custom', label: 'custom form', icon: 'cf'},
      // {link:'/forms/validations',label:'Form Validation',icon:'fv'}
    ]},
    {label: 'Pages', icon: 'pages', subItem: [
      {link: '/admin/pages/notfound', label: 'Not Found', icon: 'nf'},
      {link: '/admin/pages/auth', label: 'Auth', icon: 'A'}
    ]},
    { label: 'Tables', icon: 'grid_on', subItem: [
      {link: '/admin/tables/basic', label: 'Basic Table', icon: 'BT'},
      {link: '/admin/tables/smart', label: 'smart table', icon: 'ST'}
    ]},
    {label: 'Card manage', icon: 'note',subItem:[
      {link: '/admin/list/card',label:'List', icon:'L'}
    ]}
    // {link: '/charts', label: 'Charts', icon: 'show_chart'},
    // {link: '/maps', label: 'Maps', icon: 'place'},
    // {link: '/editors', label: 'Editors', icon: 'edit'},
    // {link: '/calendar', label: 'Calendar', icon: 'date_range'},
    // {label: 'Menu', icon: 'menu', subItem: [
    //   {link: 'void()', label: 'Sub Menu L1', icon: 'l1'},
    //   { label: 'Sub Menu L1', icon: 'l1' , subItem: [
    //     {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
    //     {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
    //   ]},
    // ]}
  ];

}
