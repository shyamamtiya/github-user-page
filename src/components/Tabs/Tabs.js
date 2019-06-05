import React from 'react';
import './Tabs.css'

export default function Tabs(props){
    const {tabContent} = props;
    return <div title={tabContent} className="tab-content">{tabContent}</div>
}