import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
    const [items, setItems] = useState([])

    function addItem(item) {
        setItems(prevValue => {
            return [...prevValue, item]
        })
    }

    function deletedItem(id) {
        setItems(prevValue => {
            return prevValue.filter((value, index) => index !== id)
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addItem={addItem} />
            {items.map((item, index) => {
                return (<Note
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    onDeleted={deletedItem} />)
            })}
            <Footer />
        </div>
    );
}

export default App;
