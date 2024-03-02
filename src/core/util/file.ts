import * as fs from 'fs';

export function ReadFile(path: string): Buffer {
  try {
    return fs.readFileSync(path);
  } catch (err) {
    try {
      return fs.readFileSync('../' + path);
    } catch (err) {
      throw err;
    }
  }
}
