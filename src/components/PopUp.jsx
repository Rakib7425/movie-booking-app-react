import React, { useState } from "react";

const PopUp = ({ idMessage }) => {
    // create state `open` with default as false
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* click of button toggles `open` value therefore visibility */}
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#${idMessage}`}
            >
                {idMessage}
            </button>
            {/* If open is true show your <div /> */}
            {open && (
                <div
                    className="modal fade"
                    id={idMessage}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    content
                </div>
            )}
        </>
    );
};

export default PopUp;