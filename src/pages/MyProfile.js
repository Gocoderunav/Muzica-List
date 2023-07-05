// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Profile.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       setuserName(auth.currentUser.displayName);
//       setuserPhoto(auth.currentUser.photoURL);
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto}></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           {" "}
//           <div className="profile-CreateLink-button">Add Your Playlist </div>{" "}
//         </Link>
//       </div>

//       <div className="homePage">
//         {pListLists.map((pList) => {
//           ////////////////////////
//           function SetCSS() {
//             const cssType = pList.pListType;
//             // const [pListCSS, setpListCSS] = useState("pList");
//             // setpListCSS(pListCSS + " " + cssType);
//             // console.log(pListCSS);
//             return cssType + " " + "pList";
//           }
//           ////////////////////////////////////
//           return (
//             <>
//               {isAuth && pList.author.id === auth.currentUser.uid && (
//                 <div className={SetCSS()}>
//                   {/* <div className="creatorName">   // it doesn't make sense to show name on profile
//                     <h2>{pList.author.name}</h2>
//                   </div> */}
//                   <div className="pListHeader">
//                     <div className="title">
//                       <h1>{pList.title}</h1>
//                     </div>

//                     <div className="deletepList">
//                       {isAuth && pList.author.id === auth.currentUser.uid && (
//                         <button
//                           onClick={() => {
//                             deletepList(pList.id);
//                           }}
//                         >
//                           {" "}
//                           &#128465;
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="pListTextContainer pListText">
//                     {pList.pListText}
//                   </div>
//                   <a href={pList.pListLink}>
//                     <div className="pListTextContainer pListLink">
//                       Listen Now
//                     </div>
//                   </a>
//                   <h3>@{pList.author.name}</h3>
//                 </div>
//               )}
//             </>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// };
// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// // import "./Profile.css";
// import "./Profile1.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       setuserName(auth.currentUser.displayName);
//       setuserPhoto(auth.currentUser.photoURL);
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto}></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           {" "}
//           <div className="profile-CreateLink-button">Add Your Playlist </div>{" "}
//         </Link>
//       </div>

//       <div className="homePage">

//       <div className="entries-container ">

      

//       // {pListLists.map((pList) => {
//   ////////////////////////
//   function SetCSS() {
//     const cssType = pList.pListType;
//     // const [pListCSS, setpListCSS] = useState("pList");
//     // setpListCSS(pListCSS + " " + cssType);
//     // console.log(pListCSS);
//     return cssType + " " + "pList";
//   }
//           ////////////////////////////////////
//           return (
//             <>
//               {isAuth && pList.author.id === auth.currentUser.uid && (
//                  <div className="bsds">
//                 <div className={SetCSS()}>
//                   {/* <div className="creatorName">   // it doesn't make sense to show name on profile
//                     <h2>{pList.author.name}</h2>
//                   </div> */}
                 
//                   <div className="pListHeader">
//                     <div className="title">
//                       <h1>{pList.title}</h1>
//                     </div>

//                     <div className="deletepList">
//                       {isAuth && pList.author.id === auth.currentUser.uid && (
//                         <button className="button"
//                           onClick={() => {
//                             deletepList(pList.id);
//                           }}
//                         >
//                           {" "}
//                           &#128465;
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="pListTextContainer pListText">
//                     {pList.pListText}
//                   </div>
//                   <a href={pList.pListLink}>
                   
// <div>
//                   <button className="pListTextContainer pListLink button-27" role="button" style={{ backgroundColor: 'white', color: 'black' }}>
//   Listen Now
// </button></div>



//                   </a>
//                   <div className="authorName">
//                   <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//     @{pList.author.name}
//   </h3></div>
//                 </div>
//                 </div>
//               )}
//             </>
//           );
//         })}
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// // import "./Profile.css";
// import "./Profile1.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       setuserName(auth.currentUser.displayName);
//       setuserPhoto(auth.currentUser.photoURL);
//     };

//     getpLists();
//   }, [randstate]); // [deletepList]np

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto}></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           {" "}
//           <div className="profile-CreateLink-button">Add Your Playlist </div>{" "}
//         </Link>
//       </div>

//       <div className="homePage">

//       <div className="entries-container ">

      

//       // {pListLists.map((pList) => {
//   ////////////////////////
//   function SetCSS() {
//     const cssType = pList.pListType;
//     // const [pListCSS, setpListCSS] = useState("pList");
//     // setpListCSS(pListCSS + " " + cssType);
//     // console.log(pListCSS);
//     return cssType + " " + "pList";
//   }
//           ////////////////////////////////////
//           return (
//             <>
//               {isAuth && pList.author.id === auth.currentUser.uid && (
//                  <div className="bsds">
//                 <div className={SetCSS()}>
//                   {/* <div className="creatorName">   // it doesn't make sense to show name on profile
//                     <h2>{pList.author.name}</h2>
//                   </div> */}
                 
