import { Post, Get, Route } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }

  @Post("/")
  public async postMessage(): Promise<PingResponse> {
    return {
      message: "post",
    };
  }
}