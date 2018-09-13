import React from 'react'

export const Card = ({name, founded, seats, titles, weapons, arms, members, id, toggleHomies}) => {

  const filterMembers = members.map(member => {
    return (
      <li>{member.name}: {member.died || "Alive"} </li>
    )
  })
  
  const filterTitles = titles.map(title => {
    return (
      <p>Title: {title}</p>
    )
  })

  return (
    <div className="Card" onClick={toggleHomies}>
      <h1>{name}</h1>
      <h3>Founded: {founded || "N/A"}</h3>
      <p>Seats: {seats}</p>
      <aside>{filterTitles}</aside>
      <p>Ancestral Weapons: {weapons}</p>
      <p>Coat of Arms: {arms}</p>
      <ul className="members">{filterMembers}</ul>
      <p></p>
    </div>
  )
}