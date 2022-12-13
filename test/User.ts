/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { User, UserLoginUsingGetParams } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name UserCreateWithArrayUsingPost
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */
  userCreateWithArrayUsingPost = (body: User[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithArray`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserCreateWithListUsingPost
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  userCreateWithListUsingPost = (body: User[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithList`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserUsingGet
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  userUsingGet = (username: string, params: RequestParams = {}) =>
    this.request<User, void>({
      path: `/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UserUsingPut
   * @summary Updated user
   * @request PUT:/user/{username}
   */
  userUsingPut = (username: string, body: User, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UserUsingDelete
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  userUsingDelete = (username: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserLoginUsingGet
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  userLoginUsingGet = (query: UserLoginUsingGetParams, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/user/login`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserLogoutUsingGet
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  userLogoutUsingGet = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/logout`,
      method: "GET",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UserUsingPost
   * @summary Create user
   * @request POST:/user
   */
  userUsingPost = (body: User, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
}
