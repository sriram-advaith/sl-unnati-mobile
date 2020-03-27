import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from '../toast.service';
import { MyReportsService } from './my-reports.service';
import { MyschoolsService } from '../myschools/myschools.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';

declare var cordova: any;
@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.page.html',
  styleUrls: ['./my-reports.page.scss'],
})
export class MyReportsPage {
  isIos;
  appFolderPath;
  back = "project-view/home";
  connected: any = navigator.onLine;
  constructor(
    public router: Router,
    public screenOrientation: ScreenOrientation,
    public file: File,
    public platform: Platform,
    public socialSharing: SocialSharing,
    public fileChooser: FileChooser,
    public base64: Base64,
    public fileOpener: FileOpener,
    public transfer: FileTransfer,
    public toastService: ToastService,
    public myReportsService: MyReportsService,
    public mySchoolsService: MyschoolsService,
    public api: ApiProvider,
    public storage: Storage
  ) {
    myReportsService.reportEvent.subscribe((data: any) => {
      // this.share(data);
      this.platform.ready().then(() => {
        this.isIos = this.platform.is('ios') ? true : false;
        this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
        if (data.isFullReport) {
          this.getFullReport(data);
        } else {
          this.getReport(data);
        }
      })
    });
  }

  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  //  Go back 
  public goBack() {
    this.router.navigate(['/project-view/home']);
  }
  public getReport(mySchools: any) {
    if (this.connected) {
      this.myReportsService.getReportData(mySchools).subscribe((data: any) => {
        this.toastService.stopLoader();
        if (data.status != 'failed') {
          if (mySchools.type === 'share') {
            this.share(data);
          } else {
            this.toastService.stopLoader();
            this.download(data);
          }
        }
      }, error => {
        this.toastService.stopLoader();
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }

  public getFullReport(mySchools: any) {
    if (this.connected) {
      this.myReportsService.getFullReportData(mySchools).subscribe((data: any) => {
        this.toastService.stopLoader();
        if (data.status != 'failed') {
          if (mySchools.type === 'share') {
            this.share(data);
          } else {
            this.download(data);
          }
        }
      }, error => {
        this.toastService.stopLoader();
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }

  public share(data) {
    this.toastService.startLoader('Loading Please wait');
    const fileName = 'Report';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
        let data = base64File.split(',');
        let base64Data = "data:application/pdf;base64," + data[1];
        this.socialSharing.share("", fileName, base64Data, "").then((data) => {
          this.toastService.stopLoader();
        }, error => {
          this.toastService.stopLoader();
          // intentially left blank
        });
      }, (err) => {
        this.toastService.stopLoader();
      });
    }, (error) => {
      this.toastService.stopLoader();
    });
  }

  public download(data) {
    fetch(data.pdfUrl,
      {
        method: "GET"
      }).then(res => res.blob()).then(blob => {
        this.appFolderPath = decodeURIComponent(this.appFolderPath);
        let filename = decodeURIComponent('Report');
        this.file.writeFile(this.appFolderPath, 'Report', blob, { replace: true }).then(res => {
          this.fileOpener.open(
            res.toInternalURL(),
            'application/pdf'
          ).then((res) => {
          }).catch(err => {
          });
        }).catch(err => {
        });
      }).catch(err => {
      });
  }
}