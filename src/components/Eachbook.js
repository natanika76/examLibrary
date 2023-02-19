import React from "react"
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddBook from "./AddBook"

class Eachbook extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    editForm: false
  }
}
    eachbook = this.props.eachbook
    render() {
  return (
    <div className="book"> 
    <IoCloseCircleSharp onClick={() => this.props.onDelete(this.eachbook.id)} className="delete-icon"/>
    <IoHammerSharp onClick={() => {
      this.setState({
        editForm: !this.state.editForm
      })
    }} className="edit-icon" />
    <h3>{this.eachbook.author} {this.eachbook.namebook}</h3>
    <p>{this.eachbook.text}</p>
    <b>{this.eachbook.rating ? "оценок нет": "есть рейтинг"}</b>

    {this.state.editForm && <AddBook boook={this.eachbook} onAdd={this.props.onEdit} />}

    </div>
  )
}
}

export default Eachbook