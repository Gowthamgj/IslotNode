import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
    static datevalidate(control: AbstractControl): ValidationErrors | null {
        const dated = control.value + '';
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1; // since January is 0!
        const yyyy = today.getFullYear();
        const days = dated.split('-');
        // console.log(days);
        const todaydate =  days[2];
        const todaymonth = parseInt( dated.split('-')[1]);
        const thisyear = parseInt( dated.split('-')[0]);
        if ( thisyear >= yyyy ) {
            if ( todaymonth >= mm && parseInt(todaydate) >= dd) {
                    return null;
            }
            return {
                'datevalidate' :  true
               };
        } else {
           return {
            'datevalidate' :  true
           };
       }
    }
    static validatedate(control: AbstractControl): ValidationErrors | null {
        const starttime = control.get('starttime').value + '';
        const endtime = control.get('endtime').value + '' ;
        // console.log(starttime.split(':')[0]);
        // console.log(endtime.split(':')[0]);
        if ( starttime.split(':')[0] < endtime.split(':')[0]) {
            return null;
        } else {
            return {'invalidatedate': true};
        }
    }
}
