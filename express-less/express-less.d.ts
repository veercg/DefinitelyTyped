// Type definitions for express-less
// Project: https://www.npmjs.com/package/express-less
// Definitions by: xyb <https://github.com/xieyubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "express-less" {
    import express = require('express');

    function less(root: string, options?: less.Options): express.RequestHandler;

    namespace less {
        export interface Options {
            debug?: boolean;
            compress?: boolean;
        }
    }

    export = less;
}
