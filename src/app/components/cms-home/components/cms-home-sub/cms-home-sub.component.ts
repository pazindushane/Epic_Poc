import { Component, OnInit } from '@angular/core';
import {CmsHomeService} from "../../services/cms-home.service";

@Component({
  selector: 'app-cms-home-sub',
  templateUrl: './cms-home-sub.component.html',
  styleUrls: ['./cms-home-sub.component.scss']
})
export class CmsHomeSubComponent implements OnInit {
  commonconfig!: any[];
  tabheads!: any[];
  panelOpenState = false;

  constructor(private cmsHomeService:CmsHomeService) { }

  ngOnInit(): void {
    // this.LoadConfigs()
    this.LoadHeads()
  }

  LoadConfigs(){
  this.commonconfig = this.cmsHomeService.getCommonConfigs()
  }

  LoadHeads(){
    this.tabheads = this.cmsHomeService.getTabHeads()
  }

  currentOpenedItemId!: any;

  public handleOpened(item: any): void {
    this.currentOpenedItemId = item;
  }
}
