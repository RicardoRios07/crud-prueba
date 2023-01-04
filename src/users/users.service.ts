import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: "rick",
            password: "3110",
        },
        {
            userId: 2,
            username: "admin",
            password: "root",
        
        },
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);

    }
        
}

