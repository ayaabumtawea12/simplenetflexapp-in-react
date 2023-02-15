import React, { Component } from 'react'
import Movie from './Movie';
import './Movie.css';
 export default class Movies extends Component {
state={
  movies:[
    {id:0, name:'Werewolf by Night', img:"1.jpg"},
    {id:1, name:'Luckiest Girl Alive', img:"2.jpg"},
    {id:2, name:'Hellraiser', img:"3.jpg"},
    {id:3, name:"Mr. Harrigan's Phone", img:"4.jpg"},
    {id:4, name:'Catherine Called Birdy', img:"5.jpg"},
    {id:5, name:'Old People', img:"6.jpg"}
]
}
  render() {
    let {movies}=this.state;
    return (
<section className='container movie'>
<h1>Trending Movies</h1>
<div className='row justify-content-center py-3'>
{movies.map((movie)=>{
  return <Movie movie={movie} key={movie.id}/>
})}


</div>
      </section>
    )
  }
}
