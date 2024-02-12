// Always explain process and approach.

// single selection
// multiple selections accordion
import data from "./data"
import React, { useState } from 'react';
import './styles.css'


function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multipleSelected, setMultipleSelected] = useState([])

    function handleSingleSelection(getCurrentId) {

        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multipleSelected];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultipleSelected(copyMultiple)

    }

    console.log(selected, multipleSelected);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((data) => (
                        <div className="item">
                            <div onClick={enableMultiSelection
                                ? () => handleMultiSelection(data.id)
                                : () => handleSingleSelection(data.id)} className="title">
                                <h3>{data.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ?
                                    multipleSelected.indexOf(data.id) !== -1 &&
                                    <div className="content">{data.answer}</div> :
                                    selected === data.id && <div className="content">{data.answer}</div>
                            }
                            {/* {
                                selected === data.id || multipleSelected.indexOf(data.id) !== -1 ?
                                    <div className="content">{data.answer}</div>
                                    : null
                            } */}
                        </div>
                    ))
                ) : (
                    <div> no data found </div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
