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
  const bookSearchInput = document.querySelector("#book-search");
  const searchResultsContainer = document.querySelector("#search-results");
  const readList = document.querySelector("#read-list");
  const wantToReadList = document.querySelector("#want-to-read-list");
  const saveButton = document.querySelector("#save-list");
  
  // Display books on the search results
  const displaySearchResults = (filteredBooks) => {
    searchResultsContainer.innerHTML = filteredBooks
      .map(
        (book) => `
          <div class="search-item" data-id="${book.id}">
            <span>${book.name}</span>
            <button class="add-to-read">Add to Read</button>
            <button class="add-to-want">Add to Want to Read</button>
          </div>
        `
      )
      .join("");
  };
  
  // Filter books based on user input
  const filterBooks = (query) => {
    return data.filter(book =>
      book.name.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  // Add book to "Already Read" list
  const addToReadList = (bookId) => {
    const book = data.find(b => b.id === Number(bookId));
    if (book) {
      const listItem = document.createElement('li');
      listItem.textContent = book.name;
      readList.appendChild(listItem);
    }
  };
  
  // Add book to "Want to Read" list
  const addToWantToReadList = (bookId) => {
    const book = data.find(b => b.id === Number(bookId));
    if (book) {
      const listItem = document.createElement('li');
      listItem.textContent = book.name;
      wantToReadList.appendChild(listItem);
    }
  };



  // Save the reading lists to localStorage
const saveReadingList = () => {
    const readBooks = [...readList.children].map(item => item.textContent);
    const wantToReadBooks = [...wantToReadList.children].map(item => item.textContent);
    
    // Save lists to localStorage
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
    localStorage.setItem('wantToReadBooks', JSON.stringify(wantToReadBooks));
    alert("Reading list saved!");
  };
  
  // Load the saved reading lists from localStorage
  const loadSavedReadingList = () => {
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const savedWantToReadBooks = JSON.parse(localStorage.getItem('wantToReadBooks')) || [];
  
    savedReadBooks.forEach(bookName => {
      const listItem = document.createElement('li');
      listItem.textContent = bookName;
      readList.appendChild(listItem);
    });
  
    savedWantToReadBooks.forEach(bookName => {
      const listItem = document.createElement('li');
      listItem.textContent = bookName;
      wantToReadList.appendChild(listItem);
    });
  };







  
  // Handle search input
  bookSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query) {
      const filteredBooks = filterBooks(query);
      displaySearchResults(filteredBooks);
    } else {
      searchResultsContainer.innerHTML = "";
    }
  });
  
  // Handle button clicks for adding books to lists
  searchResultsContainer.addEventListener("click", (e) => {
    const bookId = e.target.closest('.search-item')?.getAttribute('data-id');
    if (e.target.classList.contains("add-to-read")) {
      addToReadList(bookId);
    } else if (e.target.classList.contains("add-to-want")) {
      addToWantToReadList(bookId);
    }
  });


  // Handle saving the lists
saveButton.addEventListener("click", saveReadingList);

// Load saved lists on page load
window.addEventListener("DOMContentLoaded", loadSavedReadingList);
  