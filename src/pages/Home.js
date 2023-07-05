// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import Profile from "./Profile";

// function Home({ isAuth }) {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);

//   const deletepList = async (id) => {
//     setRandstate(randstate + 1);
//     const pListDoc = doc(db, "pLists", id);
//     await deleteDoc(pListDoc);
//   };

//   useEffect(() => {
//     const getpLists = async () => {
//       const data = await getDocs(pListsCollectionRef);
//       console.log(data);
//       setpListList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="homePage-About">
//         <h1>
//           JUST CLICK AND EXPLORE THIS{" "}
//           <span style={{ color: "#1db954" }}>AMZING</span> WORLD OF MUSIC!
//         </h1>
//         <h3>What's stopping you?</h3>
//       </div>
//       <div className="homePage">
//         {pListLists.map((pList) => {
//           function SetCSS() {
//             const cssType = pList.pListType;
//             // const [pListCSS, setpListCSS] = useState("pList");
//             // setpListCSS(pListCSS + " " + cssType);
//             // console.log(pListCSS);
//             return cssType + " " + "pList";
//           }

//           return (
//             <div className={SetCSS()}>
//               <div className="creatorName">
//                 <h2>{pList.author.name}</h2>
//               </div>
//               <div className="pListHeader">
//                 <div className="title">
//                   <h1>{pList.title}</h1>
//                 </div>

//                 <div className="deletepList">
//                   {isAuth && pList.author.id === auth.currentUser.uid && (
//                     <button
//                       onClick={() => {
//                         deletepList(pList.id);
//                       }}
//                     >
//                       {" "}
//                       &#128465;
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="pListTextContainer pListText">
//                 {pList.pListText}
//               </div>
//               <a href={pList.pListLink} target="_blank">
//                 <div className="pListTextContainer pListLink">Listen Now</div>
//               </a>
//               <h3 >@{pList.author.name}</h3>
//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;


// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import Profile from "./Profile";

// function Home({ isAuth }) {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);

//   const deletepList = async (id) => {
//     setRandstate(randstate + 1);
//     const pListDoc = doc(db, "pLists", id);
//     await deleteDoc(pListDoc);
//   };

//   useEffect(() => {
//     const getpLists = async () => {
//       const data = await getDocs(pListsCollectionRef);
//       console.log(data);
//       setpListList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="homePage-About">
//         <h1>
//           JUST CLICK AND EXPLORE THIS{" "}
//           <span style={{ color: "#1db954" }}>AMZING</span> WORLD OF MUSIC!
//         </h1>
//         <h3>What's stopping you?</h3>
//       </div>
//       <div className="homePage">
//         {pListLists.map((pList) => {
//           function SetCSS() {
//             const cssType = pList.pListType;
//             // const [pListCSS, setpListCSS] = useState("pList");
//             // setpListCSS(pListCSS + " " + cssType);
//             // console.log(pListCSS);
//             return cssType + " " + "pList";
//           }

//           return (
//             <div className={SetCSS()}>
//               <div className="creatorName">
//                 <h2>{pList.author.name}</h2>
//               </div>
//               <div className="pListHeader">
//                 <div className="title">
//                   <h1>{pList.title}</h1>
//                 </div>

//                 <div className="deletepList">
//                   {isAuth && pList.author.id === auth.currentUser.uid && (
//                     <button
//                       onClick={() => {
//                         deletepList(pList.id);
//                       }}
//                     >
//                       {" "}
//                       &#128465;
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="pListTextContainer pListText">
//                 {pList.pListText}
//               </div>
//               <a href={pList.pListLink} target="_blank">
//                 <div className="pListTextContainer pListLink">Listen Now</div>
//               </a>
//               <h3 style={{ color: 'white' }}>@{pList.author.name}</h3>

//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import Profile from "./Profile";

// function Home({ isAuth }) {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);

//   const deletepList = async (id) => {
//     setRandstate(randstate + 1);
//     const pListDoc = doc(db, "pLists", id);
//     await deleteDoc(pListDoc);
//   };

