import menu from '../../assets/menu2.jpg';

function Menu() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-4xl font-bold mb-6 font-serif text-yellow-400">Our Menu</h1>
            <div className="w-133 h-146 overflow-hidden rounded-lg shadow-lg">
                <img src={menu} alt="Menu" className="object-cover w-full h-full" />
            </div>
        </div>
    );
    
}

export default Menu;
