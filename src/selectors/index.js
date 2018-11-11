import store from '../store'

export const getBookById = (id) => {
    const state = store.getState()
    const book = state.books.books.find(book => book.id === id)
    return book ? {...book} : book
}