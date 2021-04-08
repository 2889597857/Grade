import { findGrade } from "@/api/find.js";
export default function (id) {
    return new Promise((resolve, reject) => {
        findGrade(id).then((result) => {
            let { id, name, grade } = result
            let score = 0
            for (const key in grade) {
                if (grade.hasOwnProperty(key)) {
                    score += grade[key]
                }
                grade.score = score
                resolve({ name, id, grade })
            }
        }).catch((err) => {
            console.log(err)
        });
    });
}