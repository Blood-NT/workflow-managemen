import axios from "axios";
import { apiURL } from "../config/config";
import { loginByToken } from "./apiUser";

const createGroup = async (sender, receive) => {
  try {
    const fetchData = async () => {
      const body = {
        sender: sender,
        receive: receive,
      };
      const headers = {
        headers: { access_token: localStorage.getItem("accessToken") },
      };
      const res = await axios.post(
        `${apiURL}/group/create-group`,
        body,
        headers
      );
      return res.data;
    };
    let data = await fetchData();
    if (data.statusCode === "410") {
      const user = await loginByToken();
      localStorage.setItem("accessToken", user.data.accessToken);
      data = await fetchData();
    }
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const getTaskByUser = async (username) => {
  try {
    const res = await axios.get(`${apiURL}/task/get-task/${username}`);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const getGroup = async (sender, receive) => {
  try {
    const res = await axios.get(
      `${apiURL}/group/get-group/${sender}/${receive}`
    );

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const deleteGroup = async (sender, receive) => {
  try {
    const fetchData = async () => {
      const body = {
        sender: sender,
        receive: receive,
      };
      const headers = {
        headers: { access_token: localStorage.getItem("accessToken") },
      };
      const res = await axios.put(
        `${apiURL}/group/delete-group`,
        body,
        headers
      );
      return res.data;
    };
    let data = await fetchData();
    if (data.statusCode === "410") {
      const user = await loginByToken();
      localStorage.setItem("accessToken", user.data.accessToken);
      data = await fetchData();
    }
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const checkTask = async (id, memid, ischeck) => {
  try {
    const fetchData = async () => {
      const body = {
        id,
        memid,
        ischeck,
      };
      const res = await axios.put(
        `${apiURL}/task/check-task`, body
      );
      return res.data;
    };
    let data = await fetchData();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const doneJob = async (id, ischeck) => {
  try {
    const fetchData = async () => {
      const body = {
        id,
        ischeck,
      };
      const res = await axios.put(
        `${apiURL}/job/jobDone`, body
      );
      return res.data;
    };
    let data = await fetchData();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};



const createReport = async (taskid, uid, title, note,done) => {
  try {
    const body = {
      taskid: taskid,
      uidreport: uid,
      title: title,
      note: note,
    };
    const res = await axios.post(`${apiURL}/task-report/create`, body);
    const body2 = {
      taskid: taskid,
      donetmp:done
    };
    const res2 = await axios.put(`${apiURL}/task/done-task`, body2);
    console.log("done",res2);

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const getAllReport = async (idtask) => {
  try {
    const res = await axios.get(`${apiURL}/task-report/get-all/${idtask}`);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const getDataReport = async (idreport) => {
  try {
    const res = await axios.get(`${apiURL}/task-report/get/${idreport}`);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

export { createGroup, getTaskByUser, getGroup, deleteGroup, checkTask, createReport,getAllReport,getDataReport };