//   useEffect(() => {
//     const getpLists = async () => {
//       const data = await getDocs(pListsCollectionRef);
//       console.log(data);
//       setpListList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="homePage-About">
//         <h1>
//           JUST CLICK AND EXPLORE THIS{" "}
//           <span style={{ color: "#1db954" }}>AMZING</span> WORLD OF MUSIC!
//         </h1>
//         <h3>What's stopping you?</h3>
//       </div>
//       <div className="homePage">
//         {pListLists.map((pList) => {
//           function SetCSS() {
//             const cssType = pList.pListType;
//             // const [pListCSS, setpListCSS] = useState("pList");
//             // setpListCSS(pListCSS + " " + cssType);
//             // console.log(pListCSS);
//             return cssType + " " + "pList";
//           }

//           return (
//             <div className={SetCSS()}>
//               <div className="creatorName">
//                 <h2>{pList.author.name}</h2>
//               </div>
//               <div className="pListHeader">
//                 <div className="title">
//                   <h1>{pList.title}</h1>
//                 </div>

//                 <div className="deletepList">
//                   {isAuth && pList.author.id === auth.currentUser.uid && (
//                     <button
//                       onClick={() => {
//                         deletepList(pList.id);
//                       }}
//                     >
//                       {" "}
//                       &#128465;
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="pListTextContainer pListText">
//                 {pList.pListText}
//               </div>
//               <a href={pList.pListLink} target="_blank">
//                 <div className="pListTextContainer pListLink">Listen Now</div>
//               </a>
//               <h3 style={{ color: 'white' }}>@{pList.author.name}</h3>

//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db, auth } from "../firebase-config";
// import { Link } from "react-router-dom";

// function Home({ isAuth }) {
//   const [pLists, setpLists] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchpLists();
//   }, []);

//   const fetchpLists = async () => {
//     const pListsCollectionRef = collection(db, "pLists");
//     const pListsQuery = query(pListsCollectionRef, where("author.id", "==", auth.currentUser.uid));
//     const pListsSnapshot = await getDocs(pListsQuery);
//     const pListsData = pListsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     setpLists(pListsData);
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <>
//       <div className="pListContainer">
//         {pLists
//           .filter((pList) => {
//             if (searchQuery === "") {
//               return true;
//             } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
//               return true;
//             }
//             return false;
//           })
//           .map((pList) => (
//             <div className={SetCSS()}>
//               <div className="creatorName">
//                 <h2>{pList.author.name}</h2>
//               </div>
//               <div className="pListHeader">
//                 <div className="title">
//                   <h1>{pList.title}</h1>
//                 </div>

//                 <div className="deletepList">
//                   {isAuth && pList.author.id === auth.currentUser.uid && (
//                     <button
//                       onClick={() => {
//                         deletepList(pList.id);
//                       }}
//                     >
//                       {" "}
//                       &#128465;
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="pListTextContainer pListText">{pList.pListText}</div>
//               <a href={pList.pListLink} target="_blank">
//                 <div className="pListTextContainer pListLink">Listen Now</div>
//               </a>
//               <h3 style={{ color: 'white' }}>@{pList.author.name}</h3>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export default Home;


// import { useState, useEffect } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db, auth } from "../firebase-config";
// import Footer from "../pages/Footer";
// import "./Profile1.css"

// function Home({ isAuth, searchQuery }) {
//   const [pLists, setPLists] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const pListsCollectionRef = collection(db, "pLists");
//       const pListsSnapshot = await getDocs(pListsCollectionRef);
//       const pListsData = pListsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPLists(pListsData);
//     };

//     fetchData();
//   }, []);

//   const deletepList = async (pListId) => {
//     try {
//       await deleteDoc(doc(db, "pLists", pListId));
//       setPLists((prevPLists) => prevPLists.filter((pList) => pList.id !== pListId));
//     } catch (error) {
//       console.error("Error deleting playlist:", error);
//     }
//   };

//   const filteredPLists = pLists.filter((pList) => {
//     if (searchQuery === "") {
//       return true;
//     } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });

//   return (
//     <div>
//       {filteredPLists.map((pList) => (
//         <div key={pList.id}>
//           <div className="creatorName">
//             <h2>{pList.author.name}</h2>
//           </div>
//           <div className="pListHeader">
//             <div className="title">
//               <h1>{pList.title}</h1>
//             </div>

