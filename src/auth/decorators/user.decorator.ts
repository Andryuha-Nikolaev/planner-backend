import type { User } from "prisma/generated/client"

import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const CurrentUser = createParamDecorator((data: keyof User, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	const user = request.User
	return data ? user[data] : user
})
