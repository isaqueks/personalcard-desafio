import BaseEntity from "../entities/BaseEntity";
import EntityPage from "../entities/EntityPage";
import EntityQuery from "../entities/EntityQuery";


export default interface EntityBrowser<T extends BaseEntity> {

    entityPage?: EntityPage<T>;
    query: EntityQuery<T>;
    pageNumber: number;
    isLoading: boolean;

    // applyFilter(filter: EntityQuery<T>): void;

    gotoPage(page: number): void;

    fetch(): void;

    deleteEntity(id: number): void;

    editEntity(id: number): void;

}