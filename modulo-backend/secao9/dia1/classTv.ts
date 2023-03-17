class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  connectedTo: string | undefined;

  constructor (br: string, sz: number, rt: string, cts: string) {
    this.brand = br;
    this.size = sz;
    this.resolution = rt;
    this.connections = cts;
  }

  turnOn() {
    console.log(`Tv: ${this.brand}
    Tamanho: ${this.size}
    Resolução: ${this.resolution}
    Entradas: ${this.connections}`);
    
  }
}

const tv1 = new Tv('SmartTv Philips', 57, '9k', 'HDMI, Ethernet, Bluetooth, WiFi, Infrared, Telepatic')

tv1.turnOn();