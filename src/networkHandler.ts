
enum NetworkEvent {
    
}

class NetworkHandler {

    socket: WebSocket;

    wsListeners: Array<Function> = [];
    networkListeners: Array<Function> = [];
    
    constructor() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

        this.socket.onopen = (event) => {

        };

        this.socket.onmessage = (event) => {

        };

        this.socket.onclose = (event) => {

        };
    }

    //registerSelfListener(listenerMethod: Function);

    sendNetworkMessage(object: Object | string) {
        if (typeof object === "string") {
            this.socket.send(object);
        } else {
            this.socket.send(JSON.stringify(object));
        }
    }

    registerWSListener(listenerMethod: Function) {
        
    }

    registerNetworkListener(listenerMethod: Function) {
        this.networkListeners.push(listenerMethod);
    }
}