import { AbstractControl, FormControl } from "@angular/forms";
import * as CryptoJS from 'crypto-js';

export class SessionStorageHelper {
    static storeItem(key: string, value: string) {
        sessionStorage.setItem(key, value);
        return sessionStorage.getItem(key);
    }

    static getItem(key: string) {
        return sessionStorage.getItem(key);
    }

    static removeItem(key: string) {
        sessionStorage.removeItem(key);
    }

    static clearAllItems() {
        sessionStorage.clear();
    }

    static storeArrayItem(key: string, value: any) {
        let item = this.getItem(key);
        // Does not yet exist - Create it
        if (!item) {
            sessionStorage.setItem(key, '[' + value + ']');
        } else {
            item = item.replace('[', '').replace(']', '') + ', ' + value;
            // Append to the list
            sessionStorage.setItem(key, '[' + item + ']');
        }
    }

    static getArrayItem(key: any) {
        const item = sessionStorage.getItem(key);

        return JSON.parse(item ? item : '') as Array<string>;
    }

}

export class LocalStorageHelper {
    static storeItem(key: string, value: string) {
        localStorage.setItem(key, value);
        return localStorage.getItem(key);
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }

    static clearAllItems() {
        localStorage.clear();
    }

    static storeArrayItem(key: string, value: any) {
        let item = this.getItem(key);
        // Does not yet exist - Create it
        if (!item) {
            localStorage.setItem(key, '[' + value + ']');
        } else {
            item = item.replace('[', '').replace(']', '') + ', ' + value;
            // Append to the list
            localStorage.setItem(key, '[' + item + ']');
        }
    }

    static getArrayItem(key: any) {
        const item = localStorage.getItem(key);

        return JSON.parse(item ? item : '') as Array<string>;
    }

}

export class AppHelperFunction {
    static removeNonNumericCharacters(value: string) {
        value = value.toString().replace(/[^0-9]*/g, '');
        return value;
    }

    static openDocumentInNewTab(urlToOpen: string) {
        window.open(urlToOpen, '_blank');
    }

    public static thousandSeporatorWithComma(value: string) {
        if (value) {
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return value;
        }
    }

    public static thousandSeporatorWithWhiteSpace(value: string) {
        if (value) {
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return value;
        }
    }

    public static includeDecimalsOnInputValue(value: string, formControl?: any) {
        // Make sure the value comming through is a string
        value = value.toString();

        let valueBeforeDeciaml = '';
        let decimalValue = '';

        const includesDecimal = value.includes('.');
        if (includesDecimal) {
            valueBeforeDeciaml = this.removeNonNumericCharacters(value.split('.')[0]);
            const decimalVal = this.removeNonNumericCharacters(value.split('.')[1] ? value.split('.')[1] : '');
            if (decimalVal?.length > 2) {
                decimalValue = decimalVal.substr(0, 2);
            } else if (decimalVal?.length === 1) {
                decimalValue = `${decimalVal}0`;
            } else if (decimalVal?.length === 0) {
                decimalValue = '00';
            } else {
                decimalValue = decimalVal;
            }
        } else {
            valueBeforeDeciaml = this.removeNonNumericCharacters(value);
            decimalValue = '00';
        }

        value = `${this.thousandSeporatorWithComma(valueBeforeDeciaml ? valueBeforeDeciaml : '0')}.${decimalValue}`;

        // Update the value on the form
        if (formControl) {
            formControl.setValue(value);
        } else {
            return value;
        }
    }

    public static inputBoxSeparatorWithDecimalsAndCommas(value: string, formControl?: any) {
        // Make sure the value comming through is a string
        value = value.toString();

        let valueBeforeDeciaml = '';
        let decimalValue = '';

        const includesDecimal = value.includes('.');
        if (includesDecimal) {
            valueBeforeDeciaml = this.removeNonNumericCharacters(value.split('.')[0]);
            const decimalVal = this.removeNonNumericCharacters(value.split('.')[1] ? value.split('.')[1] : '');
            if (decimalVal?.length > 2) {
                decimalValue = decimalVal.substr(0, 2);
            } else {
                decimalValue = decimalVal;
            }
        } else {
            valueBeforeDeciaml = this.removeNonNumericCharacters(value);
        }

        if (includesDecimal) {
            value = `${this.thousandSeporatorWithComma(valueBeforeDeciaml)}.${decimalValue}`;
        } else {
            value = this.thousandSeporatorWithComma(valueBeforeDeciaml);
        }

        if (formControl) {
            // Update the value on the form
            formControl.setValue(value);
        } else {
            return value;
        }

    }

    public static inputBoxSeparatorWithoutDecimals(value: string, formControl?: any) {
        // Make sure the value comming through is a string
        value = value.toString();

        let formattedValue = this.removeNonNumericCharacters(value);

        formattedValue = this.thousandSeporatorWithComma(formattedValue);

        if (formControl) {
            // Update the value on the form
            formControl.setValue(value);
        } else {
            return formattedValue;
        }
    }

    public static inputBoxSeparatorWithoutDecimalsAndWhiteSpaceSeparator(value: string, formControl?: any) {
        // Make sure the value comming through is a string
        value = value.toString();

        let formattedValue = this.removeNonNumericCharacters(value);

        formattedValue = this.thousandSeporatorWithWhiteSpace(formattedValue);

        if (formControl) {
            // Update the value on the form
            formControl.setValue(value);
        } else {
            return formattedValue;
        }
    }

    public static splitStringToArray(stringData: string) {
        let arrayData = stringData.split('\",');
        let returnArray = [];

        arrayData.forEach(item => {
            const itemToPush = item.replaceAll('\\', '')?.replaceAll('[', '')?.replaceAll(']', '')?.replaceAll('"', '')?.replace("`", "'");
            returnArray.push(itemToPush);
        });

        return returnArray;
    }

    public static formatBulletPointInputDataForPrePopulation(itemArray: string[]) {
        if (itemArray?.length) {
          let formattedItem = '';
          itemArray.forEach(item => {
            item = item.replaceAll("`", "'");
            if (formattedItem) {
              formattedItem += `\n• ${item}`;
            } else {
              formattedItem += `• ${item}`;
            }
    
          });
          return formattedItem;
        } else {
          return '';
        }
      }
}