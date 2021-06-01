import './Search.style.css'
const Search = ({ handleclick}) => {
  return (
    <div className='search'>
      <input type='search' 
        className='inputSearch' 
        placeholder='Search Movie'
        onClick={ handleclick} onKeyPress={event => {
          if (event.key === 'Enter') {
            handleclick(event)
          }
        }}/>
      <i className="fas fa-search"></i>
    </div>
  )
}

export default Search
