export interface TrackingSuccess {
    msg:    string;
    status: boolean;
    result: Array<TrackingState[]>;
}

export interface TrackingState {
    date:  string;
    state: State;
}

export interface State {
    id:   number;
    name: string;
}
