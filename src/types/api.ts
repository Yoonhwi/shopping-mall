export type status = "success" | "error";

export interface ResponseType {
  status: status;
  message: string;
}
