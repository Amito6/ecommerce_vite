const Layout = ({children}) =>{
    return (
        <div>
            <h1 className="text-5xl font-bold text-orange-300">Header</h1>
            {children}
            <h1 className="text-5xl font-bold text-orange-300">Footer</h1>
        </div>
    )
};

export default Layout;