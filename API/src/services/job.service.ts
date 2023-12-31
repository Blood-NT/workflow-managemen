import { Op } from "sequelize";
import { jobModel } from "../models/job.model";
import { job } from "../interfaces/job.interface";
import response from "../interfaces/response.interface";

const createJobService = async (newJob:job): Promise<response> => {
  // newJob.isDelete = false;

  const foundUser: job | null = await jobModel.findOne({
    where: {  id: newJob.id }  });
  if (foundUser) {
    return { statusCode: "400", message: "idjob đã tồn tại" };
  }

  newJob.createat = new Date();
  newJob.updateat = new Date();
  newJob.jobdone=false;
  const job:job = await jobModel.create(newJob);
  return {
    statusCode: "200",
    message: "tạo kết nối thành công",
    data:job,
  };
};

const getJobByTimeService = async (userId: string): Promise<response> => {
  const foundGroup:job[] = await jobModel.findAll({
    where: {
      [Op.or]: [{ adminid: userId }, { leaderid: userId }],
      // isDelete: false,
    },
    order: [["createat", "DESC"]],
  });
  return {
    statusCode: "200",
    message: "",
    data: foundGroup,
  };
};

const getJobByUserService = async (
  adminid: string,
  leaderid: string
): Promise<response> => {

  const foundGroup:job[] | null = await jobModel.findAll({
    where: {
      adminid: adminid,
      leaderid: leaderid,
      // isDelete: false,
    },
  });
  return {
    statusCode: "200",
    message: "lấy dữ liệu thành công",
    data: foundGroup,
  };
};


const donejobService = async (
  id: string,
  isdonetmp:boolean
): Promise<response> => {

 
  await jobModel.update(
    {
      jobdone: isdonetmp,
  
      updateat: new Date(),
    },
    {
      where: {id: id },
    }
  );
  return {
    statusCode: "200",
    message: "cập nhật thành công",
  };
};


export {
  createJobService,
  getJobByUserService,
  getJobByTimeService,
  donejobService
};
