import Router from 'koa-router';
import { getRules, getValues } from './storage';
// For help see https://github.com/ZijianHe/koa-router#api-reference
export default (router: Router) => {
  // router.post('/cgi-bin/rules', (ctx) => {
  //   console.log("%c Line:6 🥖 ctx", "color:#42b983", ctx);
  //   ctx.body = getRules();
  // });
  // router.post('/cgi-bin/values', (ctx) => {
  //   const values = getValues();
  //   values.aaa = '1231231213';
  //   ctx.body = values;
  // });
  router.post("/cgi-bin/api-list", (ctx: any) => {
    const { localStorage } = ctx.req;
    const list = localStorage.getFileList();

    ctx.body = { code: 200, data: list || [] };
  })
};
