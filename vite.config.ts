/// <reference types="vitest/config" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { playwright } from "@vitest/browser-playwright";
//import { configDefaults } from "vitest/config";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true
  },
  //It is neccessary to set base here, due to github pages disliking leading '/' in scrip and style urls.
  base: "",
  build:{
    rollupOptions:{
      treeshake:true
    }
  },
  test:{
    projects:[
      {
        extends:true,
        test:{
          name:"Unit tests",
          include:["tests/unit/**"]
        }
      },
      {
        extends:true,
        test:{
          name:"Components tests",
          include:["tests/browser/**/*.test.{ts,js,tsx}"],
          browser:{
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [
              { browser: 'chromium' },
            ],
          }
        }
      },
      {
        extends:true,
        test:{
          name:"End2end tests",
          include:["tests/e2e/**/*.test.{ts,js,tsx}"],
          browser:{
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [
              { browser: 'chromium' },
            ],
            viewport: { width: 1920, height: 1080 }
          },
        }
      }
    ],
  }
});