//             <div className="deletepList">
//               {isAuth && pList.author.id === auth.currentUser.uid && (
//                 <button onClick={() => deletepList(pList.id)}> &#128465;</button>
//               )}
//             </div>
//           </div>
//           <div className="pListTextContainer pListText">{pList.pListText}</div>
//           <a href={pList.pListLink} target="_blank" rel="noopener noreferrer">
//             <div className="pListTextContainer pListLink">Listen Now</div>
//           </a>
//           <h3 style={{ color: "white" }}>@{pList.author.name}</h3>
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default Home;


// import { useState, useEffect } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db, auth } from "../firebase-config";
// import Footer from "../pages/Footer";
// import "./Profile1.css"

// function Home({ isAuth, searchQuery }) {
//   const [pLists, setPLists] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const pListsCollectionRef = collection(db, "pLists");
//       const pListsSnapshot = await getDocs(pListsCollectionRef);
//       const pListsData = pListsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPLists(pListsData);
//     };

//     fetchData();
//   }, []);

//   const deletepList = async (pListId) => {
//     try {
//       await deleteDoc(doc(db, "pLists", pListId));
//       setPLists((prevPLists) => prevPLists.filter((pList) => pList.id !== pListId));
//     } catch (error) {
//       console.error("Error deleting playlist:", error);
//     }
//   };

//   const filteredPLists = pLists.filter((pList) => {
//     if (searchQuery === "") {
//       return true;
//     } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });

//   return (
//     <div>
//       {filteredPLists.map((pList) => (
//         <div key={pList.id}>
//           <div className="creatorName">
//             <h2>{pList.author.name}</h2>
//           </div>
//           <div className="pListHeader">
//             <div className="title">
//               <h1>{pList.title}</h1>
//             </div>

//             <div className="deletepList">
//               {isAuth && pList.author.id === auth.currentUser.uid && (
//                 <button onClick={() => deletepList(pList.id)}> &#128465;</button>
//               )}
//             </div>
//           </div>
//           <div className="pListTextContainer pListText">{pList.pListText}</div>
//           <a href={pList.pListLink} target="_blank" rel="noopener noreferrer">
//             <div className="pListTextContainer pListLink">Listen Now</div>
//           </a>
//           <h3 style={{ color: "white" }}>@{pList.author.name}</h3>
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default Home;


// import { useState, useEffect } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db, auth } from "../firebase-config";
// import Footer from "../pages/Footer";
// import "./Profile1.css";

// function Home({ isAuth, searchQuery }) {
//   const [pLists, setPLists] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const pListsCollectionRef = collection(db, "pLists");
//       const pListsSnapshot = await getDocs(pListsCollectionRef);
//       const pListsData = pListsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPLists(pListsData);
//     };

//     fetchData();
//   }, []);

//   const deletepList = async (pListId) => {
//     try {
//       await deleteDoc(doc(db, "pLists", pListId));
//       setPLists((prevPLists) => prevPLists.filter((pList) => pList.id !== pListId));
//     } catch (error) {
//       console.error("Error deleting playlist:", error);
//     }
//   };

//   const filteredPLists = pLists.filter((pList) => {
//     if (searchQuery === "") {
//       return true;
//     } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });

//   return (
//     <div>
//       {filteredPLists.map((pList) => (
        
//         <div key={pList.id} className="bsds">
//           <div className={SetCSS()}>
//             <div className="pListHeader">
//               <div className="title">
//                 <h1>{pList.title}</h1>
//               </div>

//               <div className="deletepList">
//                 {isAuth && pList.author.id === auth.currentUser.uid && (
//                   <button
//                     className="button"
//                     onClick={() => {
//                       deletepList(pList.id);
//                     }}
//                   >
//                     &#128465;
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div className="pListTextContainer pListText">{pList.pListText}</div>
//             <a href={pList.pListLink}>
//               <div>
//                 <button
//                   className="pListTextContainer pListLink button-27"
//                   role="button"
//                   style={{ backgroundColor: "white", color: "black" }}
//                 >
//                   Listen Now
//                 </button>
//               </div>
//             </a>
//             <div className="authorName">
//               <h3 style={{ color: "white", transition: "color 0.3s ease-in-out" }}>
//                 @{pList.author.name}
//               </h3>
//             </div>
//           </div>
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db, auth } from "../firebase-config";
// import Footer from "../pages/Footer";
// import "./Profile1.css";

