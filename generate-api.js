/*
 * ---------------------------------------------------------------
 * ## SCRIPT FOR GENERATING SWAGGER-TYPESCRIPT-API              ##
 * ##                                                           ##
 * ## AUTHOR: manfray                                           ##
 * ---------------------------------------------------------------
 */
const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const outputDir = path.resolve(process.cwd(), './test');

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  // 输入： input/spec/url 三选一
  // input: path.resolve(__dirname, "./schemas.json"),
  // spec: spec,
  url: 'https://petstore.swagger.io/v2/swagger.json',
  templates: path.resolve(process.cwd(), './templates/base'),
  output: outputDir,
  httpClientType: 'axios', // 请求库
  modular: true, // 是否要将http-client, data-contacts, routes分开
  extractRequestBody:true, // 请求主体是否放入data-contact中声明
  extractRequestParams:true, // 请求参数是否放入data-contact中声明
  // moduleNameIndex:1, // 当moduleNameFirstTag为false时生效
  moduleNameFirstTag: true, // 是否以tag来命名模块
  hooks:{
    onCreateRoute(e){
      e.namespace = e.namespace.replace('Controller', 'Service')
      return e
    }
    // onFormatRouteName: (routeInfo, templateRouteName) => {
    //   return routeInfo.moduleName + templateRouteName
    // }
  }
});
