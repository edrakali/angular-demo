import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary', // this is the name of pipe used to HTML
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number){
        if (!value) {
            return null;
        } // will return undefined

        return value.substr(0, limit ?? 10) + '...'; // returns only 10 characters
    }
}
