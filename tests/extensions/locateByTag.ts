import { type Locator } from "vitest/browser"

declare module 'vitest/browser' {
    interface LocatorSelectors{
        getByTag(tagName:string):Locator
    }
}