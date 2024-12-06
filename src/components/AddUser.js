
const AddUser = () => {
    return (<>
        <div className="container">
        <br/>
            <div className="row">
                <div className="card">
                    <h1 className="text-center">Add User Details</h1>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">

                                <label className="form-label">UserName:</label>
                                <input
                                    type='text'
                                    name='uName'
                                    className='form-control'
                                    placeholder='please enter UserName'
                                ></input>


                                <label className="form-label">Mail:</label>
                                <input
                                    type='text'
                                    name='mail'
                                    className='form-control'
                                    placeholder='please enter Mail'
                                ></input>

                            </div>

                        </form>

                    </div>


                </div>

            </div>


        </div>

    </>

    )

}
export default AddUser