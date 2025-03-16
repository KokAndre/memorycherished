export enum AppRoutes {
    Home = '/home',
    Login = '/members/login',
    Register = '/members/register',
}

export enum Endpoints {
    // The first item is to point to the server
    // BaseURL = 'https://your-website/api',
    BaseURL = 'http://localhost/memory-cherished-api/public/api',

    // Members endpoints
    Login = '/members/login',
    Register = '/members/register'
}

export enum CallTypes {
    Service = 'Service',
}



export enum SessionStorageKeys {
    Token = 'token',
    AuthToken = 'auth_token'
}


export enum ModalTypes {
    InformationModal = 'informationModal',
    PDFModal = 'pdfModal',
    ConfirmationModal = 'confirmationModal',
}

export enum ModalOutcomeOptions {
    Close = 'close',
    Cancel = 'cancel',
    Confirm = 'confirm',
    Update = 'update'
}