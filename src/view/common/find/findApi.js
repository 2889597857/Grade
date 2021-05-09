import { findGrade } from "@/api/find.js";
export default function (id) {
    return new Promise((resolve, reject) => {
        findGrade(id).then((result) => {
            let { id, name, grade } = result
            if (JSON.stringify(grade) !== "{}") {
                let score = null
                for (const key in grade) {
                    if (grade.hasOwnProperty(key)) {
                        score += grade[key]
                    }
                }
                grade.score = score
                resolve({ name, id, grade })
            } else {
                resolve({ name, id })
            }
        }).catch((err) => {
            reject(err)
        });
    });
}