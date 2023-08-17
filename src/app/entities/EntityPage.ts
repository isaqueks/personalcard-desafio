import BaseEntity from "./BaseEntity";


export default interface EntityPage<T extends BaseEntity> {
    data: T[];
    page: number;
    requestedPageSize: number;
    totalPages: number;
}