interface User {
  name: string
  email: string
  image: string
  id: string
}

// interface Eventdetails {
//   name: string;
//   venue: string;
//   time: string;
//   date: string;
//   content: string;
//   sessionner: {User};  
//   status: boolean;
// }
interface Genre {
  id: number;
  name: string;
}

interface Developer {
  id: number;
  name: string;
}

interface CommentedPerson {
  sessionid: string;
  profileimg: string;
  name: string;
  message: string;
}

interface GameData {
  id: number;
  slug: string;
  name: string;
  likes: number; // Changed to number to match the expected type
  released: string;
  image: string;
  rating: number;
  description: string;
  developers: Developer[];
  genres: Genre[];
  Comments: CommentedPerson[];
}