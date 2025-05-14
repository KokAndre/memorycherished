export enum NavigationRoutes {
    Home = '/home',
    Login = '/login',
    Register = '/register',
    About = '/about',
    PlansAndPricing = '/about/plans-and-pricing',
    Groups = '/groups',
    Members = '/groups/members',
    SharedGallery = '/shared-gallery',
    HelpingHand = '/helping-hand',
    SearchResults = '/more/search-results',
    Contact = '/more/contact',
    FAQ = '/more/faq',
    Events = '/more/events'
}

export enum Endpoints {
    // The first item is to point to the server
    // BaseURL = 'https://your-website/api',
    BaseURL = 'http://localhost/memory-cherished-api/public/api',

    // Members endpoints
    Login = '/member/login',
    Register = '/member/register'
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