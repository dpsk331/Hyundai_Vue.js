import axios from "axios";

//기본 경로 설정
axios.defaults.baseURL = 'http://localhost';

//요청 HTTP에서 Authorization 헤어 추가, 값은 JWT로 설정
function addAuthHeader(authToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

//요창 HTTP에 Authorization 헤더 제거
function removeAuthHeader() {
  delete axios.defaults.headers.common['Authorization'];
}

export default {
  addAuthHeader,
  removeAuthHeader
}