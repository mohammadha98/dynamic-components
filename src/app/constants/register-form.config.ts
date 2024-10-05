import {IForm} from "../models/form.interface";
import {AbstractControl} from "@angular/forms";

/**
 * Configuration du formulaire d'enregistrement.
 */
export const registerFormConfig: IForm = {
  /** Le titre du formulaire. */
  formTitle: 'Register',

  /** Le titre du bouton de sauvegarde. */
  saveBtnTitle: 'ثبت',

  /** Le titre du bouton de réinitialisation. */
  resetBtnTitle: 'Reset',

  /** Les contrôles du formulaire. */
  formControls: [
    {
      /** Le nom du champ. */
      name: 'firstName',

      /** Le libellé du champ. */
      label: 'FirstName',

      /** La valeur par défaut du champ. */
      value: '',

      /** La placeholder du champ. */
      placeholder: '',

      /** La classe CSS du champ. */
      class: 'col-md-6',

      /** Le type du champ. */
      type: 'text',

      /** Les validateurs du champ. */
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'FirstName is required'
        },
        {
          validatorName: 'minlength',
          minlength: 2,
          message: 'Minimum char should be 2'
        },
        {
          validatorName: 'maxlength',
          maxlength: 30,
          message: 'Maximum char should be 30'
        },
      ]
    },
    {
      name: 'lastName',
      label: 'LastName',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'LastName is required'
        },
        {
          validatorName: 'minlength',
          minlength: 2,
          message: 'Minimum char should be 2'
        },
        {
          validatorName: 'maxlength',
          maxlength: 30,
          message: 'Maximum char should be 30'
        },
      ]
    },
    {
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Email is required'
        },
        {
          validatorName: 'email',
          email: 'email',
          message: 'Email is not valid'
        },
      ]
    },
    {
      name: 'mobile',
      label: 'Mobile',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Mobile is required'
        },
        {
          validatorName: 'maxlength',
          maxlength: 10,
          message: 'Maximum char should be 10'
        },
        {
          validatorName: 'minlength',
          minlength: 8,
          message: 'Minimum char should be 8'
        },
      ]
    },
    {
      name: 'gender',
      label: 'Gender',
      value: '',
      placeholder: '',
      class: 'col-md-12',
      type: 'radio',
      radioOptions: ['Male', 'Female'],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Gender is required'
        }
      ]
    },
    {
      name: 'userRole',
      label: 'Role',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'select',
      options: [
        {
          id: 0,
          value: 'USER'
        },
        {
          id: 1,
          value: 'SUPUSER'
        },
        {
          id: 2,
          value: 'ADMIN'
        }
      ],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Role is required'
        }
      ]
    },
    {
      name: 'creationDate',
      label: 'Creation date',
      value: '',
      placeholder: 'Creation date',
      class: 'col-md-6',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Creation date is required'
        }
      ]
    },
    {
      name: 'comment',
      label: 'Comment',
      value: '',
      placeholder: 'Comment...',
      class: 'col-md-12',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Comment is required'
        }
      ]
    },
    {
      name: 'password',
      label: 'Password',
      value: '',
      placeholder: '',
      class: 'col-md-12',
      type: 'password',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Password is required'
        },
        {
          validatorName: 'customValidator',
          customValidator: (control: AbstractControl<string>) => {
            const value: string = control.value;
            if (value.length) {
              return (value.length > 8 && value.length < 32 && /^[A-Z]/.test(value)) ? null : {customValidator: 'Password invalid'};
            }
            return null;
          },
          message: 'Password must be between 8 and 32 characters long and uppercase letter'
        }
      ]
    }
  ]
};


export const loginFormConfig: IForm = {
  /** Le titre du formulaire. */
  formTitle: 'Login',

  /** Le titre du bouton de sauvegarde. */
  saveBtnTitle: 'ثبت',

  /** Le titre du bouton de réinitialisation. */
  resetBtnTitle: 'Reset',

  /** Les contrôles du formulaire. */
  formControls: [
    {
      /** Le nom du champ. */
      name: 'firstName',

      /** Le libellé du champ. */
      label: 'FirstName',

      /** La valeur par défaut du champ. */
      value: '',

      /** La placeholder du champ. */
      placeholder: '',

      /** La classe CSS du champ. */
      class: 'col-md-6',

      /** Le type du champ. */
      type: 'text',

      /** Les validateurs du champ. */
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'FirstName is required'
        },
        {
          validatorName: 'minlength',
          minlength: 2,
          message: 'Minimum char should be 2'
        },
        {
          validatorName: 'maxlength',
          maxlength: 30,
          message: 'Maximum char should be 30'
        },
      ]
    },
    {
      name: 'lastName',
      label: 'LastName',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'LastName is required'
        },
        {
          validatorName: 'minlength',
          minlength: 2,
          message: 'Minimum char should be 2'
        },
        {
          validatorName: 'maxlength',
          maxlength: 30,
          message: 'Maximum char should be 30'
        },
      ]
    },
    {
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Email is required'
        },
        {
          validatorName: 'email',
          email: 'email',
          message: 'Email is not valid'
        },
      ]
    },
    {
      name: 'mobile',
      label: 'Mobile',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Mobile is required'
        },
        {
          validatorName: 'maxlength',
          maxlength: 10,
          message: 'Maximum char should be 10'
        },
        {
          validatorName: 'minlength',
          minlength: 8,
          message: 'Minimum char should be 8'
        },
      ]
    },
    {
      name: 'gender',
      label: 'Gender',
      value: '',
      placeholder: '',
      class: 'col-md-12',
      type: 'radio',
      radioOptions: ['Male', 'Female'],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Gender is required'
        }
      ]
    },
    {
      name: 'userRole',
      label: 'Role',
      value: '',
      placeholder: '',
      class: 'col-md-6',
      type: 'select',
      options: [
        {
          id: 0,
          value: 'USER'
        },
        {
          id: 1,
          value: 'SUPUSER'
        },
        {
          id: 2,
          value: 'ADMIN'
        }
      ],
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Role is required'
        }
      ]
    },
    {
      name: 'creationDate',
      label: 'Creation date',
      value: '',
      placeholder: 'Creation date',
      class: 'col-md-6',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Creation date is required'
        }
      ]
    },
    {
      name: 'comment',
      label: 'Comment',
      value: '',
      placeholder: 'Comment...',
      class: 'col-md-12',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Comment is required'
        }
      ]
    },
    {
      name: 'password',
      label: 'Password',
      value: '',
      placeholder: '',
      class: 'col-md-12',
      type: 'password',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Password is required'
        },
        {
          validatorName: 'customValidator',
          customValidator: (control: AbstractControl<string>) => {
            const value: string = control.value;
            if (value.length) {
              return (value.length > 8 && value.length < 32 && /^[A-Z]/.test(value)) ? null : {customValidator: 'Password invalid'};
            }
            return null;
          },
          message: 'Password must be between 8 and 32 characters long and uppercase letter'
        }
      ]
    }
  ]
};
