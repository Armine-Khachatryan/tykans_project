import React from "react";
import Logo from '../../assets/images/Logo.png';
import {NavLink, useLocation} from 'react-router-dom';
import classes from './Header.module.css';



function Header() {
const {pathname} = useLocation()

    return (
        <div className={classes.headerWhole}>
            <div>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={classes.headerPart2}>
                <NavLink
                    to="/"
                          className={({isActive}) =>
                              classes['nav_link' + (pathname === '/'  && isActive ? '_active' : '')]
                          }
                >
                    Services
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                    classes['nav_link' +
                    ((pathname === '/life-at-tykans' && isActive) || (pathname === '/team-testimonials' && !isActive)
                        ? '_active' : '' ) ]
                }
                         to="/life-at-tykans" >
                    Life at Tykans
                </NavLink>
                <NavLink        className={({isActive}) =>
                    classes['nav_link' +
                    ((pathname === '/careers' && isActive) || (pathname === '/administrative' && !isActive)
                    // classes['nav_link' + ( isActive ? '_active' : '' ) ]
                        ? '_active' : '' ) ]
                }
                             to="/careers">
                    Careers
                </NavLink>
                <NavLink        className={({isActive}) =>
                    classes['nav_link' + ( isActive ? '_active' : '' ) ]
                }
                             to="/about-us" >
                    About Us
                </NavLink>
                <div className={classes.activeBlue}>Contact Us</div>
            </div>
        </div>
    )
}


export default Header;


//
// function Header() {
//     const navigate=useNavigate()
//
//     const [showYellow, setShowYellow]=useState('services');
//     console.log(showYellow)
//
//     useEffect(()=>{
//         setShowYellow("txt")
//     },["txt"])
//
//     // const setColorYellow = (text) => {
//     //     setShowYellow(text)
//     // }
//
//
//
//     return (
//         <div className={classes.headerWhole}>
//             <div className={classes.headerPart1}>
//                 <img src={Logo} alt='logo'/>
//             </div>
//             <div className={classes.headerPart2}>
//                 <div className={`${classes.headerPart} ${showYellow === "Services" && classes.activeYellow}`}
//                      onClick={()=>{setShowYellow("Services");
//                          navigate(`/Home`)}}>Services</div>
//                 <div className={`${classes.headerPart} ${showYellow === "Life at Tykans" && classes.activeYellow}`}
//                      onClick={()=>{setShowYellow("Life at Tykans");
//                          navigate(`/life-at-tykans`)}}>Life at Tykans</div>
//                 <div className={`${classes.headerPart} ${showYellow === 'Careers' && classes.activeYellow}`}
//                      onClick={()=>{setShowYellow("Careers")
//                          navigate(`/careers`)}}>Careers</div>
//                 <div className={`${classes.headerPart} ${showYellow === 'About Us' && classes.activeYellow}`}
//                      onClick={()=>{setShowYellow("About Us")}}>About Us</div>
//                 <div className={classes.activeBlue}>Contact Us</div>
//             </div>
//         </div>
//     )
// }
//
//
// export default Header;