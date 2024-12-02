export const MAIN_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`;
console.log(process.env.REACT_APP_SPACE_ID, process.env.REACT_APP_ACCESS_TOKEN, "iiiiiiiiiiiiiiiii");
//explore?access_token=${process.env.REACT_APP_ACCESS_TOKEN}
export const ASSET_URL = (id) => `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`

export const MENU = [
    {
        name: "Концерты", 
        link: "tour",
    },
    {
        name: "Творчество", 
        link: "tracks",
    },
    {
        name: "Новости", 
        link: "news",
    },
    {
        name: "OXXXYSHOP", 
        link: "shop",
    }
];

export const SOCIALS = [
    {
        icon: "youtube",
        link: "https://www.youtube.com/@oxxxymironofficial",
    }, 
    {
        icon: "twitter",
        link: "https://twitter.com/nrimyxxxo",
    }, 
    {
        icon: "tiktok",
        link: "https://www.tiktok.com/@oxxxymiron",
    }, 
    {
        icon: "applemusic",
        link: "https://music.apple.com/us/artist/oxxxymiron/301601116",
    }, 
    {
        icon: "spotify",
        link: "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB",
    }
]

export const FILTER_MENU = [
    {
        icon: "price",
        name: "bigPrice",
    },
    {
        icon: "price",
        name: "smallPrice",
    },
    {
        icon: "popular",
        name: "popular",
    },
    {
        icon: "sale",
        name: "sale",
    },
    {
        icon: "cancel",
        name: "cancel"
    }
]

export const FILTER_CATEGORY = [
    {
        icon: "material",
        name: "cotton"
    },
    {
        icon: "material",
        name: "silk"
    },
    {
        icon: "material",
        name: "wool"
    },
    {
        icon: "material",
        name: "flax"
    },
    {
        icon: "material",
        name: "plastic"
    },
    {
        icon: "cancel",
        name: "cancel"
    }
]

export const SLIDER_BUTTON_TYPES = {
    NEXT: "NEXT",
    PREV: "PREV"
}