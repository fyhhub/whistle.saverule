/// <reference types="vite/client" />
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}


interface Window {
  VConsole: any;
  _VConsole: any;
}

declare module 'axios';
