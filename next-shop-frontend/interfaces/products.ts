export interface Products {
    data: DataProduct[];
    meta: Meta;
}

export interface DataProduct {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:       string;
    description: string;
    price:       number;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
