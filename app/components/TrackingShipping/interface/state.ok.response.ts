export interface StateSuccess {
    msg:    string;
    status: boolean;
    result: ResultInfoState[];
}

export interface ResultInfoState {
    code:        string;
    date:        DateClass;
    cliente:     string;
    receives:    string;
    service:     string;
    address:     string;
    postal_code: string;
    location:    string;
    reference:   string;
    state_id:    number;
    state:       string;
    bultos:      number;
    price:       string;
    price_iva:   number;
    armado:      string;
    etiquetado:  string;
    materiales:  string;
}

export interface DateClass {
    date:          Date;
    timezone_type: number;
    timezone:      string;
}
