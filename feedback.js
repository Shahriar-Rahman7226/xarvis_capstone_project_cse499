const data = [

    {
        id: 1,
        name: "Electronic Devices And Circuits Theory (English, Paperback, Robert L. Boylestad, Louis Nashelsky)",
        img: "https://i.ibb.co.com/HKFjFSr/Electronic-Devices-And-Circuits-Theory-10th-Edition-English-Paperback-Robert-L-Boylestad-Louis-Nashe.jpg",
        cat: "EEE",
      },
      {
        id: 2,
        name: "Fundamentals of Electric Circuits 6th_Sadiku",
        img: "https://i.ibb.co.com/fdT6y1x/Fundamentals-of-Electric-Circuits-6th-Sadiku.jpg",
        cat: "EEE",
      },
      {
        id: 3,
        name: "Operating System Concepts 10th Edition",
        img: "https://i.ibb.co.com/DkmHkTT/Operating-System-Concepts-by-Abraham-Silberschatz-Greg-Gagne-and-Peter-Baer-Galvin.jpg",
        cat: "CSE",
      },
      {
        id: 4,
        name: "Computer Organization and Architecture",
        img: "https://i.ibb.co.com/CKDgvmF/Computer-Organization-and-Architecture-by-William-Stallings.jpg",
        cat: "CSE",
      },
      {
        id: 5,
        name: "Digital Systems: Principles and Applications",
        img: "https://i.ibb.co.com/ggGdqmP/Digital-Systems-Principles-and-Applications.jpg",
        cat: "CSE",
      },
      {
        id: 6,
        name: "Introduction to Algorithms",
        img: "https://i.ibb.co.com/7XsWmWf/Introduction-to-Algorithms.jpg",
        cat: "CSE",
      },
      {
        id: 7,
        name: "Calculus (10th Edition) by Howard Anton, Irl Bivens, and Stephen Davis",
        img: "https://i.ibb.co.com/wW2D4KB/Calculus-10th-Edition-by-Howard-Anton-Irl-Bivens-and-Stephen-Davis.png",
        cat: "MAT",
      },
      {
        id: 8,
        name: "Probability and Statistics",
        img: "https://i.ibb.co.com/sgyrs7V/Probability-and-Statistics.jpg",
        cat: "MAT",
      },
      {
        id: 9,
        name: "Fundamentals of Physics",
        img: "https://i.ibb.co.com/M9mvmF6/Fundamentals-of-Physics.jpg",
        cat: "PHY",
      },
      {
        id: 10,
        name: "Introduction to Composition",
        img: "https://i.ibb.co.com/XCGzRPh/Introduction-to-Composition.png",
        cat: "ENG",
      },
      {
        id: 11,
        name: "Problem Solving and Program Design in C",
        img: "https://i.ibb.co.com/7bwWMDJ/Problem-Solving-and-Program-Design-in-C.jpg",
        cat: "CSE",
      },
      {
        id: 12,
        name: "Precalculus",
        img: "https://i.ibb.co.com/dQbdHym/Precalculus.jpg",
        cat: "MAT",
      },
      {
        id: 13,
        name: "A History of Modern Europe",
        img: "https://i.ibb.co.com/y59dTLq/A-History-of-Modern-Europe.jpg",
        cat: "HIS",
      },
      {
        id: 14,
        name: "Communicate",
        img: "https://i.ibb.co.com/GPmmrtt/Communicate.jpg",
        cat: "ENG",
      },
      {
        id: 15,
        name: "Elementary Linear Algebra",
        img: "https://i.ibb.co.com/vLxcqyW/Elementary-Linear-Algebra.jpg",
        cat: "MAT",
      },
      {
        id: 16,
        name: "Java The Complete Reference, Eleventh Edition",
        img: "https://i.ibb.co.com/j4JKSVz/Java-The-Complete-Reference-Eleventh-Edition.jpg",
        cat: "CSE",
      },
    
    
  ];
  
  // Variables
  const bookSelect = document.querySelector("#book-select");
  const bookDetails = document.querySelector("#book-details");
  const reviewForm = document.getElementById("review-form");
  
  // Dynamically populate the book select dropdown
  const populateBookList = () => {
    bookSelect.innerHTML = data.map(
      (book) => `<option value="${book.id}">${book.name}</option>`
    ).join("");
  };
  
  // Display book details based on selected book
  const displayBookDetails = (bookId) => {
    const book = data.find(b => b.id === Number(bookId));
    if (book) {
      bookDetails.innerHTML = `
        <img src="${book.img}" alt="${book.name}" />
        <h2>${book.name}</h2>
        <p>Category: ${book.cat}</p>
      `;
    }
  };
  
  // Handle review form submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const reviewText = document.getElementById("review").value;
    const selectedBookId = bookSelect.value;
  
    const book = data.find(b => b.id === Number(selectedBookId));
  
    if (book) {
      alert(`Thank you for your review!\n\nBook: ${book.name}\nRating: ${rating} stars\nReview: ${reviewText}`);
      // Optionally, send the review to a backend or store it in local storage
    }
  });
  
  // Event listener to update book details when a book is selected
  bookSelect.addEventListener("change", (e) => {
    const selectedBookId = e.target.value;
    displayBookDetails(selectedBookId);
  });
  
  // Initialize page
  populateBookList();
  displayBookDetails(bookSelect.value); // Display details for the first book by default
  