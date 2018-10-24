import React, {Component} from 'react'
import { Article } from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
    const articleElement = articles.map(articles => 
        <li className='article__item' key = {articles.id}><Article article={articles}/></li>
    )
    return (
        <ul>
            {articleElement}
        </ul>
    )
}