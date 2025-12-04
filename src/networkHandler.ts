
import { NetworkMessage, NetworkObject } from "../shared/networkModels";

export class WSNetworkHandler {

    socket: WebSocket;
    connected: boolean;

    wsListeners: Array<Function> = [];
    networkListeners: Array<Function> = [];
    
    constructor() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const url = `${protocol}://${window.location.host}/ws`;
        this.socket = new WebSocket(url);

        console.log("ws looking on ",url);

        this.socket.addEventListener("open", (event) => {
            this.connected = true;
            console.log("connected!")
        })

        this.socket.addEventListener("message", (event) => {
            this.networkListeners.forEach((listener) => {
                listener()
            })
        })

        this.socket.addEventListener("close", (event) => {
            this.connected = false;
        })
    }

    async sendNetworkMessage(message: NetworkMessage) {
        this.socket.send(JSON.stringify(new NetworkObject(
            message.event(),
            await message.serialize()
        )))
    }

    registerNetworkListener(listenerMethod: Function) {
        this.networkListeners.push(listenerMethod);
    }

    //registerConnectListener
    //registerDisconnectListener
}