import logo from './logo.svg';
import './App.css';
import {MyLogo} from "./components/Logo/MyLogo";
import {MenuButton} from "./components/Menu_item/MenuButton";
import {HeadNavigationHolder} from "./components/HeadNavigationHolder/HeadNavigationHolder";
import {Banner} from "./components/Banner/Banner";
import {MainContentHolder} from "./components/MainContentHolder/MainContentHolder";
import {SideNavigationHolder} from "./components/SideNavigationPanel/SideNavigationPanel";
import {Section} from "./components/Section/Section";
import {SectionTitle} from "./components/SectionTitle/SectionTitle";
import {SectionText} from "./components/SectionTextHolder/SectionText";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyLogo/>
                <HeadNavigationHolder>
                    <MenuButton text="About Us"/>
                    <MenuButton text="Products"/>
                    <MenuButton text="Contact Us"/>
                    <MenuButton text="Socials"/>
                </HeadNavigationHolder>

            </header>
            <Banner><span>какой-то баннер</span> </Banner>
            <main className="App-main">
                <MainContentHolder>
                    <Section>
                        <SectionTitle text="1-й Заголовок для статьй"/>
                        <SectionText>Using the flex-direction property with values of row-reverse or column-reverse will
                            create
                            a disconnect between the visual presentation of content and DOM order.
                            This will adversely affect users experiencing low vision navigating with the aid of
                            assistive technology
                            such as a screen reader. If the visual (CSS) order is important, then screen reader users
                            will not have access
                            to the correct reading order.
                        </SectionText>

                    </Section>
                    <Section>
                        <SectionTitle text="2-й Заголовок для статьй"/>
                        <SectionText>Using the flex-direction property with values of row-reverse or column-reverse will
                            create
                            a disconnect between the visual presentation of content and DOM order.
                            This will adversely affect users experiencing low vision navigating with the aid of
                            assistive technology
                            such as a screen reader. If the visual (CSS) order is important, then screen reader users
                            will not have access
                            to the correct reading order.
                        </SectionText>

                    </Section>
                    <Section>
                        <SectionTitle text="3-й Заголовок для статьй"/>
                        <SectionText>Using the flex-direction property with values of row-reverse or column-reverse will
                            create
                            a disconnect between the visual presentation of content and DOM order.
                            This will adversely affect users experiencing low vision navigating with the aid of
                            assistive technology
                            such as a screen reader. If the visual (CSS) order is important, then screen reader users
                            will not have access
                            to the correct reading order.
                            <p>Using the flex-direction property with values of row-reverse or column-reverse will
                                create
                                a disconnect between the visual presentation of content and DOM order.
                                This will adversely affect users experiencing low vision navigating with the aid of
                                assistive technology
                                such as a screen reader. If the visual (CSS) order is important, then screen reader
                                users will not have access
                                to the correct reading order.</p>
                        </SectionText>
                    </Section>
                    <Section>
                        <SectionTitle text="4-й Заголовок для статьй"/>
                        <SectionText>Using the flex-direction property with values of row-reverse or column-reverse will
                            create
                            a disconnect between the visual presentation of content and DOM order.
                            This will adversely affect users experiencing low vision navigating with the aid of
                            assistive technology
                            such as a screen reader. If the visual (CSS) order is important, then screen reader users
                            will not have access
                            to the correct reading order.
                            <p>Using the flex-direction property with values of row-reverse or column-reverse will
                                create
                                a disconnect between the visual presentation of content and DOM order.
                                This will adversely affect users experiencing low vision navigating with the aid of
                                assistive technology
                                such as a screen reader. If the visual (CSS) order is important, then screen reader
                                users will not have access
                                to the correct reading order.</p>
                            <p>Using the flex-direction property with values of row-reverse or column-reverse will
                                create
                                a disconnect between the visual presentation of content and DOM order.
                                This will adversely affect users experiencing low vision navigating with the aid of
                                assistive technology
                                such as a screen reader. If the visual (CSS) order is important, then screen reader
                                users will not have access
                                to the correct reading order.</p>
                        </SectionText>
                    </Section>
                </MainContentHolder>
                <SideNavigationHolder>
                    <a href='#'>Ссылка 1</a>
                    <a href='#'>Ссылка 2</a>
                    <a href='#'>Ссылка 3</a>
                    <a href='#'>Ссылка 4</a>
                </SideNavigationHolder>
            </main>

        </div>
    );
}

export default App;
