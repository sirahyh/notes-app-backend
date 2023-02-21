const {
    addNoteHandler, getNoteHandler, getDetailNote, editNoteByIdHandler, deleteNoteByIdHandler
} = require('./handler')

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getDetailNote,
    },
    {
        method : 'POST',
        path : '/notes/{id}',
        handler : editNoteByIdHandler,
    }, 
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler,
    }
]

module.exports = routes;