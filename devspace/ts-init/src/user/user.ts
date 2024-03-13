export abstract class User {
    protected username: string;
    protected userpassword: string;
    
    public abstract store(username: string, userpassword: string): void;
}