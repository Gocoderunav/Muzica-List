// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatepList from "./pages/CreatepList";
// import Login from "./pages/Login";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyProfile } from "./pages/MyProfile";

// function App() {
//   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       window.location.pathname = "/login";
//     });
//   };

//   return (
//     <Router>
//       <nav>
//       <Link to="/">
//   <button className="button-27" role="button" style={{ backgroundColor: 'white', color: 'black' }}>
//     Home
//   </button>
// </Link>

//         {!isAuth ? (
//           <Link to="/login"> Login </Link>
//         ) : (
//           <>
//             <Link to="/createpList"> Add-PlayList </Link>
//             <Link to="/myprofile">My Profile</Link>
//             <button onClick={signUserOut}> Log Out</button>
//           </>
//         )}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home isAuth={isAuth} />} />
//         <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
//         <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
//         <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatepList from "./pages/CreatepList";
// import Login from "./pages/Login";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyProfile } from "./pages/MyProfile";

// function App() {
//   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       window.location.pathname = "/login";
//     });
//   };

//   return (
//     <Router>
//       <nav class="bsd">
//       <Link to="/">
//   <button className="button-27" role="button" style={{ backgroundColor: 'black', color: 'white' }}>
//     Home
//   </button>
// </Link>

//         {!isAuth ? (
//           <Link to="/login"> Login </Link>
//         ) : (
//           <>
//              <Link to="/createpList">
//   <button className="button-27" role="button" style={{ backgroundColor: 'black', color: 'white' }}>
//     Add Playlist
//   </button>
// </Link>

// <Link to="/myprofile">
//   <button className="button-27" role="button" style={{ backgroundColor: 'black', color: 'white' }}>
//     My Profile
//   </button>
// </Link>

//             <button  onClick={signUserOut} role="button"  style={{ backgroundColor: 'black', color: 'white' }}> Log Out</button>
//           </>
//         )}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home isAuth={isAuth} />} />
//         <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
//         <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
//         <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatepList from "./pages/CreatepList";
// import Login from "./pages/Login";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyProfile } from "./pages/MyProfile";

// function App() {
//   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
//   const [searchQuery, setSearchQuery] = useState("");

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       window.location.pathname = "/login";
//     });
//   };

//   return (
//     <Router>
//       <nav class="bsd">
//         <Link to="/">
//           <button
//             className="button-27"
//             role="button"
//             style={{ backgroundColor: "black", color: "white" }}
//           >
//             Home
//           </button>
//         </Link>

//         {!isAuth ? (
//           <Link to="/login"> Login </Link>
//         ) : (
//           <>
//             <Link to="/createpList">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 Add Playlist
//               </button>
//             </Link>

//             <Link to="/myprofile">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 My Profile
//               </button>
//             </Link>

//             <button
//               onClick={signUserOut}
//               role="button"
//               style={{ backgroundColor: "black", color: "white" }}
//             >
//               Log Out
//             </button>
//           </>
//         )}

//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search title..."
//           style={{
//             width: "300px",
//             padding: "8px",
//             borderRadius: "20px",
//             border: "none",
//             outline: "none",
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </nav>

//       {/* Existing code... */}
//       <Routes>
//          <Route path="/" element={<Home isAuth={isAuth} />} />
//          <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
//          <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
//          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//        </Routes>
//      </Router>
    
//   );
// }

// export default App;


// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatepList from "./pages/CreatepList";
// import Login from "./pages/Login";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyProfile } from "./pages/MyProfile";

// function App() {
//   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
//   const [searchQuery, setSearchQuery] = useState("");

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       window.location.pathname = "/login";
//     });
//   };

//   return (
//     <Router>
//       <nav class="bsd">
//         <Link to="/">
//           <button
//             className="button-27"
//             role="button"
//             style={{ backgroundColor: "black", color: "white" }}
//           >
//             Home
//           </button>
//         </Link>

//         {!isAuth ? (
//           <Link to="/login"> Login </Link>
//         ) : (
//           <>
//             <Link to="/createpList">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 Add Playlist
//               </button>
//             </Link>

//             <Link to="/myprofile">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 My Profile
//               </button>
//             </Link>

//             <button
//               onClick={signUserOut}
//               role="button"
//               style={{ backgroundColor: "black", color: "white" }}
//             >
//               Log Out
//             </button>
//           </>
//         )}

//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search title..."
//           style={{
//             width: "300px",
//             padding: "8px",
//             borderRadius: "20px",
//             border: "none",
//             outline: "none",
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </nav>

//       {/* Existing code... */}
//       <Routes>
//          <Route path="/" element={<Home isAuth={isAuth} />} />
//          <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
//          <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
//          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//        </Routes>
//      </Router>
    
//   );
// }

// export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatepList from "./pages/CreatepList";
// import Login from "./pages/Login";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyProfile } from "./pages/MyProfile";

// function App() {
//   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
//   const [searchQuery, setSearchQuery] = useState("");

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       window.location.pathname = "/login";
//     });
//   };

//   return (
//     <Router>
//       <nav className="bsd">
//         <Link to="/">
//           <button
//             className="button-27"
//             role="button"
//             style={{ backgroundColor: "black", color: "white" }}
//           >
//             Home
//           </button>
//         </Link>

//         {!isAuth ? (
//           <Link to="/login"> Login </Link>
//         ) : (
//           <>
//             <Link to="/createpList">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 Add Playlist
//               </button>
//             </Link>

//             <Link to="/myprofile">
//               <button
//                 className="button-27"
//                 role="button"
//                 style={{ backgroundColor: "black", color: "white" }}
//               >
//                 My Profile
//               </button>
//             </Link>

//             <button
//               onClick={signUserOut}
//               role="button"
//               style={{ backgroundColor: "black", color: "white" }}
//             >
//               Log Out
//             </button>
//           </>
//         )}

//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search title..."
//           style={{
//             width: "300px",
//             padding: "8px",
//             borderRadius: "20px",
//             border: "none",
//             outline: "none",
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home isAuth={isAuth} searchQuery={searchQuery} />} />
//         <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
//         <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
//         <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatepList from "./pages/CreatepList";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { MyProfile } from "./pages/MyProfile";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [searchQuery, setSearchQuery] = useState("");

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="bsd">
        <Link to="/">
          <button
            className="button-27"
            role="button"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Home
          </button>
        </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpList">
              <button
                className="button-27"
                role="button"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Add Playlist
              </button>
            </Link>

            <Link to="/myprofile">
              <button
                className="button-27"
                role="button"
                style={{ backgroundColor: "black", color: "white" }}
              >
                My Profile
              </button>
            </Link>

            <button
              onClick={signUserOut}
              role="button"
              
              style={{ backgroundColor: "black", color: "white" }}
            >
              Log Out
            </button>
          </>
        )}

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search title..."
          style={{
            width: "300px",
            padding: "8px",
            borderRadius: "20px",
            border: "none",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home isAuth={isAuth} searchQuery={searchQuery} />}
        />
        <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
        <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
