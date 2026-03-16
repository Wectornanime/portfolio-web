import axios from "axios";

import { ApiResponse } from "@/types/api";

export default async function getUserInfo(): Promise<ApiResponse | undefined> {
  try {
    const { data, status } = await axios.get<{ data: ApiResponse }>(
      "http://localhost:3000/api/public/wectornanime",
    );

    if (status === 200) {
      return data.data;
    }
  } catch {
    window.alert("deu erro");

    return;
  }
}
