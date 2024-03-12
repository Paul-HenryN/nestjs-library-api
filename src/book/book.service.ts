import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from 'src/book/book.entity';

const defaultBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    authorId: 1,
    genre: 'Classic',
    publishedDate: new Date('1925-04-10'),
    description: 'A story of love, excess, and the American Dream.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    authorId: 2,
    genre: 'Fiction',
    publishedDate: new Date('1960-07-11'),
    description:
      'A powerful story of racial injustice and loss of innocence in the American South.',
  },
  {
    id: 3,
    title: '1984',
    authorId: 3,
    genre: 'Dystopian',
    publishedDate: new Date('1949-06-08'),
    description:
      'A dystopian novel depicting a totalitarian regime and the dangers of mass surveillance.',
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    authorId: 4,
    genre: 'Classic',
    publishedDate: new Date('1951-07-16'),
    description:
      'A controversial novel about teenage angst, rebellion, and the search for identity.',
  },
  {
    id: 5,
    title: 'To Kill a Mockingbird',
    authorId: 5,
    genre: 'Fiction',
    publishedDate: new Date('1960-07-11'),
    description:
      'A powerful story of racial injustice and loss of innocence in the American South.',
  },
  {
    id: 6,
    title: 'The Hobbit',
    authorId: 6,
    genre: 'Fantasy',
    publishedDate: new Date('1937-09-21'),
    description:
      'A fantasy novel about the adventures of a hobbit in Middle-earth.',
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    authorId: 7,
    genre: 'Fantasy',
    publishedDate: new Date('1997-06-26'),
    description:
      'The first book in the Harry Potter series, a story about a young wizard and his adventures at Hogwarts School of Witchcraft and Wizardry.',
  },
  {
    id: 8,
    title: 'Pride and Prejudice',
    authorId: 8,
    genre: 'Classic',
    publishedDate: new Date('1813-01-28'),
    description:
      'A romantic novel depicting the societal issues of the 19th century British aristocracy.',
  },
  {
    id: 9,
    title: 'The Lord of the Rings',
    authorId: 6,
    genre: 'Fantasy',
    publishedDate: new Date('1954-07-29'),
    description:
      'An epic fantasy novel about the quest to destroy the One Ring and defeat the Dark Lord Sauron.',
  },
  {
    id: 10,
    title: 'Animal Farm',
    authorId: 3,
    genre: 'Allegory',
    publishedDate: new Date('1945-08-17'),
    description:
      'An allegorical novella that reflects events leading up to the Russian Revolution of 1917 and the Stalinist era of the Soviet Union.',
  },
  {
    id: 11,
    title: 'The Da Vinci Code',
    authorId: 9,
    genre: 'Mystery',
    publishedDate: new Date('2003-03-18'),
    description:
      'A mystery thriller novel that follows the investigation of a murder in the Louvre Museum in Paris.',
  },
  {
    id: 12,
    title: 'The Shining',
    authorId: 10,
    genre: 'Horror',
    publishedDate: new Date('1977-01-28'),
    description:
      'A psychological horror novel that follows a family as they stay in an isolated hotel during the winter.',
  },
  {
    id: 13,
    title: 'Brave New World',
    authorId: 11,
    genre: 'Dystopian',
    publishedDate: new Date('1932-10-14'),
    description:
      'A dystopian novel that explores the dehumanizing effects of technology and social conditioning.',
  },
  {
    id: 14,
    title: 'Moby-Dick',
    authorId: 12,
    genre: 'Adventure',
    publishedDate: new Date('1851-10-18'),
    description:
      'An adventure novel that follows the obsessive quest of Captain Ahab for revenge on a white whale named Moby Dick.',
  },
  {
    id: 15,
    title: 'Frankenstein',
    authorId: 13,
    genre: 'Gothic',
    publishedDate: new Date('1818-01-01'),
    description:
      'A gothic novel that tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment.',
  },
  {
    id: 16,
    title: 'The Road',
    authorId: 14,
    genre: 'Post-apocalyptic',
    publishedDate: new Date('2006-09-26'),
    description:
      'A post-apocalyptic novel that follows a father and his son as they journey across a desolate landscape in a post-apocalyptic world.',
  },
  {
    id: 17,
    title: 'Wuthering Heights',
    authorId: 15,
    genre: 'Gothic',
    publishedDate: new Date('1847-12-19'),
    description:
      'A gothic novel that follows the passionate and destructive love between Catherine Earnshaw and Heathcliff on the Yorkshire moors.',
  },
  {
    id: 18,
    title: "The Hitchhiker's Guide to the Galaxy",
    authorId: 16,
    genre: 'Science Fiction',
    publishedDate: new Date('1979-10-12'),
    description:
      'A science fiction comedy novel that follows the misadventures of an unwitting human and his alien friend as they travel through space.',
  },
  {
    id: 19,
    title: 'The Picture of Dorian Gray',
    authorId: 17,
    genre: 'Gothic',
    publishedDate: new Date('1890-07-01'),
    description:
      'A gothic novel that tells the story of a young man whose portrait ages while he remains youthful, reflecting his inner moral decay.',
  },
  {
    id: 20,
    title: 'The Hunger Games',
    authorId: 18,
    genre: 'Dystopian',
    publishedDate: new Date('2008-09-14'),
    description:
      'A dystopian novel set in a post-apocalyptic world where children are forced to participate in a televised death match.',
  },
];

@Injectable()
export class BookService {
  constructor(private books: Book[] = defaultBooks) {}

  findAll(): Book[] {
    return this.books;
  }

  findById(id: number): Book {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException();
    }

    return book;
  }

  create(book: Omit<Book, 'id'>): Book {
    const id = this.books.length + 1;
    const newBook: Book = { id, ...book };

    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updatedBookData: Partial<Omit<Book, 'id'>>): Book {
    const index = this.books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    const book = this.books[index];
    const updatedBook = { ...book, ...updatedBookData };
    this.books[index] = updatedBook;

    return updatedBook;
  }

  remove(id: number): void {
    const index = this.books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    this.books.splice(index);
  }
}
