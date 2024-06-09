import Navigation from "./Navigation"


export const Layout = ({children}) => {
    return (
        <div>
            <section className="p-6 bg-gray-200">
                <header className="flex justify-between">
                    <h1 className="font-bold text-lg">My App</h1>
                    <Navigation />
                </header>
            </section>
            <section className="p-6">
                <div className="max-w-3xl mx-auto">
                    {children}
                </div>
            </section>
        </div>
    )
}
export default Layout