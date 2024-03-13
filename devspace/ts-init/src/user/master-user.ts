import { User } from "./user";

export class MasterUser extends User {
    public store(username: string, userpassword: string): void {
        this.username = username;
        this.userpassword = userpassword;
        }

}