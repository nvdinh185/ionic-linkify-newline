import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts newlines into html breaks
*/
@Pipe({ name: 'newline' })
export class NewlinePipe implements PipeTransform {
    transform(value: string): any {
        if (value) value = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
        return value;
    }
}