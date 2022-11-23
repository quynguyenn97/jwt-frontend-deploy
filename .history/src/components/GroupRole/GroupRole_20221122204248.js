import "./GroupRole.scss";
const GroupRole = () => {
    return (
        <div className="group-role-container">
            <div className="container">
                <div className="container mt-3">
                    <h4>Group Role:</h4>
                    <div>
                        Select Group:
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Group (<span className="red">*</span>):
                            </label>
                            <select className="form-select" type="text">
                                {userGroups.length > 0 &&
                                    userGroups.map((item, index) => {
                                        return (
                                            <option
                                                key={`group-${index}`}
                                                value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupRole;
