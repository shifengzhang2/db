import req from "@/utils/request"
import qs from "qs"
export const userReg = ({uName,uPwd})=>{
    return req({
        url:"/reg.php",
        params:{uName,uPwd}
    })
}
export const userLogin = ({uName,uPwd})=>{
    // console.log(1,{uName,uPwd})
    // console.log(2,qs.stringify({uName,uPwd}))
    return req({
        url:"/login.php",
        method:"post",
        data:qs.stringify({uName,uPwd})
    })
}