//                   <div className="pListHeader">
//                     <div className="title">
//                       <h1>{pList.title}</h1>
//                     </div>

//                     <div className="deletepList">
//                       {isAuth && pList.author.id === auth.currentUser.uid && (
//                         <button className="button"
//                           onClick={() => {
//                             deletepList(pList.id);
//                           }}
//                         >
//                           {" "}
//                           &#128465;
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="pListTextContainer pListText">
//                     {pList.pListText}
//                   </div>
//                   <a href={pList.pListLink}>
                   
// <div>
//                   <button className="pListTextContainer pListLink button-27" role="button" style={{ backgroundColor: 'white', color: 'black' }}>
//   Listen Now
// </button></div>



//                   </a>
//                   <div className="authorName">
//                   <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//     @{pList.author.name}
//   </h3></div>
//                 </div>
//                 </div>
//               )}
//             </>
//           );
//         })}
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };



// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Profile1.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       if (auth.currentUser) {
//         setuserName(auth.currentUser.displayName);
//         setuserPhoto(auth.currentUser.photoURL);
//       }
//     };

//     getpLists();
//   }, [randstate]);

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto} alt="User Profile"></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           <div className="profile-CreateLink-button">Add Your Playlist </div>
//         </Link>
//       </div>

//       <div className="homePage">
//         <div className="entries-container">
//           {pListLists.map((pList) => {
//             function SetCSS() {
//               const cssType = pList.pListType;
//               return cssType + " " + "pList";
//             }
//             return (
//               <React.Fragment key={pList.id}>
//                 {isAuth && auth.currentUser && pList.author.id === auth.currentUser.uid && (
//                   <div className="bsds">
//                     <div className={SetCSS()}>
//                       <div className="pListHeader">
//                         <div className="title">
//                           <h1>{pList.title}</h1>
//                         </div>
//                         <div className="deletepList">
//                           {isAuth && pList.author.id === auth.currentUser.uid && (
//                             <button
//                               className="button"
//                               onClick={() => {
//                                 deletepList(pList.id);
//                               }}
//                             >
//                               &#128465;
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                       <div className="pListTextContainer pListText">{pList.pListText}</div>
//                       <a href={pList.pListLink}>
//                         <div>
//                           <button
//                             className="pListTextContainer pListLink button-27"
//                             role="button"
//                             style={{ backgroundColor: "white", color: "black" }}
//                           >
//                             Listen Now
//                           </button>
//                         </div>
                    

//                         </a>
//                    <div className="authorName">
//                    <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//      @{pList.author.name}
//    </h3></div>
//                  </div>
//                  </div>
//                )}
//              </>
//            );
//          })}
//       </div>
//        </div>
//        <Footer />
//      </>
//    );
//  };


// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Profile1.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       if (auth.currentUser) {
//         setuserName(auth.currentUser.displayName);
//         setuserPhoto(auth.currentUser.photoURL);
//       }
//     };

//     getpLists();
//   }, [randstate]);

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto} alt="User Profile"></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           <div className="profile-CreateLink-button">Add Your Playlist </div>
//         </Link>
//       </div>

//       <div className="homePage">
//         <div className="entries-container">
//           {pListLists.map((pList) => {
//             function SetCSS() {
//               const cssType = pList.pListType;
//               return cssType + " " + "pList";
//             }
//             if (isAuth && auth.currentUser && pList.author.id === auth.currentUser.uid) {
//               return (
//                 <div className="bsds" key={pList.id}>
//                   <div className={SetCSS()}>
//                     <div className="pListHeader">
//                       <div className="title">
//                         <h1>{pList.title}</h1>
//                       </div>
//                       <div className="deletepList">
//                         {isAuth && pList.author.id === auth.currentUser.uid && (
//                           <button
//                             className="button"
//                             onClick={() => {
//                               deletepList(pList.id);
//                             }}
//                           >
//                             &#128465;
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                     <div className="pListTextContainer pListText">{pList.pListText}</div>
//                     <a href={pList.pListLink}>
//                       <div>
//                         <button
//                           className="pListTextContainer pListLink button-27"
//                           role="button"
//                           style={{ backgroundColor: "white", color: "black" }}
//                         >
//                           Listen Now
//                         </button>
//                       </div>
//                     </a>
//                     <div className="authorName">
//                       <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//                         @{pList.author



// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Profile1.css";

