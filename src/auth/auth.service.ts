import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'This action signs in a user';
  }
  signup() {
    return 'This action signs up a user';
  }
}
