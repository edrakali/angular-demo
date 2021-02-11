import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { sleep } from './functions';

export class CustomValidators {
    static ContainsNoSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {ContainsNoSpace: true};
        }
        return null;
    }

    static async UniqueUsername(control: AbstractControl): Promise<ValidationErrors | null> {
        await sleep(2000);
        if (control.value == 'mosh') {
            return {UniqueUsername: true};
        }

        return null;
    }

    static async oldPasswordShouldMatch(control: AbstractControl): Promise<ValidationErrors | null>{
        await sleep(1000);
        if (control.value != '1234') {
            return {oldPasswordShouldMatch: true};
        }

        return null;
    }

    static passwordsShouldMatch(group: FormGroup): ValidationErrors | null {
        const password1 = group.get('newPassword').value;
        const password2 = group.get('confirmPassword').value;
        // console.log("password1: ", password1);
        // console.log("password2: ", password2);
        if (password1 == '' || password1 != password2) {
            return {passwordsShouldMatch: true};
        }

        return null;
    }


}
