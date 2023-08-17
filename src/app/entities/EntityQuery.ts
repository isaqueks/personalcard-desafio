
type EntityQuery<T> = { [key in keyof T]?: string | number | boolean };

export default EntityQuery;