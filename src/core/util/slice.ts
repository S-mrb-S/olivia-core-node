// Util package

export function Contains(slice: string[], text: string): boolean {
    return slice.includes(text);
  }
  
  export function Difference(slice: string[], slice2: string[]): string[] {
    return slice.filter(item => !slice2.includes(item));
  }
  
  export function Index(slice: string[], text: string): number {
    return slice.indexOf(text);
  }
  