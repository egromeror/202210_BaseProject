import { Book } from '../book';
import { Author } from '../../author/author';
import { Review } from '../review';
import { Editorial } from '../../editorial/editorial';

export class Bookdetail extends Book{
    authors: Array<Author> = [];
    reviews: Array<Review> = [];

    constructor(id: number,
                name: string,
                isbn: string,
                descripcion: string,
                image: string,
                publishingdate: any,
                editorial: Editorial,
                authors: Array<Author>,
                reviews: Array<Review>){
        super(id, name, isbn, descripcion, image, publishingdate, editorial);
        this.authors = authors;
        this.reviews = reviews;
    }
}
