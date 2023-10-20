import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'resizer', src: 'https://responsive.traghettiper.it/js/resizer.js' }
];

declare var document: any;

@Injectable()
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // Se lo script è già stato caricato, lo rimuoviamo prima di aggiungere il nuovo script
      if (this.scripts[name].loaded) {
        let scriptElement = document.querySelector(`script[src='${this.scripts[name].src}']`);
        if (scriptElement) {
          document.getElementsByTagName('head')[0].removeChild(scriptElement);
        }
        this.scripts[name].loaded = false;
      }
  
      // Ora aggiungiamo il nuovo script
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.scripts[name].src;
      script.onload = () => {
        this.scripts[name].loaded = true;
        resolve({ script: name, loaded: true, status: 'Loaded' });
      };
      script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
  
}
