const data = [
    {
      id: 1,
      name: "Electronic Devices And Circuits Theory (Robert L. Boylestad, Louis Nashelsky)",
      img: "https://i.ibb.co/HKFjFSr/Electronic-Devices-And-Circuits-Theory-10th-Edition-English-Paperback-Robert-L-Boylestad-Louis-Nashe.jpg",
      cat: "EEE",
      
      author: "Robert L. Boylestad, Louis Nashelsky",
      publisher: "Pearson Education",
      edition: "10th",
      uploadedby: "",
      
    },
    {
      id: 2,
      name: "Fundamentals of Electric Circuits 6th_Sadiku",
      img: "https://i.ibb.co/fdT6y1x/Fundamentals-of-Electric-Circuits-6th-Sadiku.jpg",
      cat: "EEE",
      
      author: "Matthew Sadiku, Charles Alexander",
      publisher: "McGraw-Hill",
      edition: "6th",
      uploadedby: "",
      
    },
    {
      id: 3,
      name: "Operating System Concepts 10th Edition",
      img: "https://i.ibb.co/DkmHkTT/Operating-System-Concepts-by-Abraham-Silberschatz-Greg-Gagne-and-Peter-Baer-Galvin.jpg",
      cat: "CSE",
      
      author: "Abraham Silberschatz, Greg Gagne, Peter B. Galvin",
      publisher: "Wiley",
      edition: "10th",
      uploadedby: "",
      
    },

    {
        id: 4,
        name: "Computer Organization and Architecture",
        img: "https://i.ibb.co.com/CKDgvmF/Computer-Organization-and-Architecture-by-William-Stallings.jpg",
        cat: "CSE",

        author: "William Stallings",
        publisher: "Pearson Education",
        edition: "10th",
        uploadedby: "",
       
      



      },


      {
        id: 5,
        name: "Digital Systems: Principles and Applications",
        img: "https://i.ibb.co.com/ggGdqmP/Digital-Systems-Principles-and-Applications.jpg",
        cat: "CSE",

        author: "Ronald Tocci; Neal Widmer; Gregory Moss",
        publisher: "Pearson Education",
        edition: "12th",
        uploadedby: "",
        
      
      },


      {
        id: 6,
        name: "Introduction to Algorithms",
        img: "https://i.ibb.co.com/7XsWmWf/Introduction-to-Algorithms.jpg",
        cat: "CSE",


        author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        publisher: "The MIT Press",
        edition: "4th",
        uploadedby: "",
        
        
      
      },




      {
        id: 7,
        name: "Calculus (10th Edition) by Howard Anton, Irl Bivens, and Stephen Davis",
        img: "https://i.ibb.co.com/wW2D4KB/Calculus-10th-Edition-by-Howard-Anton-Irl-Bivens-and-Stephen-Davis.png",
        cat: "MAT",

        author: "Howard Anton, Irl C. Bivens, Stephen Davis",
        publisher: "Wiley",
        edition: "10th",
        uploadedby: "",
       
      
      },



      {
        id: 8,
        name: "Probability and Statistics",
        img: "https://i.ibb.co.com/sgyrs7V/Probability-and-Statistics.jpg",
        cat: "MAT",

        author: "Anthony J. Hayter",
        publisher: "Cengage Learning",
        edition: "4th",
        uploadedby: "",
        
      
      },



      {
        id: 9,
        name: "Fundamentals of Physics",
        img: "https://i.ibb.co.com/M9mvmF6/Fundamentals-of-Physics.jpg",
        cat: "PHY",

        author: "David Halliday, Robert Resnick, Jearl Walker",
        publisher: "Wiley",
        edition: "10th",
        uploadedby: "",
        
      
      },



      {
        id: 10,
        name: "Introduction to Composition",
        img: "https://i.ibb.co.com/XCGzRPh/Introduction-to-Composition.png",
        cat: "ENG",

        author: "NSU",
        publisher: "NSU Book Shop",
        edition: "4th",
        uploadedby: "",
        
      
      },



      {
        id: 11,
        name: "Problem Solving and Program Design in C",
        img: "https://i.ibb.co.com/7bwWMDJ/Problem-Solving-and-Program-Design-in-C.jpg",
        cat: "CSE",

        author: "Jeri Hanly, Elliot Koffman",
        publisher: "Pearson Education",
        edition: "8th",
        uploadedby: "",
        
      
      },



      {
        id: 12,
        name: "Precalculus",
        img: "https://i.ibb.co.com/dQbdHym/Precalculus.jpg",
        cat: "MAT",

        author: "Michael Sullivan",
        publisher: "Pearson Education",
        edition: "11th",
        uploadedby: "",
        
      
      },



      {
        id: 13,
        name: "A History of Modern Europe",
        img: "https://i.ibb.co.com/y59dTLq/A-History-of-Modern-Europe.jpg",
        cat: "HIS",

        author: "John Merriman",
        publisher: "W. W. Norton & Company",
        edition: "3rd",
        uploadedby: "",
        
      
      },



      {
        id: 14,
        name: "Communicate",
        img: "https://i.ibb.co.com/GPmmrtt/Communicate.jpg",
        cat: "ENG",

        author: "Kathleen S. Verderber, Deanna D. Sellnow, Rudolph F. Verderber",
        publisher: "Cengage Learning",
        edition: "15th",
        uploadedby: "",
        
      
      },



      {
        id: 15,
        name: "Elementary Linear Algebra",
        img: "https://i.ibb.co.com/vLxcqyW/Elementary-Linear-Algebra.jpg",
        cat: "MAT",

        author: "Howard Anton, Chris Rorres",
        publisher: "Wiley",
        edition: "10th",
        uploadedby: "",
        
      
      },



      {
        id: 16,
        name: "Java The Complete Reference, Eleventh Edition",
        img: "https://i.ibb.co.com/j4JKSVz/Java-The-Complete-Reference-Eleventh-Edition.jpg",
        cat: "CSE",

        author: "Herbert Schildt",
        publisher: "McGraw Hill",
        edition: "11th",
        uploadedby: "",
       
      
      },
    
  ];
  
  const productDetailContainer = document.querySelector('.product-detail');
  
  // Extract product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  
  const product = data.find((item) => item.id === productId);
  
  if (product) {
    productDetailContainer.innerHTML = `
      <div class="product-detail-content">
        <img src="${product.img}" alt="${product.name}" class="product-image" />
        <div class="product-info">
          <h2 class="product-name">${product.name}</h2>
          <p><strong>Category:</strong> ${product.cat}</p>
          <p><strong>Author:</strong> ${product.author}</p>
          <p><strong>Publisher:</strong> ${product.publisher}</p>
          <p><strong>Edition:</strong> ${product.edition}</p>
          
          <p><strong>Uploaded By:</strong> ${product.uploadedby}</p>
          
          <button class="download-btn">Download</button>
        </div>
      </div>
    `;
  }
  