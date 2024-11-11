
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
      name: "Operating System Concepts 10th Edition",
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
  
  // Variables ==================================================
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  
  
  // Display all products =======================================
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
          <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            
          </div>
      `
      )
      .join("");
  };
  displayProducts(data);
  
  // Add event listener for search input ===========================
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  // Set Categories =================================================
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    // Event listener for category ===================================
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  
  
  setCategories();

  