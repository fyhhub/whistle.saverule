"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.post("/cgi-bin/api-list", (ctx) => {
        const { localStorage } = ctx.req;
        const list = localStorage.getFileList();
        ctx.body = { code: 200, data: list || [] };
    });
};
