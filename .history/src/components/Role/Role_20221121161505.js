import "./Role.scss";
import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const Role = (props) => {
    const [listChilds, setListChilds] = useState({
        child1: { url: "", description: "" },
    });
    const handleOnchangeInput = (name, value, key) => {
        let _listChilds = _.cloneDeep(listChilds);
        _listChilds[key][name] = value;
        setListChilds(_listChilds);
    };
    const handleAddNewInput = () => {
        let _listChilds = _.cloneDeep(listChilds);
        _listChilds[`child=${uuidv4()}`] = {
            url: "",
            description: "",
        };
        setListChilds(_listChilds);
    };
    const handleDeleteInput = (key) => {
        let _listChilds = _.cloneDeep(listChilds);
        delete _listChilds[key];
        setListChilds(_listChilds);
    };
    return (
        <>
            <div className="role-container">
                <div className="container">
                    <div className="mt-3">
                        <div className="title-role">
                            <h4>Add a new role</h4>
                        </div>
                        <div className="role-parent"></div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Role;
