import axios from "axios";

function join(user) {
  return axios.post(
    "/member/join2",
      //RequestBody의 JSON 방식
    {
      mid: user.id,
      mname: user.name,
      mpassword: user.password,
      mrole: user.role,
      memail: user.email
    }
  );
}

function login(user) {
  return axios.post(
    "/member/login1",
      //쿼리스트링 방식
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}