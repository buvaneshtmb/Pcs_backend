import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary : "Signup for a New User"})
    @Post('')
    async signup(@Body() userDto :UserDto) {
        return this.userService.signup(userDto)
    }
}
