import { Injectable } from "@angular/core";
import { MockDataItem } from './home.page';

@Injectable()
export class MockDataService {
    constructor() {}

    public GetMockData(): MockDataItem[] {
        let result: MockDataItem[] = [];
        for (let i = 0; i < 5; i++) {
            result.push(new MockDataItem({
                title: `Тут может быть всё что угодно ${i}`,
                description: `Это подробное описание всего что угодно ${i}`,
                image: ''
            }));
        }
        return result;
    }
}