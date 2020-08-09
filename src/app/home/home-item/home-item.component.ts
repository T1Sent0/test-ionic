import { Component, Input, OnInit } from "@angular/core";
import { MockDataItem } from '../home.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'home-item',
    templateUrl: './home-item.component.html',
    styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
    @Input('mockDataItem') public mockDataItem: MockDataItem;

    constructor(private _modalController: ModalController) {}

    public ngOnInit(): void {
        console.warn(this.mockDataItem);
    }

    public dismiss(): void {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this._modalController.dismiss({
            'dismissed': true
        });
    }
}