export interface Article {
    id:            number;
    categoryId:    number;
    categoryName:  string;
    title:         string;
    avatar:        string;
    summary:       string;
    content:       string;
    contentMd:     string;
    readType:      number;
    isStick:       number;
    publishStatus: number;
    isOriginal:    number;
    originalUrl:   string;
    address:       string;
    quantity:      number;
    isCarousel:    number;
    isRecommend:   number;
    keywords:      string;
    createTime:    string;
    updateTime:    string;
}
