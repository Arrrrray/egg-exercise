'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };

    ctx.body = await ctx.model.Article.findAll(query);
  }
}

module.exports = HomeController;
