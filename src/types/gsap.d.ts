declare module 'gsap';
declare module 'gsap/ScrollTrigger';

declare module 'gsap/SplitText' {
  export interface SplitTextInstance {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: SplitTextVars): SplitTextInstance;
  }

  export interface SplitTextVars {
    type?: string | string[];
    charsClass?: string;
    wordsClass?: string;
    linesClass?: string;
    position?: string;
    wordDelimiter?: string;
    onSplit?: (self: SplitTextInstance) => void;
  }

  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    
    constructor(targets: string | Element | Element[], vars?: SplitTextVars);
    
    static create(targets: string | Element | Element[], vars?: SplitTextVars): SplitTextInstance;
    
    revert(): void;
    split(vars?: SplitTextVars): SplitTextInstance;
  }
}

