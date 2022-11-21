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
    return <div>Role</div>;
};

export default Role;
