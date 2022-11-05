import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";
import "./style.css"

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Image />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="goods_list">
                <GoodsCard name="Диван" price="9500 гривень" img="https://cdn1.jysk.com/getimage/wd2.large/59289" />
                <GoodsCard name="Тахта" price="7000 гривень" img="https://cdn1.jysk.com/getimage/wd2.large/115419" />
                <GoodsCard name="Комод" price="2650 гривень" img="https://cdn1.jysk.com/getimage/wd2.large/50247" />
                <GoodsCard name="Банкетка" price="2000 гривень" img="https://cdn1.jysk.com/getimage/wd2.large/115497" />
                <GoodsCard name="Стіл письмовий" price="2350 гривень" img="https://cdn2.jysk.com/getimage/wd2.large/86357" />
                <GoodsCard name="Крісло" price="7500 гривень" img="https://cdn4.jysk.com/getimage/wd2.large/112635" />
            </div>
        </div>
    );
}

export default App;

