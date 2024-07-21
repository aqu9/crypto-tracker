import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Crypto } from 'SCHEMA';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    console.log('connnected', client.id);
  }

  async handleDisconnect(client: Socket) {
    console.log('disconncted', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: { helllo: string }): string {
    console.log(client.id, payload);
    return 'Hello world!';
  }

  emitLiveCryptoPrice(code: string, data: Crypto | Crypto[]) {
    this.server.emit(code, data);
  }
}
