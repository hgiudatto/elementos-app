import React from "react";

const AddElement = () => {
    return (
        <div className="ui main">
            <h2>Add Element</h2>
            <form className="ui form">
                <div className="field">
                    <label className="label">City</label>
                    <input type="text" name="city" placeholder="City" />
                </div>
                <div className="field">
                    <label className="label">Country</label>
                    <input type="text" name="country" placeholder="Country" />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}


export default AddElement
