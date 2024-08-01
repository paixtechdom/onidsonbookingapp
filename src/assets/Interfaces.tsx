export interface Services {
    img: string,
    title: string,
    desc?: string
}


export interface nav  {
    title: string,
    link: string,
    sublinks?: Object[]
}

interface img{
    img: string,
    text: string
}

export interface imageListInterface { 
    data: img[], 
    heading?: string
}

export interface BreadCrumbsInterface { 
    links: string[] | any
}


export interface button {
    text: string,
    navigateTo?: string,
    className?: string,
    icon?: JSX.Element,
    scrollTo?: string
}

export interface imageextras {
    iconBg: string,
    icon: JSX.Element, 
    topText:JSX.Element, 
    bottomText: JSX.Element
}


export interface ImageTextInterface {
    heading?: string,
    span?: string,
    desc?: string,
    img: string,
    children?: JSX.Element
}


export interface HeroComponentInterface{
    heroHeader: string, 
    desc?: string, 
    img: string, 
    data?: any, 
    dataHeader?: string
    type?: string,
    breadLinks?: string[],
    children?: JSX.Element
}


export interface CardParentInterface {
    data?: cardObject[],
    heading: string,
    description?: string,
    parentNav?: string,
    icon?: JSX.Element
}
export interface CardInterface {
    data?: cardObject,
    navigateTo?: string
}

export interface cardObject {
    title?: string,
    img?: string,
    desc?: string
    sub?: subFirstLayer[],
}


export interface ListingCardParentInterface {
    desc?: string[] | string
    data?: ListingCardObject[],
    heading: string,
    description?: string,
    parentNav?: string,
    icon?: JSX.Element
}


export interface ListingCardInterface {
    data?: ListingCardObject,
    navigateTo?: string,
}


export interface ListingCardObject {
    title?: string,
    img?: string,
    desc?: string
    sub?: string[],
}

export interface subFirstLayer{
    title?: string,
    img?: string,
    sub?: sub[] | string[]
}

export interface sub {
    title?: string,
    img?: string,
    sub?: string[]
}



export interface parallaxInterface {
    id: string,
    children: JSX.Element,
    className?: string
}







export interface FooterLinksInterface {
    header: string,
    links: string[]
}
export interface ContactInfoInterface {
    icon: JSX.Element,
    contact: string
}


export interface InputFieldInterface {
    label?: string,
    type?: string,
    name?: string,
    className?: string
    handleChange: Function,
    value: string,
    placeholder?: string,
    formInputs?: any
}
