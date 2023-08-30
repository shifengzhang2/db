import req from "@/utils/request"
export const searchInfo = (mId)=>{
    return req({
        url:'/getOne.php',
        params:{mId}
    })
}
export const getMoveManList = (mId)=>{
    return req({
        url:"/getManByMid.php",
        params:{mId}
    })
}