import { Component, OnInit } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { ModalController } from '@ionic/angular';
import { HomeItemComponent } from './home-item/home-item.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public mockDataList: MockDataItem[]
  public loading: boolean;

  constructor(private _mockDataService: MockDataService, private _modalController: ModalController) {
    this.loading = true;
  }

  public ngOnInit(): void {
    timer(2000).subscribe(() => {
      this.mockDataList = this._mockDataService.GetMockData();
      this.loading = false;
    });
  }

  public async openListItem(mockDataItem: MockDataItem): Promise<void> {
    console.warn(mockDataItem);
    let modal = this._modalController.create({
      component: HomeItemComponent,
      componentProps: {
        "mockDataItem": mockDataItem
      }
    });

    (await modal).present();
  }
}


export class MockDataItem {
  public image: string;
  public title: string;
  public description: string;

  constructor(init?: Partial<MockDataItem>) {
    Object.assign(this, init);
  }
}