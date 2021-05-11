import { findGrade } from "@/api/find.js";
export default function (id) {
    return new Promise((resolve, reject) => {
        findGrade(id).then((result) => {
            let { id, name, grade } = result
            resolve({ name, id, grade })
        }).catch((err) => {
            reject(err)
        });
    });
}