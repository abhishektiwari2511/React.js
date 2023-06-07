import { forwardRef} from "react";
 function User (props,re){
return (
    <div>
        <input type="text " ref={re} />
    </div>
)

}
export default forwardRef(User)