export interface Products {
    data: Product[];
    meta: Meta;
}

export interface Product {
    id:         number;
    attributes: ProductAttributes;
}

export interface ProductAttributes {
    title:       string;
    description: string;
    price:       number;
    createdAt:   Date;
    updatedAt:   Date;
    image:       Image;
}

export interface Image {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null | string;
    caption:           null;
    width:             number;
    height:            number;
    formats:           null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
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
