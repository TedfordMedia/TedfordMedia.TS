import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";
import data from "./linklist.json";

interface LinkItem {
    to: string;
    label: string;
}

interface LinkList {
    links: LinkItem[];
}

const MainPage: React.FC = () => {
    const linkData: LinkList = data;

    return (
        <div id="mainpage">
            <div>
                Main Menu Page
                <div>
                    {linkData.links.map((item: LinkItem) => (
                        <div key={item.to}>
                            {item.label}
                            <Link to={item.to}>{item.label}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
