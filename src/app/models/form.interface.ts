import {ValidatorFn, Validators} from "@angular/forms";

/**
 * Interface représentant le formulaire.
 */
export interface IForm {
  formTitle: string;
  formControls: IFormControl[];
  saveBtnTitle?: string;
  resetBtnTitle?: string;
}

/**
 * Interface représentant un contrôle de formulaire.
 */
export interface IFormControl {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  class?: string;
  type: string;
  options?: IOption[];
  radioOptions?: string[];
  validators?: IValidator[];
}

/**
 * Interface représentant un validateur de formulaire.
 */
export interface IValidator {
  validatorName?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  message?: string;
  email?: string;
  pattern?: string;
  customValidator?: ValidatorFn;
}

/**
 * Interface représentant une option de formulaire (pour les selects).
 */
interface IOption {
  id?: number | string;
  value?: string;
}
