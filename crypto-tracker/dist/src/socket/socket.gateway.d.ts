import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Crypto } from 'SCHEMA';
import { Server, Socket } from 'socket.io';
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    handleMessage(client: Socket, payload: {
        helllo: string;
    }): string;
    emitLiveCryptoPrice(code: string, data: Crypto | Crypto[]): void;
}
