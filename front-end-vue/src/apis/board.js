import axios from "axios";

function getBoardList(pageNo) {
  const promise = axios.get(
    "/board/list",
    //Params
    {
      params: {
        pageNo
      }
    }
  );
  return promise;
}


function createBoard(multipartFormData) {
  return axios.post("/board/create", multipartFormData);
}

function readBoard(bno, hit)  { //Path Variabel, Parmas
return axios.get(`/board/${bno}`,  {params: {hit}});
}

function updateBoard(multipartFormData) {
  return axios.post("/board/update", multipartFormData);
}

function deleteBoard(bno) {
  return axios.delete(`/board/${bno}`);
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
}