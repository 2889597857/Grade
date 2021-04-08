import { findGrade } from "@/api/find.js";
export default function (id) {
    return new Promise((resolve, reject) => {
        findGrade(id).then((result) => {
            let data = result.data
            let score = 0
            for (const key in data.grade) {
                if (data.grade.hasOwnProperty(key)) {
                    score += data.grade[key]
                }
                data.grade.score = score
                resolve(data)
            }
        }).catch((err) => {
            console.log(err)
        });
    });
}