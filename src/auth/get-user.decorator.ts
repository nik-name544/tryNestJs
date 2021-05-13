import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator(
    (data, req) => { 
        const request = req.switchToHttp().getRequest();
        return request.user;
    },
);
// export const GetUser = createParamDecorator((data, req): User => {
//     // console.log(req.args.IncomingMessage.user, "args") 
//     return req.user 
// })