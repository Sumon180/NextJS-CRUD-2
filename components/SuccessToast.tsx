import { BiCheck } from 'react-icons/bi'

const SuccessToast = ({ message }: any) => {
    return (
        <div className="toast toast-top toast-start">
            <div className="alert alert-success">
                <div>
                    <span>{message}</span><BiCheck size={20} color='rgb(0,0,94)' />
                </div>
            </div>
        </div>
    )
}

export default SuccessToast
