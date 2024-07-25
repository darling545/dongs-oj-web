// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** selectQuestionByPage GET /api/question/list/page */
export async function selectQuestionByPageUsingGet(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionByPage PUT /api/question/list/page */
export async function selectQuestionByPageUsingPut(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionByPage POST /api/question/list/page */
export async function selectQuestionByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionByPage DELETE /api/question/list/page */
export async function selectQuestionByPageUsingDelete(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionByPage PATCH /api/question/list/page */
export async function selectQuestionByPageUsingPatch(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionVoByPage GET /api/question/list/page/vo */
export async function selectQuestionVoByPageUsingGet(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVo_>('/api/question/list/page/vo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionVoByPage PUT /api/question/list/page/vo */
export async function selectQuestionVoByPageUsingPut(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVo_>('/api/question/list/page/vo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionVoByPage POST /api/question/list/page/vo */
export async function selectQuestionVoByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVo_>('/api/question/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionVoByPage DELETE /api/question/list/page/vo */
export async function selectQuestionVoByPageUsingDelete(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVo_>('/api/question/list/page/vo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** selectQuestionVoByPage PATCH /api/question/list/page/vo */
export async function selectQuestionVoByPageUsingPatch(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVo_>('/api/question/list/page/vo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
