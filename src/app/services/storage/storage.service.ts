import {Injectable} from '@angular/core';
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * Save data to storage
   *
   * @param key
   * @param value Any value/object/string
   */
  async save(key: string, value: any) {
    await Preferences.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  /**
   * Get data from storage
   *
   * @param key
   */
  async get(key: string) {
    const {value} = await Preferences.get({key: key});

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }
}
