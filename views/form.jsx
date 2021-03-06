const React = requrie('react')

const Form = props =>
<form>
    <div className='form-group'>
        <label htmlFor='bookTitle'>Book Title</label>
        <input type='text' className='form-control' id='bookTitle' aria-describedy='emailHelp' placeholder={props.title ? '' : 'Holy Land: A Suburban Memoir'} value={props.title ? props.title : ''} />
    </div>
    <div className='form-group'>
        <label htmlFor='bookAuthor'>Book Author</label>
        <input type='text' className='form-control' id='bookAuthor' placeholder={props.author ? '' : 'D.J. Waldie'} value={props.author ? props.author : ''} />
    </div>
    <div className='form-group'>
        <label htmlFor='bookPages'>Book Page Count</label>
        <input type='number' className='form-control' id='bookPages' placeholder={props.pages ? '' : '123'} value={props.pages ? props.pages : ''} />
    </div>
    <div className='form-group'>
        <label htmlFor='currentPage'>Current Page Number</label>
        <input type='number' className='form-control' id='currentPage' placeholder={props.currentPage ? '' : '55'} value={props.currentPage ? props.currentPage : ''} />
    </div>
    <div className='form-check'>
        <input type='checkbox' className='form-check-input' id='readBefore' checked={!!props.isRead} />
        <label className='form-check-label' htmlFor='readBefore'>Book already read</label>
    </div>
    {props.title ? <button type='submit' id='editBook' className='btn btn-warning'>Edit Book</button> : <button type='submit' id='addBook' className='btn btn-primary'>Add Book</button>}
</form>

module.exports = Form
