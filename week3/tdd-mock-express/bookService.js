const BookService = {
    getAll: function() {
        
        console.log('shouldnt go in here');
        return ['book1', 'book2', 'book3'];
    }
 };
 
module.exports = BookService;
