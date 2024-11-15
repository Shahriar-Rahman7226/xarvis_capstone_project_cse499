const data = [
    {
      id: 1,
      name: "Electronic Devices And Circuits Theory (Robert L. Boylestad, Louis Nashelsky)",
      img: "https://i.ibb.co/HKFjFSr/Electronic-Devices-And-Circuits-Theory-10th-Edition-English-Paperback-Robert-L-Boylestad-Louis-Nashe.jpg",
      cat: "EEE",
    },
    {
      id: 2,
      name: "Fundamentals of Electric Circuits 6th_Sadiku",
      img: "https://i.ibb.co/fdT6y1x/Fundamentals-of-Electric-Circuits-6th-Sadiku.jpg",
      cat: "EEE",
    },
    {
      id: 3,
      name: "Operating System Concepts 10th Edition",
      img: "https://i.ibb.co/DkmHkTT/Operating-System-Concepts-by-Abraham-Silberschatz-Greg-Gagne-and-Peter-Baer-Galvin.jpg",
      cat: "CSE",
    },
    {
      id: 4,
      name: "Computer Organization and Architecture by William Stallings",
      img: "https://i.ibb.co/CKDgvmF/Computer-Organization-and-Architecture-by-William-Stallings.jpg",
      cat: "CSE",
    },
    {
      id: 5,
      name: "Digital Systems: Principles and Applications",
      img: "https://i.ibb.co/ggGdqmP/Digital-Systems-Principles-and-Applications.jpg",
      cat: "CSE",
    },
    {
      id: 6,
      name: "Introduction to Algorithms",
      img: "https://i.ibb.co/7XsWmWf/Introduction-to-Algorithms.jpg",
      cat: "CSE",
    },
    {
      id: 7,
      name: "Calculus (10th Edition) by Howard Anton, Irl Bivens, and Stephen Davis",
      img: "https://i.ibb.co/wW2D4KB/Calculus-10th-Edition-by-Howard-Anton-Irl-Bivens-and-Stephen-Davis.png",
      cat: "MAT",
    },
    {
      id: 8,
      name: "Probability and Statistics",
      img: "https://i.ibb.co/sgyrs7V/Probability-and-Statistics.jpg",
      cat: "MAT",
    },
    {
      id: 9,
      name: "Fundamentals of Physics",
      img: "https://i.ibb.co/M9mvmF6/Fundamentals-of-Physics.jpg",
      cat: "PHY",
    },
    {
      id: 10,
      name: "Introduction to Composition",
      img: "https://i.ibb.co/XCGzRPh/Introduction-to-Composition.png",
      cat: "ENG",
    },
    {
      id: 11,
      name: "Problem Solving and Program Design in C",
      img: "https://i.ibb.co/7bwWMDJ/Problem-Solving-and-Program-Design-in-C.jpg",
      cat: "CSE",
    },
    {
      id: 12,
      name: "Precalculus",
      img: "https://i.ibb.co/dQbdHym/Precalculus.jpg",
      cat: "MAT",
    },
    {
      id: 13,
      name: "A History of Modern Europe",
      img: "https://i.ibb.co/y59dTLq/A-History-of-Modern-Europe.jpg",
      cat: "HIS",
    },
    {
      id: 14,
      name: "Communicate",
      img: "https://i.ibb.co/GPmmrtt/Communicate.jpg",
      cat: "ENG",
    },
    {
      id: 15,
      name: "Elementary Linear Algebra",
      img: "https://i.ibb.co/vLxcqyW/Elementary-Linear-Algebra.jpg",
      cat: "MAT",
    },
    {
      id: 16,
      name: "Java The Complete Reference, Eleventh Edition",
      img: "https://i.ibb.co/j4JKSVz/Java-The-Complete-Reference-Eleventh-Edition.jpg",
      cat: "CSE",
    },
  ];
  
  let productsData = [...data];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `<div class="product" data-id="${product.id}">
            <img src="${product.img}" alt="">
            <span class="name">${product.name}</span>
            <div class="buttons">
              <button class="view-btn">View</button>
              <button class="download-btn">Download</button>
              <button class="delete-btn">Delete</button>
            </div>
          </div>`
      )
      .join("");
  
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.target.closest('.product').dataset.id;
        deleteProduct(productId);
      });
    });
  };
  
  const deleteProduct = (id) => {
    productsData = productsData.filter(product => product.id != id);
    displayProducts(productsData);
  };
  
  const setCategories = () => {
    const allCats = productsData.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => allCats.indexOf(item) === i),
    ];
  
    categoriesContainer.innerHTML = categories
      .map((cat) => `<span class="cat">${cat}</span>`)
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
      selectedCat === "All"
        ? displayProducts(productsData)
        : displayProducts(productsData.filter((item) => item.cat === selectedCat));
    });
  };
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    value
      ? displayProducts(productsData.filter((item) => item.name.toLowerCase().includes(value)))
      : displayProducts(productsData);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    displayProducts(productsData);
    setCategories();
  });
  