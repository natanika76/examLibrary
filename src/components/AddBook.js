import React from "react"

class AddBook extends React.Component {
  bookAdd ={}
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      namebook: "",
      genre: "",
      yearpublic: 1,
      text: "",
      rating: 0,
      isLike: false 
    }
    
  } 
    render() {
  return (
    <form ref={(el) => this.myForm = el}>
        <input placeholder="Автор" onChange={(e) => this.setState({author: e.target.value})} />
        <input placeholder="Название книги" onChange={(e) => this.setState({namebook: e.target.value})} />
        <input placeholder="Жанр" onChange={(e) => this.setState({genre: e.target.value})}/>
        <input placeholder="Год издания"onChange={(e) => this.setState({yearpublic: e.target.value})}/>
        <textarea placeholder="Текст" onChange={(e) => this.setState({text: e.target.value})}></textarea>
        <input placeholder="Оценка(0-10)" onChange={(e) => this.setState({rating: e.target.value})}/>
        <label htmlFor="isLike">Понравилась?</label>
        <input type="checkbox" id="isLike" onChange={(e) => this.setState({isLike: e.target.checked})}/>
        <button type="button" onClick={() => {
          this.myForm.reset()
          this.bookAdd = {
            author: this.state.author,
            namebook: this.state.namebook,
            genre:this.state.genre,
            yearpublic: this.state.yearpublic,
            text: this.state.text,
            rating: this.state.rating,
            isLike: this.state.isLike 
          }
          if(this.props.boook)
          this.bookAdd.id = this.props.boook.id
          this.props.onAdd(this.bookAdd)
          
      }
      }>Добавить</button>
    </form>
  )
}
}

export default AddBook
