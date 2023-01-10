import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.getUser({ username });
        console.log(user);
        
        //if (!user) return null;
        if (!user) {
            throw new NotAcceptableException('No se pudo encontrar el usuario');
        }
        
        const passwordValid = await bcrypt.compare(password, user.password)
        console.log(passwordValid);
        
        if (!passwordValid) {
            throw new NotAcceptableException('Contraseña incorrecta');
        }
        return user;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}