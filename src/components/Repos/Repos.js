import React, { Component } from 'react'
import './Repos.css'
export default function RepoList(props){
    return (
    <div>
        <div className="repos">
            <h4>
                <a href={props.repository.html_url} target="_blank">{props.repository.name}</a>
            </h4>
            <div className="update">
                <span className="mr20">{props.repository.language}</span>
                <span>Updated {props.repository.updated_at.split('T')[0]}</span>
            </div>    
        </div>
    </div>
    )
}