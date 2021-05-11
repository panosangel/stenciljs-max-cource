/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface StockFinder {
    }
    interface StockPrice {
        "stockSymbol": string;
    }
    interface UcSideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface UcSpinner {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLStockFinderElement extends Components.StockFinder, HTMLStencilElement {
    }
    var HTMLStockFinderElement: {
        prototype: HTMLStockFinderElement;
        new (): HTMLStockFinderElement;
    };
    interface HTMLStockPriceElement extends Components.StockPrice, HTMLStencilElement {
    }
    var HTMLStockPriceElement: {
        prototype: HTMLStockPriceElement;
        new (): HTMLStockPriceElement;
    };
    interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {
    }
    var HTMLUcSideDrawerElement: {
        prototype: HTMLUcSideDrawerElement;
        new (): HTMLUcSideDrawerElement;
    };
    interface HTMLUcSpinnerElement extends Components.UcSpinner, HTMLStencilElement {
    }
    var HTMLUcSpinnerElement: {
        prototype: HTMLUcSpinnerElement;
        new (): HTMLUcSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "stock-finder": HTMLStockFinderElement;
        "stock-price": HTMLStockPriceElement;
        "uc-side-drawer": HTMLUcSideDrawerElement;
        "uc-spinner": HTMLUcSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface StockFinder {
        "onUcSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface StockPrice {
        "stockSymbol"?: string;
    }
    interface UcSideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface UcSpinner {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "stock-finder": StockFinder;
        "stock-price": StockPrice;
        "uc-side-drawer": UcSideDrawer;
        "uc-spinner": UcSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "stock-finder": LocalJSX.StockFinder & JSXBase.HTMLAttributes<HTMLStockFinderElement>;
            "stock-price": LocalJSX.StockPrice & JSXBase.HTMLAttributes<HTMLStockPriceElement>;
            "uc-side-drawer": LocalJSX.UcSideDrawer & JSXBase.HTMLAttributes<HTMLUcSideDrawerElement>;
            "uc-spinner": LocalJSX.UcSpinner & JSXBase.HTMLAttributes<HTMLUcSpinnerElement>;
        }
    }
}