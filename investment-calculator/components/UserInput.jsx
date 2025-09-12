
const UserInput = ({ inputData, handleInputChange }) => {

    return (
        <section id="user-input">
            <div className="iaznput-group">
                <p><label>Initial Investment</label> <input type="number" name="iniIvestment" value={inputData.iniIvestment} onChange={handleInputChange} required /></p>
                <p><label>Anual Investment</label> <input type="number" name="anuInvestment" value={inputData.anuInvestment} onChange={handleInputChange} required /></p>
            </div>
            <div className="input-group">
                <p><label>Expexted Return</label> <input type="number" name="expReturn" value={inputData.expReturn} onChange={handleInputChange} required /></p>
                <p><label>Duration</label> <input type="number" name="duration" value={inputData.duration} onChange={handleInputChange} required /></p>
            </div>

        </section>
    )
}

export default UserInput