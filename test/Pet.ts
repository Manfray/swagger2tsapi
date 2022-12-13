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

import {
  ApiResponse,
  Pet,
  PetFindByStatusUsingGetParams,
  PetFindByTagsUsingGetParams,
  PetUploadImageUsingPostPayload,
  PetUsingPost2Payload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags pet
   * @name PetUploadImageUsingPost
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  petUploadImageUsingPost = (petId: number, data: PetUploadImageUsingPostPayload, params: RequestParams = {}) =>
    this.request<ApiResponse, any>({
      path: `/pet/${petId}/uploadImage`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name PetUsingPost
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */
  petUsingPost = (body: Pet, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name PetUsingPut
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */
  petUsingPut = (body: Pet, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet`,
      method: "PUT",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name PetFindByStatusUsingGet
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */
  petFindByStatusUsingGet = (query: PetFindByStatusUsingGetParams, params: RequestParams = {}) =>
    this.request<Pet[], void>({
      path: `/pet/findByStatus`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name PetFindByTagsUsingGet
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @deprecated
   * @secure
   */
  petFindByTagsUsingGet = (query: PetFindByTagsUsingGetParams, params: RequestParams = {}) =>
    this.request<Pet[], void>({
      path: `/pet/findByTags`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name PetUsingGet
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */
  petUsingGet = (petId: number, params: RequestParams = {}) =>
    this.request<Pet, void>({
      path: `/pet/${petId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name PetUsingPost2
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @originalName petUsingPost
   * @duplicate
   * @secure
   */
  petUsingPost2 = (petId: number, data: PetUsingPost2Payload, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet/${petId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name PetUsingDelete
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */
  petUsingDelete = (petId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet/${petId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
