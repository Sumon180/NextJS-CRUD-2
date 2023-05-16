

const BugToast = ({ message }: any) => {
    return (
        <div className="toast toast-top toast-start">
            <div className="alert alert-info">
                <div>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default BugToast
