import { HiOutlineSearch } from "react-icons/hi";




export default function SearchInput({onClick}) {
    return (
        <div id="wrapper">
            <input className="search-bar" type="text" />       
            <button className="search-button" placeholder="Cari NIM" onClick={onClick}>
                {/* <h1 className="text-white">Cari</h1> */}
                <HiOutlineSearch/>
            </button>
        </div>
    )
}