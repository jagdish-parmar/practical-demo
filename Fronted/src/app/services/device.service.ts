import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public message: any;
  private _getURL = environment.BackendUrl
  constructor(private socket: Socket) { }

  public getDeviceStatus(message) {
    this.message = message;
    this.socket.emit('device-Status', message);
  }

  public reciveDeviceStatus() {
    return this.socket.fromEvent(this.message.LoggedInUser);
  }

  public removeListener(message) {
    this.socket.emit('remove-Listener', message);
  }

}
