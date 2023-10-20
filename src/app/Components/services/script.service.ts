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
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

  remove(name: string) {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        let script = document.querySelector(`script[src="${this.scripts[name].src}"]`);
        if (script) {
          script.remove();
          this.scripts[name].loaded = false;
          resolve({ script: name, removed: true, status: 'Removed' });
        } else {
          reject({ script: name, removed: false, status: 'Not Found' });
        }
      } else {
        resolve({ script: name, removed: false, status: 'Not Loaded' });
      }
    });
  }
}
