import { usePage } from "@inertiajs/inertia-react"
import Navigation from "./Navigation"


export const Layout = ({ children }) => {
const user = usePage().props.auth.user;

    return (
        <div>
            <section className="p-6 bg-gray-200">
                <header className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="font-bold text-lg">My App</h1>
                        <p className="text-sm ml-4">Welcome back, { user.username }</p>
                    </div>
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