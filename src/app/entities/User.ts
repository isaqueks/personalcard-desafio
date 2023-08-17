import BaseEntity from "./BaseEntity";


export default interface User extends BaseEntity {
    
    name: string;
    email: string;
    gender: string;
    status: 'active' | 'inactive';

}