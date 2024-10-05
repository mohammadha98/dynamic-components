import {Component, inject, input, InputSignal, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IForm, IFormControl, IValidator} from "../models/form.interface";
import {ValidatorsName} from "../constants/validatorsName";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
  
})
export class DynamicFormComponent implements OnInit {
  form: InputSignal<IForm> = input.required<IForm>();
  fb: FormBuilder = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if (this.form()?.formControls) {
      let formGroup: any = {};
      this.form()?.formControls.forEach((control: IFormControl) => {
        const controlValidators: Validators[] = [];
        if (control.validators) {
          control.validators.forEach((validator: IValidator) => {
            if (validator.validatorName === ValidatorsName.REQUIRED) controlValidators.push(Validators.required);
            if (validator.validatorName === ValidatorsName.EMAIL) controlValidators.push(Validators.email);
            if (validator.validatorName === ValidatorsName.MAX_LENGTH) controlValidators.push(Validators.maxLength(validator.maxlength as number));
            if (validator.validatorName === ValidatorsName.MIN_LENGTH) controlValidators.push(Validators.minLength(validator.minlength as number));
            if (validator.validatorName === ValidatorsName.PATTERN) controlValidators.push(Validators.pattern(validator.pattern as string));
            if (validator.validatorName === ValidatorsName.CUSTOM_VALIDATOR) {
              if (validator.customValidator) controlValidators.push(validator.customValidator);
            }
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }

  resetForm(): void {
    this.dynamicFormGroup.reset();
  }


  /**
   * Obtient le message d'erreur du validateur pour un contrôle de formulaire donné.
   * @param control Le contrôle de formulaire pour lequel récupérer le message d'erreur du validateur.
   * @returns Le message d'erreur du validateur, s'il existe. Sinon, une chaîne vide.
   */
  getValidatorError(control: IFormControl): string {
    const formControl: AbstractControl<IForm, any> | null = this.dynamicFormGroup.get(control.name);
    let message: string = '';
    if (formControl) {
      control.validators?.forEach((val: IValidator) => {
        if (formControl.hasError(val.validatorName as string)) {
          message = val.message || '';
        }
      });
    }
    return message;
  }
}
