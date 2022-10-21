import React from "react";

type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    items: ItemType[],
    /**
     * Function - Elements showed when accordion not collapsed
     */
    onClick: (collapsed: boolean) => void,
    onItemClick: (value: any) => void
};

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onClick}/>}
            </div>
        );
    }


type AccordionTitlePropsType = {
    title: string;
    onClick: (collapsed: boolean) => void
    collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onItemClick: (value: any) => void
};
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onItemClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;
