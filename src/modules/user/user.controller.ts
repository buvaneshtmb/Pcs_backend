import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ContactNumberDto } from './dto/phone_number.dto';
import { VerifyOtpDto } from './dto/verifyotp.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary : "Signup for a New User"})
    @Post('')
    async signup(@Body() userDto :UserDto) {
        return this.userService.signup(userDto)
    }

    @ApiOperation({ summary : "Create New Otp"})
    @Post('otp')
    async sendOtp(@Body() contactNumberDto : ContactNumberDto) {
        return this.userService.sendOtp(contactNumberDto)
    }

    @ApiOperation({ summary : "Verify New Otp"})
    @Post('verifyotp')
    async verifyOtp(@Body() VerifyOtpDto : VerifyOtpDto){
        return this.userService.verifyOtp(VerifyOtpDto)
    }
}
