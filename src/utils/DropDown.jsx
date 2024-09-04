import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <div className="hs-dropdown [--trigger:hover] relative inline-flex">
            <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-transparent  shadow-sm  focus:outline-none  disabled:opacity-50 text-white disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                Camps
                <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/camps/summer-camps">
                    Summer Camps
                </NavLink>
                <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/camps/winter-camps">
                    Winter Camps
                </NavLink>
                <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/camps/adventure-camps">
                    Adventure Camps
                </NavLink>
            </div>
        </div>
    );
};

export default DropdownMenu;
