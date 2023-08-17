import BaseEntity from "./BaseEntity";


export default interface Post extends BaseEntity {

    user_id: number;
    title: string;
    body: string;

}