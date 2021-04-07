import { findGrade } from "@/api/find.js";
export default function (id) {
    return new Promise((resolve, reject) => {
        findGrade(id).then((result) => {
            if (result.status == 200) {
                resolve(result.data)
            } else { reject('错误') }
        }).catch((err) => {

        });
    });
}