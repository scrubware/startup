
import { AddToFeedCNM, NetworkEvent, NetworkMessage, NetworkObject } from "../shared/networkModels";

export class WSNetworkHandler {

    socket: WebSocket;
    connected: boolean;

    wsListeners: Array<Function> = [];
    networkListeners: Map<NetworkEvent, Array<Function>> = new Map<NetworkEvent, Array<Function>>();
    
    constructor() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const url = `${protocol}://${window.location.host}/ws`;
        this.socket = new WebSocket(url);

        console.log("ws looking on ",url);

        this.socket.addEventListener("open", (event) => {
            this.connected = true;
            console.log("connected!")
        })

        this.socket.addEventListener("message", async (event) => {

            console.log("received this from the ws ",event.data)

            let msg;
            let nobj: NetworkObject = JSON.parse(event.data);
            switch (nobj.event) {
                case NetworkEvent.AddToFeed:
                    msg = await AddToFeedCNM.deserialize(nobj.msg);
                    break;
            }
            console.log("turned it into: ",msg)
            if (this.networkListeners.has(nobj.event)) {
                this.networkListeners.get(nobj.event).forEach((listener) => {
                    listener(msg)
                })
            }  
        })

        this.socket.addEventListener("close", (event) => {
            this.connected = false;
            console.log("DISCONNECTED!")
        })
    }

    async sendNetworkMessage(message: NetworkMessage) {
        this.socket.send(JSON.stringify(new NetworkObject(
            message.event(),
            await message.serialize()
        )))
    }

    registerEventListener(event: NetworkEvent, listenerMethod: Function) {
        if (!this.networkListeners.has(event)) {
            this.networkListeners.set(event, [])
        }
        this.networkListeners.get(event).push(listenerMethod);
    }

    unregisterEventListener(event: NetworkEvent, listenerMethod: Function) {
        if (!this.networkListeners.has(event)) return;
        this.networkListeners.set(event, this.networkListeners.get(event).filter(item => item !== listenerMethod))
    }

    //registerConnectListener
    //registerDisconnectListener
}