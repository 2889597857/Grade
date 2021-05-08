import { useStore } from "vuex";
const showComponent = () => {
    const store = useStore()
    const jurisdiction = store.state.information.role;
    if (jurisdiction == '学生') {
        console.log(123)
        return "student";
    } else {
        return "teacher";
    }
}
export {
    showComponent
}