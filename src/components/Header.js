/**
 * The component is for the logo.
 * The component is in the center on small screens.
 * However, it is on the left corner on large screens.
 */
export default function Header(){
    return (
        <header className="lg:w-1/3">
            <div className="flex justify-center items-center lg:justify-between">
                <img src="image/Logo.png"  className="w-1/2" alt="little lemon logo" />
            </div>
            <div>ddd</div>
        </header>
    )
}