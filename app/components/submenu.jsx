import { Link, useLocation } from "@remix-run/react";
import { HiArrowDown, HiUser } from "react-icons/hi";

export default function SubMenu({data}) {
    const { pathname } = useLocation()
    return (
        <>
            <li className={`link ${pathname.includes(data.name) && text-blue-900}`}>
                <span>
                    {data.icon}
                </span>
                {/* <data.icon size={20}/> */}
                <p className="capitalize flex-1">{data.name}</p>
                <HiArrowDown/>
            </li>
            <ul>
                {
                    data.menus.map(menu => (
                        <li key={menu}>
                            <Link to={`/${data.link}/${menu}`} className="link !bg-transparent capitalize">
                                {menu}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
} 