import { NavLink } from 'react-router-dom';
export const Header =()=>{
    const menuList =[
        {
            name:"Home",
            url:"/"
        },
        {
            name:"Aboutus",
            url:"/Aboutus"
        },
        {
            name:"Services",
            url:"/services"
        },
        {
            name:"Blogs",
            url:"/blogs"
        }
    ]
    return(
        <>
        <nav>
            <ul>
                {
                    menuList.map((item,index)=>{
                        return(
                            <li key={index}>
                                
                                <NavLink to={item.url}>{item.name}</NavLink>
                            </li>
                        )
                    }
                   )
                }
            </ul>
        </nav>
        </>
    )

}