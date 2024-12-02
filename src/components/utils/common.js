import Asset from "../Assets/Asset";
import AssetHeading from "../Assets/AssetHeading";
import AssetLink from "../Assets/AssetLink";
import AssetText from "../Assets/AssetText";
import { MAIN_URL } from "./constants";

// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: 'tenzbk2b2max',
//     environment: 'master', // defaults to 'master' if not set
//     accessToken: 'LZuIgveY4zl6hVsDaU_d5kf2GO_-xmbgAEv2QolODio'
// })

// client.getEntry('1ofR68WWtwu6pBiEPdl60o')
//     .then((entry) => console.log(entry))
//     .catch(console.error)

// export const request = (query) => {
//     return fetch(MAIN_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
//         }, 
//         body: JSON.stringify({query}),
//     }).then((res) => {
//         // console.log(res.json())
//         return res.json()
//     }).catch((e) => {
//         console.log('ошибкка', e)
//     })
//         // console.log(result.json());
//         // const { data } = await result.json();
//         // console.log(data);
//     // return data;
// }

export const request = async (query) => {
    try {
        const result = await fetch(MAIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });
        const { data } = await result.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const sortByDate = (arr) => {
    return (arr.sort((a, b) => new Date(a.date) - new Date(b.date)))
}

export const applyFiltersAndSearch = (arr, { filter, searchValue }) => {
    let filteredArr = arr;
    switch (filter) {
        case "smallPrice":
            filteredArr = sortByPriceSmall(filteredArr);
            break;
        case "bigPrice":
            filteredArr = sortByPriceBig(filteredArr);
            break;
        case "popular":
            filteredArr = sortByPopular(filteredArr);
            break;
        case "sale":
            filteredArr = getOldItems(filteredArr);
            break;
        default:
            filteredArr = sortByCancel(filteredArr);
            break;
    }
    if (searchValue) {
        const lowerValue = searchValue.toLowerCase();
        filteredArr = filteredArr.filter(item => 
            item.title.toLowerCase().split(" ").some(word => word.startsWith(lowerValue))
        );
    }
    return filteredArr;
}

export const sortBySearch = (arr, value) => {
    const lowerValue = value.toLowerCase();
    const arrr = [...arr].filter( item => {
        return item.title.toLowerCase().split(" ").some(word => word.startsWith(lowerValue))
    })
    return arrr;
}

export const sortByPriceSmall = (arr) => {
    const arrr = [...arr].sort((a, b) => Number(a.sum) > Number(b.sum) ? 1 : -1)
    console.log(arrr,'arrr');
    return arrr; 
}

export const sortByPriceBig = (arr) => {
    const arrr = [...arr].sort((a, b) => Number(b.sum) > Number(a.sum) ? 1 : -1)
    return arrr; 
}

export const sortByPopular = (arr) => {
    const arrr = [];
    [...arr].map((i) => {
        if ( i.popular )  {
            arrr.push(i);
        }
    })
    return arrr; 
}

// export const sortBySale = (arr) => {
//     const arrr = [];
//     [...arr].map((i) => {
//         if ( i.oldPrice != null)  {
//             arrr.push(i);
//         }
//     })
//     return arrr; 
// }
export const getOldItems = (items) =>  items.filter(item => item.oldPrice);

export const sortByCancel = (arr) => {
    return arr; 
}

export const getLocalDateString = (date, {month = "numeric", day = "numeric", year = "numeric"}) => {
    return (new Date(date).toLocaleDateString("ru-RU", {
        month,
        day,
        year,
    }))
}

export const renderNode = ({ nodeType, data, value, content }, i) => {
    const key = `${nodeType}${i}`;

    switch (nodeType) {
        case "paragraph":
            return <p>{content.map(renderNode)}</p>

        case "text":
            return <AssetText key={key} value={value} />

        case "heading-3":
            return <AssetHeading key={key} content={content} />

        case "embedded-asset-block":
            return <Asset key={key} id={data.target.sys.id} />

        case "hyperlink" :
            return <AssetLink key={key} uri={data.uri} content={content} />

        default:
            break;
    }
    return Array.isArray(content) ? content.map(renderNode) : null

}

export const jsonToText = ({ content }) => {
    return (
        content.map(renderNode)
    )
}

export const getAsset = async (assetId) => {
    try {
        const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${assetId}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
        // console.log(url, 'url');
        const result = await fetch(url);
        const data = await result.json();

        const link = data?.fields?.file?.url

        return link ? `https:${link}` : null;
    } catch (err) {
        console.log(err);
    }
    
}

