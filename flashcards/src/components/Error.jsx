function Error({error}) {

    return (
        <div className="error">
            {/* <div className="error__container">{error}</div> */}
            {error.length > 0 ? error.map(er => <div className="error__container">{er}</div>) : <></>}
        </div>
    )

}

export default Error;