// export const MyProfile = ({ isAuth }) => {
//   const [pListLists, setpListList] = useState([]);
//   const pListsCollectionRef = collection(db, "pLists");
//   const [randstate, setRandstate] = useState(0);
//   const [userName, setuserName] = useState("");
//   const [userPhoto, setuserPhoto] = useState("");

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
//       if (auth.currentUser) {
//         setuserName(auth.currentUser.displayName);
//         setuserPhoto(auth.currentUser.photoURL);
//       }
//     };

//     getpLists();
//   }, [randstate]);

//   return (
//     <>
//       <div className="profileHARDCODED">
//         <div className="profile">
//           <div className="profilePhoto">
//             <img className="profilePhotoIMG" src={userPhoto} alt="User Profile"></img>
//           </div>
//           <div className="profileName">
//             <h1> {userName} </h1>
//           </div>
//         </div>
//       </div>

//       <div className="profile-CreateLink">
//         <Link to="/createpList">
//           <div className="profile-CreateLink-button">Add Your Playlist </div>
//         </Link>
//       </div>

//       <div className="homePage">
//         <div className="entries-container">
//           {pListLists.map((pList) => {
//             function SetCSS() {
//               const cssType = pList.pListType;
//               return cssType + " " + "pList";
//             }
//             if (isAuth && auth.currentUser && pList.author.id === auth.currentUser.uid) {
//               return (
//                 <div className="bsds" key={pList.id}>
//                   <div className={SetCSS()}>
//                     <div className="pListHeader">
//                       <div className="title">
//                         <h1>{pList.title}</h1>
//                       </div>
//                       <div className="deletepList">
//                         {isAuth && pList.author.id === auth.currentUser.uid && (
//                           <button
//                             className="button"
//                             onClick={() => {
//                               deletepList(pList.id);
//                             }}
//                           >
//                             &#128465;
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                     <div className="pListTextContainer pListText">{pList.pListText}</div>
//                     <a href={pList.pListLink}>
//                       <div>
//                         <button
//                           className="pListTextContainer pListLink button-27"
//                           role="button"
//                           style={{ backgroundColor: "white", color: "black" }}
//                         >
//                           Listen Now
//                         </button>
//                       </div>
//                     </a>
//                     <div className="authorName">
//                       <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//                       <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
//      @{pList.author.name}
//    </h3></div>
//                  </div>
//                  </div>
//               )}
//             </>
//           );
//         })}
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };



import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import "./Profile1.css";

export const MyProfile = ({ isAuth }) => {
  const [pListLists, setpListList] = useState([]);
  const pListsCollectionRef = collection(db, "pLists");
  const [randstate, setRandstate] = useState(0);
  const [userName, setuserName] = useState("");
  const [userPhoto, setuserPhoto] = useState("");

  const deletepList = async (id) => {
    setRandstate(randstate + 1);
    const pListDoc = doc(db, "pLists", id);
    await deleteDoc(pListDoc);
  };

  useEffect(() => {
    const getpLists = async () => {
      const data = await getDocs(pListsCollectionRef);
      console.log(data);
      setpListList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      if (auth.currentUser) {
        setuserName(auth.currentUser.displayName);
        setuserPhoto(auth.currentUser.photoURL);
      }
    };

    getpLists();
  }, [randstate]);

  return (
    <>
      <div className="profileHARDCODED">
        <div className="profile">
          <div className="profilePhoto">
            <img
              className="profilePhotoIMG"
              src={userPhoto}
              alt="User Profile"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="profileName">
            <h1>{userName}</h1>
          </div>
        </div>
      </div>

      <div className="profile-CreateLink">
        <Link to="/createpList">
          <div className="profile-CreateLink-button">Add Your Playlist</div>
        </Link>
      </div>

      <div className="homePage">
        <div className="entries-container">
          {pListLists.map((pList) => {
            function SetCSS() {
              const cssType = pList.pListType;
              return cssType + " " + "pList";
            }

            if (isAuth && auth.currentUser && pList.author.id === auth.currentUser.uid) {
              return (
                <div className="bsds" key={pList.id}>
                  <div className={SetCSS()}>
                    <div className="pListHeader">
                      <div className="title">
                        <h1>{pList.title}</h1>
                      </div>
                      <div className="deletepList">
                        {isAuth && pList.author.id === auth.currentUser.uid && (
                          <button
                            className="button"
                            onClick={() => {
                              deletepList(pList.id);
                            }}
                          >
                            &#128465;
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="pListTextContainer pListText">{pList.pListText}</div>
                    <a href={pList.pListLink}>
                      <div>
                        <button
                          className="pListTextContainer pListLink button-27"
                          role="button"
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          Listen Now
                        </button>
                      </div>
                    </a>
                    <div className="authorName">
                      <h3 style={{ color: "white", transition: "color 0.3s ease-in-out" }}>
                        @{pList.author.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer/>
      </>
  );
        };