// function SetCSS(pList) {
//   const cssType = pList.pListType;
//   return cssType + " " + "pList";
// }

// function Home({ isAuth, searchQuery }) {
//   const [pLists, setPLists] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const pListsCollectionRef = collection(db, "pLists");
//       const pListsSnapshot = await getDocs(pListsCollectionRef);
//       const pListsData = pListsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPLists(pListsData);
//     };

//     fetchData();
//   }, []);

//   const deletepList = async (pListId) => {
//     try {
//       await deleteDoc(doc(db, "pLists", pListId));
//       setPLists((prevPLists) => prevPLists.filter((pList) => pList.id !== pListId));
//     } catch (error) {
//       console.error("Error deleting playlist:", error);
//     }
//   };

//   const filteredPLists = pLists.filter((pList) => {
//     if (searchQuery === "") {
//       return true;
//     } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });

//   return (
//     <div>
//       {filteredPLists.map((pList) => (
//         <div key={pList.id}>
//           <div className="creatorName">
//             <div className={SetCSS(pList)}>
//               <div className="pListHeader">
//                 <div className="title">
//                   <h1>{pList.title}</h1>
//                 </div>

//                 <div className="deletepList">
//                   {isAuth && pList.author.id === auth.currentUser.uid && (
//                     <button className="button"
//                       onClick={() => {
//                         deletepList(pList.id);
//                       }}
//                     >
//                       &#128465;
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="pListTextContainer pListText">
//                 {pList.pListText}
//               </div>
//               <a href={pList.pListLink}>
//                 <div>
//                   <button className="pListTextContainer pListLink button-27" role="button" style={{ backgroundColor: 'white', color: 'black' }}>
//                     Listen Now
//                   </button>
//                 </div>
//               </a>
//               <div className="authorName">
//                 <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//                   @{pList.author.name}
//                 </h3>
//               </div>
//             </div>
//           </div>
//        </div>
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import Footer from "../pages/Footer";
import "./Profile1.css";

function SetCSS(pList) {
  const cssType = pList.pListType;
  return cssType + " " + "pList";
}

function Home({ isAuth, searchQuery }) {
  const [pLists, setPLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pListsCollectionRef = collection(db, "pLists");
      const pListsSnapshot = await getDocs(pListsCollectionRef);
      const pListsData = pListsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPLists(pListsData);
    };

    fetchData();
  }, []);

  const deletepList = async (pListId) => {
    try {
      await deleteDoc(doc(db, "pLists", pListId));
      setPLists((prevPLists) => prevPLists.filter((pList) => pList.id !== pListId));
    } catch (error) {
      console.error("Error deleting playlist:", error);
    }
  };

  const filteredPLists = pLists.filter((pList) => {
    if (searchQuery === "") {
      return true;
    } else if (pList.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (

    <div className="homePage">

      <div className="entries-container ">
    <div>

      
      {filteredPLists.map((pList) => (
        <div key={pList.id}>
          <div className="creatorName">
            <div className={SetCSS(pList)}>
              <div className="pListHeader">
                <div className="title">
                  <h1>{pList.title}</h1>
                </div>

                <div className="deletepList">
                  {isAuth && pList.author.id === auth.currentUser.uid && (
                    <button className="button"
                      onClick={() => {
                        deletepList(pList.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="pListTextContainer pListText">
                {pList.pListText}
              </div>
              <a href={pList.pListLink}>
                <div>
                  <button className="pListTextContainer pListLink button-27" role="button" style={{ backgroundColor: 'white', color: 'black' }}>
                    Listen Now
                  </button>
                </div>
              </a>
              <div className="authorName">
                <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
                  @{pList.author.name}
                </h3>
              </div>
            </div>
          </div>
       </div>
      ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
