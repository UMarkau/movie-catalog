import { AxiosResponse } from "axios";
import { axiosInstance } from "./instance";
import { IMovie } from "../types";

interface IResponse {
  Response: "True" | "False";
  Error?: "Too many results.";
  Search?: IMovie[];
  totalResults?: string;
}

interface IProps {
  search: string;
  page: number;
}

export const getMovies = async ({
  search,
  page,
}: IProps): Promise<AxiosResponse<IResponse>> => {
  return axiosInstance.get("", {
    params: {
      page,
      s: search,
    },
  });
};
