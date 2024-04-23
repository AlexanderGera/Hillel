import logo from './logo.svg';
import './App.css';
import {MyLogo} from "./components/Logo/MyLogo";
import {MenuButton} from "./components/Menu_item/MenuButton";
import {HeadNavigationHolder} from "./components/HeadNavigationHolder/HeadNavigationHolder";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyLogo />
                <MenuButton text="About Us" />
                <HeadNavigationHolder>
                    <MyLogo />
                    <MenuButton text="About Us" />
                    <MenuButton text="Products" />
                    <MenuButton text="Contact Us" />
                    <MenuButton text="Socials" />
                </HeadNavigationHolder>

            </header>
            <main className="App-main">

            </main>

        </div>
    );
}

export default App;
