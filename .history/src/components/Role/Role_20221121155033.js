import "./Role.scss";
import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const Role = (props) => {
    const [listChilds, setListChilds] = useState({
        child1: { url: "", description: "" },
    });
    const handleOnchangeInput = (name, value, key) => {
        let _listChilds = _cloneDeep(listChilds);
        _listChilds[key][name] = value;
        setListChilds(_listChilds);
    };
    return <div>Role</div>;
};

export default Role;
