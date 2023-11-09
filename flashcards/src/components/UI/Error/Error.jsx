function Error({error}) {

    return (
        <div className="error">
            {error.length > 0 ? error.map(er => <div key={er.id} className="error__container">{er.text}</div>) : <></>}
        </div>
    )

}

export default Error;