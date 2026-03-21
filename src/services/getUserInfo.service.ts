import { api } from "@/lib/api";
import { ApiResponse } from "@/types/api";

export default async function getUserInfo(): Promise<ApiResponse | undefined> {
  try {
    const { data, status } = await api.get<{ data: ApiResponse }>(
      "wectornanime",
    );

    if (status === 200) {
      return data.data;
    }
  } catch {
    window.alert("deu erro");

    return;
  }
}
