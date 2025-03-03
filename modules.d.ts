declare module 'tinytar' {
  interface TarEntry {
    name: string;
    mode: number;
    uid: number;
    gid: number;
    size: number;
    mtime: number;
    checksum: number;
    type: string;
    linkname: string;
    uname: string;
    gname: string;
    devmajor: number;
    devminor: number;
    content: Uint8Array;
  }

  interface SimpleTarEntry {
    name: string;
    data: Uint8Array;
  }

  interface TarOptions {
    onentry?: (entry: TarEntry) => void;
  }

  function extract(data: Uint8Array, options?: TarOptions): TarEntry[];
  function pack(entries: TarEntry[]): Uint8Array;
  function untar(data: Uint8Array): SimpleTarEntry[];

  export default {
    extract,
    pack,
    untar
  };
}

declare module 'pako' {
  interface DeflateOptions {
    level?: number;
    windowBits?: number;
    memLevel?: number;
    strategy?: number;
    dictionary?: Uint8Array | ArrayBuffer;
    raw?: boolean;
    to?: 'string' | 'array';
    chunkSize?: number;
    gzip?: boolean;
    header?: {
      text?: boolean;
      time?: number;
      os?: number;
      extra?: Uint8Array;
      name?: string;
      comment?: string;
      hcrc?: boolean;
    };
  }

  interface InflateOptions {
    windowBits?: number;
    raw?: boolean;
    to?: 'string' | 'array';
    chunkSize?: number;
    dictionary?: Uint8Array | ArrayBuffer;
  }

  function deflate(data: Uint8Array | string, options?: DeflateOptions): Uint8Array;
  function deflateRaw(data: Uint8Array | string, options?: DeflateOptions): Uint8Array;
  function gzip(data: Uint8Array | string, options?: DeflateOptions): Uint8Array;
  function inflate(data: Uint8Array, options?: InflateOptions): Uint8Array;
  function inflateRaw(data: Uint8Array, options?: InflateOptions): Uint8Array;
  function ungzip(data: Uint8Array, options?: InflateOptions): Uint8Array;

  export default {
    deflate,
    deflateRaw,
    gzip,
    inflate,
    inflateRaw,
    ungzip
  };
}

declare module 'glob-to-regexp' {
  interface GlobOptions {
    extended?: boolean;
    globstar?: boolean;
    flags?: string;
  }

  function globToRegExp(glob: string, options?: GlobOptions): RegExp;
  
  export default globToRegExp;
} 