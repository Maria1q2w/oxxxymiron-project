export const tourItemCollectionQuery = `
{
    tourItemCollection {
        items {
            date
            place
            city
            soldOut
            country
            ticketLink
            videoLink
            sys {
                id
            }
        }
    }
}
`
export const trackItemCollectionQuery = `
{
    trackItemCollection {
        items {
            sys {
                id
            }
            date
            title
            description
            link {
                url
            }
            cover {
                url
            }
        }
    }
}
`
export const newsItemCollectionQuery = `
{
    newsItemCollection {
        items {
            sys {
                id
            }
            title
            date
            cover {
                url
            }
        }
    }
}
`
export const newsItemQuery = (id) => 
`
    {
        newsItem (id: "${id}") {
            sys{
                id
            }
            title
            date
            cover {
                url
            }
            description {
                json
            }
        }
    }
`

// export const productItemCollectionQuery = `
// {
//     productItemCollection {
//         items {
//             sys {
//                 id
//             }
//             title
//             cover {
//                 url
//             }
//             sum
//             popular
//             oldPrice
//             material
//         }
//     }
// }
// `

export const productItemCollectionQuery = (material) =>
`
{
    productItemCollection ${material !== "all" ? `(where: { material: "${material}" })` : ""} {
        items {
            sys {
                id
            }
            title
            cover {
                url
            }
            sum
            popular
            oldPrice
            material
        }
    }
}
`

export const productItemQuery = (id) => 
`
    {
        productItem (id: "${id}") {
            sys {
                id
            }
            title
            cover {
                url
            }
            sum
            popular
            oldPrice
            material
            description {
                json
            }
        }
    }
`
