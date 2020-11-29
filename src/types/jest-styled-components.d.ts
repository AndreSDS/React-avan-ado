import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymetricMatcher {
      $$typeof: symbol
      // eslint-disable-next-line @typescript-eslint/ban-types
      sample?: string | RegExp | object | Array<unknown> | Function
    }

    type Value = string | number | RegExp | AsymetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    interface Matchers<R> {
      toHaveStyledRule(property: string, value?: Value, option?: Options): R
    }
  }
}

export declare const styledSheetSerializer: Exclude<Plugin, NewPlugin>
