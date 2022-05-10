import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsHomeService {

  constructor() { }

  getCommonConfigs() {
    return [

    ];
  }


  getTabHeads() {
    return [
      {
        id:'1',
        title:'COMMON CONFIGURATION',
        configs:[
          {
            id:'1',
            title:'Application Configuration',
            subtitles:[
              {
                id:'1',
                title:'Application management',
                route:'abcd'
              },
              {
                id:'2',
                title:'Section Management',
                route:'abcd'
              },
              {
                id:'3',
                title:'Task Management',
                route:'abcd'
              },
              {
                id:'4',
                title:'Page management',
                route:'abcd'
              }
            ]
          },
          {
            id:'2',
            title:'System User Management',
            subtitles:[
              {
                id:'1',
                title:'Password Policy',
                route:'abcd'
              },
              {
                id:'2',
                title:'User Role Management',
                route:'abcd'
              },
              {
                id:'3',
                title:'User Management',
                route:'usermanage'
              },
              {
                id:'4',
                title:'Level Management',
                route:'abcd'
              }
            ]
          },
          {
            id:'3',
            title:'System Configurations',
            subtitles:[
              {
                id:'1',
                title:'Application management'
              },
              {
                id:'2',
                title:'Section Management'
              },
              {
                id:'3',
                title:'Task Management'
              },
              {
                id:'4',
                title:'Page management'
              }
            ]
          },
          {
            id:'4',
            title:'Profile Management',
            subtitles:[
              {
                id:'1',
                title:'Application management'
              },
              {
                id:'2',
                title:'Section Management'
              },
              {
                id:'3',
                title:'Task Management'
              },
              {
                id:'4',
                title:'Page management'
              }
            ]
          },
          {
            id:'5',
            title:'File Download',
            subtitles:[
              {
                id:'1',
                title:'Application management'
              },
              {
                id:'2',
                title:'Section Management'
              },
              {
                id:'3',
                title:'Task Management'
              },
              {
                id:'4',
                title:'Page management'
              }
            ]
          }
        ]
      },
      {
        id:'2',
        title:'ISSUING CONFIGURATION'
      },
      {
        id:'3',
        title:'APPLICATION PROCESSING'
      },
      {
        id:'4',
        title:'ISSUANCE & PERSONALIZATION'
      },
      {
        id:'5',
        title:'BACK OFFICE OPERATION'
      },
      {
        id:'6',
        title:'COLLECTION AND RECOVERIES'
      }
    ];
  }
}
