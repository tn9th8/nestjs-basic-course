import { LocalAuthGuard } from './passport/local-auth.guard';
import { AuthService } from './auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorator/customize';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @RespM
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
