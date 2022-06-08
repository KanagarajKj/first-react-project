import React from 'react'

const Book = (props) => {
  const {image,title,author} = props.book;

  const addCart = function(title){
    alert(`${title} has been added to cart`);
  }
  return (
    <div className='book_store_container'>
      <div className="book_img_container">
        <img src={image} alt={title} className='book_img' />
      </div>
      <h2 className='book_title'>{title}</h2>
      <p className='book_author'>{author}</p>
      <button className="cart_btn" onClick={() => addCart(title)}>Add to Cart</button>
      {props.children}
    </div>
  )
}

export default Book