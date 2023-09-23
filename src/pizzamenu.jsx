// // import React, { useEffect, useState } from 'react';
// // import './App.css';

// // const Pizzamenu = () => {
// //   const [itemName, setItemName] = useState(''); // To store item
// //   const [arrayOfMenu, setArrayOfMenu] = useState([]);

// //   const searchHandler = async () => {
// //     try {
// //       const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${itemName}`);

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

// //       const data = await response.json();
// //       const dataMenu = data.data || [];

// //       console.log(dataMenu);

// //       setArrayOfMenu(dataMenu.recipes);
// //     } catch (error) {
// //       console.log('Error on Fetching Data', error);
// //     }
// //   };

// //   useEffect(() => {
// //     // Fetch data initially with an empty dish name
// //     searchHandler();
// //   }, [itemName]); // Corrected the dependency to 'itemName'

// //   const inputChangeHandler = (event) => {
// //     setItemName(event.target.value);
// //   };

// //   const handleInputKey = (event) => {
// //     if (event.key === 'Enter') {
// //       searchHandler();
// //     }
// //   };

// //   return (
    
// //     <div className='container'>
// //       <div className='navbar'>
// //         <h1 className='topHeading'>
// //           - FAST REACT PIZZA CO. -
// //         </h1>
// //         <div className='ourMenu'>
// //           <p>Our Menu</p>
// //         </div>
// //         <div className='navPara'>
// //           Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
// //         </div>
// //       </div>

// //       <div className='input'>
// //         <input
// //           type="text"
// //           value={itemName}
// //           placeholder='Search Your Menu'
// //           onChange={inputChangeHandler}
// //           onKeyPress={handleInputKey}
// //           className='menuInput'
// //         />
// //       </div>

// //       <div className="maindiv">
// //         <div className="menuDiv">
// //         {arrayofmenu.map((singlemenu) => (
// //                 <SingleMenu key={singlemenu.id} dataofsinglemenu={singlemenu} />
// //             ))}
// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // function SingleMenu(props) {
// //   const { title, publisher, image_url } = props.dataofsinglemenu || {};
// //   const likes = Math.round(Math.random() * 100);

// //   return (
// //       <div className='singlemenudiv'>
// //           <div className='imagediv'>
// //               <img src={image_url} alt='' />
// //           </div>
// //           <div className='textcontentofdiv'>
// //               <div className='headingofdiv'>{title}</div>
// //               <p className='descriptionofdiv'>{publisher}</p>
// //               <p className='likesofdiv'>{likes}</p>
// //           </div>
// //       </div>
// //   );
// // }

// // export default Pizzamenu;



// import React, { useEffect, useState } from 'react';
// import './App.css';

// const Pizzamenu = () => {
//   const [itemName, setItemName] = useState(''); // To store item
//   const [arrayOfMenu, setArrayOfMenu] = useState([]);

//   const searchHandler = async () => {
//     try {
//       const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${itemName}`);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       const dataMenu = data.data || [];

//       console.log(dataMenu);

//       setArrayOfMenu(dataMenu.recipes);
//     } catch (error) {
//       console.error('Error on Fetching Data', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch data initially with an empty dish name
//     searchHandler();
//   }, [itemName]); // Corrected the dependency to 'itemName'

//   const inputChangeHandler = (event) => {
//     setItemName(event.target.value);
//   };

//   const handleInputKey = (event) => {
//     if (event.key === 'Enter') {
//       searchHandler();
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='navbar'>
//         <h1 className='topHeading'>
//           - FAST REACT PIZZA CO. -
//         </h1>
//         <div className='ourMenu'>
//           <p>Our Menu</p>
//         </div>
//         <div className='navPara'>
//           Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
//         </div>
//       </div>

//       <div className='input'>
//         <input
//           type="text"
//           value={itemName}
//           placeholder='Search Your Menu'
//           onChange={inputChangeHandler}
//           onKeyPress={handleInputKey}
//           className='menuInput'
//         />
//       </div>

//       <div className="maindiv">
//         <div className="menuDiv">
//           {arrayOfMenu.map((singlemenu) => (
//             <SingleMenu key={singlemenu.id} dataofsinglemenu={singlemenu} />
//           ))}
//         </div>
//       </div>
//       <footer>
//       <div>We're open from 12:00 to 22:00. Come visit us or order online</div>
//       <button> Order </button>
//     </footer>

//     </div>
//   );

// };

// function SingleMenu(props) {
//   const { title, publisher, image_url } = props.dataofsinglemenu || {};
//   const likes = Math.round(Math.random() * 100);

//   return (
//     <div className='singlemenudiv'>
//       <div className='imagediv'>
//         <img src={image_url} alt='' />
//       </div>
//       <div className='textcontentofdiv'>
//         <div className='headingofdiv'>{title}</div>
//         <p className='descriptionofdiv'>{publisher}</p>
//         <p className='likesofdiv'>{likes}</p>
//       </div>
//     </div>
    
//   );
// }




// export default Pizzamenu;


import React, { useEffect, useState } from 'react';
import './App.css';

const Pizzamenu = () => {
  const [itemName, setItemName] = useState(''); // To store item
  const [arrayOfMenu, setArrayOfMenu] = useState([]);

  const searchHandler = async () => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${itemName}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const dataMenu = data.data || [];

      console.log(dataMenu);

      setArrayOfMenu(dataMenu.recipes);
    } catch (error) {
      console.error('Error on Fetching Data', error);
    }
  };

  useEffect(() => {
    // Fetch data initially with an empty dish name
    searchHandler();
  }, [itemName]); // Corrected the dependency to 'itemName'

  const inputChangeHandler = (event) => {
    setItemName(event.target.value);
  };

  const handleInputKey = (event) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <div className='container'>
      <div className='navbar'>
        <h1 className='topHeading'>
          - FAST REACT PIZZA CO. -
        </h1>
        <div className='ourMenu'>
          <p>Our Menu</p>
        </div>
        <div className='navPara'>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </div>
      </div>

      <div className='input'>
        <input
          type="text"
          value={itemName}
          placeholder='Search Your Menu'
          onChange={inputChangeHandler}
          onKeyPress={handleInputKey}
          className='menuInput'
        />
      </div>

      <div className="maindiv">
        <div className="menuDiv">
          {arrayOfMenu.map((singlemenu) => (
            <SingleMenu key={singlemenu.id} dataofsinglemenu={singlemenu} />
          ))}
        </div>
      </div>

      <footer>
        <div className='footerPara'> <p>We're open from 12:00 to 22:00. Come visit us or order online</p></div>
        <div className="footerbtn">
        <button className='footerButton'>Order</button>
        </div>
      </footer>
    </div>
  );
};

function SingleMenu(props) {
  const { title, publisher, image_url } = props.dataofsinglemenu || {};
  const likes = Math.round(Math.random() * 100);

  return (
    <div className='singlemenudiv'>
      <div className='imagediv'>
        <img src={image_url} alt='' />
      </div>
      <div className='textcontentofdiv'>
        <div className='headingofdiv'>{title}</div>
        <p className='descriptionofdiv'>{publisher}</p>
        <p className='likesofdiv'>{likes}</p>
      </div>
    </div>
  );
}

export default Pizzamenu;

